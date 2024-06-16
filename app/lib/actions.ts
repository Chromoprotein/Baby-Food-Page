'use server';

import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';

const FormSchema = z.object({
  id: z.string(),
  userId: z.string(),
  foodId: z.string(),
  opinion: z.enum(['love', 'like', 'dislike']),
  date: z.string(),
});

const CreateFoodLog = FormSchema.omit({ id: true, date: true });

export async function addFoodLog(formData: FormData) {
  const { userId, foodId, opinion } = CreateFoodLog.parse({
    userId: formData.get('userId'),
    foodId: formData.get('foodId'),
    opinion: formData.get('opinion'),
  });

  const date = new Date().toISOString().split('T')[0];

  await sql`
    INSERT INTO foodlog (user_id, food_id, date, opinion)
    VALUES (${userId}, ${foodId}, ${date}, ${opinion})
  `;

  revalidatePath('/babyfood');
}