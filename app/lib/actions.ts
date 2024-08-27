'use server';

import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
const bcrypt = require('bcrypt');

import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import { FormState, toFormState, fromErrorToFormState } from './formValidation';

// State for useFormState errors

export type State = {
  message?: string | null;
} | undefined;

// For registering a user

const createMessageSchema = z.object({
  name: z.string().min(1, {  message: "Username must be longer than 1 character" }).max(191, {  message: "Username must be between 1-191 characters long" }),
  email: z.string().email("Must be a valid email"),
  dob: z.string().date("Date must be in YYYY-MM-DD (year-month-day) format"),
  password: z.string().min(8, "Password must be at least 8 characters long").max(191, "Password must be between 8-191 characters long"),
});

export async function registerUser(formState: FormState, formData: FormData ) {

  try {

    const { name, email, dob, password } = createMessageSchema.parse({
      name: formData.get('name'),
      email: formData.get('email'),
      dob: formData.get('dob'),
      password: formData.get('password'),
    });

    const hashedPassword = await bcrypt.hash(password, 10);

    await sql`
      INSERT INTO users (name, dob, email, password)
      VALUES (${name}, ${dob}, ${email}, ${hashedPassword})
    `;
  } catch (error) {
    return fromErrorToFormState(error);
  }

  return toFormState('SUCCESS', 'New user created');
}

// for logging in
// imports the signIn function from auth.ts

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Incorrect email or password.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
  revalidatePath('/babyfood');
  redirect('/babyfood');
}

// CREATE FOOD LOG

const FormSchema = z.object({
  id: z.string(),
  userId: z.string(),
  foodId: z.string(),
  opinion: z.enum(['love', 'like', 'dislike']),
  date: z.string(),
});

const CreateFoodLog = FormSchema.omit({ id: true, userId: true, foodId: true, date: true });

export async function addFoodLog(ids: { foodId: string; userId: string }, prevState: State, formData: FormData ) {

  const validatedFields = CreateFoodLog.safeParse({
    opinion: formData.get('opinion'),
  });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      message: 'Select baby\'s opinion.',
    };
  }

  const { opinion } = validatedFields.data;
  const date = new Date().toISOString().split('T')[0];

  try {
    await sql`
      INSERT INTO foodlog (user_id, food_id, date, opinion)
      VALUES (${ids.userId}, ${ids.foodId}, ${date}, ${opinion})
    `;
  } catch (error) {
    return { message: 'Database Error: Failed to log the food' };
  }

  revalidatePath('/babyfood');
}

// UPDATE FOOD LOG

const UpdateFoodLog = FormSchema.omit({ id: true, userId: true, foodId: true, date: true });

export async function updateFoodLog(id: string, formData: FormData) {
  const { opinion } = UpdateFoodLog.parse({
    opinion: formData.get('opinion'),
  });
 
  try {
    await sql`UPDATE foodlog SET opinion = ${opinion} WHERE id = ${id}`;
  } catch (error) {
    return { message: 'Database Error: Failed to update the food log' };
  }
  revalidatePath('/baby');
  redirect('/baby');
}

// DELETE FOOD LOG

export async function deleteFoodLog(id: string) {
  try {
    await sql`DELETE FROM foodlog WHERE id = ${id}`;
  } catch (error) {
    return { message: 'Database Error: Failed to delete the food log' };
  }
  revalidatePath('/baby');
  redirect('/baby');
}