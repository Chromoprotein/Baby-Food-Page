'use server';

import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const FormSchema = z.object({
  id: z.string(),
  userId: z.string(),
  foodId: z.string(),
  opinion: z.enum(['love', 'like', 'dislike']),
  date: z.string(),
});

// CREATE FOOD LOG

const CreateFoodLog = FormSchema.omit({ id: true, userId: true, foodId: true, date: true });

export async function addFoodLog(ids: { foodId: string; userId: string }, formData: FormData) {
  const { opinion } = CreateFoodLog.parse({
    opinion: formData.get('opinion'),
  });

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