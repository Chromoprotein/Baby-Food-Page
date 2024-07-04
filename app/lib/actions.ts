'use server';

import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { signIn } from '@/auth';
import { AuthError } from 'next-auth';

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
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}

const FormSchema = z.object({
  id: z.string(),
  userId: z.string(),
  foodId: z.string(),
  opinion: z.enum(['love', 'like', 'dislike'], {
    invalid_type_error: 'Please select an opinion',
  }),
  date: z.string(),
});

// CREATE FOOD LOG

export type State = {
  message?: string | null;
} | undefined;

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