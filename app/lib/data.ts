import { sql } from '@vercel/postgres';
import { BabyFood, User, Log } from './definitions';
import { unstable_noStore as noStore } from 'next/cache';

export async function fetchBabyFoods(user_id: string) {
    noStore();
    try {

        const data = await sql<BabyFood>`SELECT bf.id, bf.name, bf.category, bf.age 
        FROM babyfoods bf
        WHERE bf.id NOT IN (
            SELECT fl.food_id
            FROM foodlog fl
            WHERE fl.user_id = ${user_id}
        )`;

        return data.rows;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch baby food data.');
    }
}

export async function fetchFoodLog(user_id: string) {
    noStore();
    try {

        const data = await sql<BabyFood>`SELECT bf.id, bf.name, bf.category, bf.age, fl.date 
        FROM foodlog fl
        JOIN babyfoods bf ON fl.food_id = bf.id 
        WHERE fl.user_id = ${user_id}`;

        return data.rows;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch food log data.');
    }
}

export async function fetchTotalLogs(user_id: string) {
    noStore();
    try {

        const data = await sql`SELECT COUNT(*) AS total
        FROM foodlog fl
        JOIN babyfoods bf ON fl.food_id = bf.id 
        WHERE fl.user_id = ${user_id}`;

        return Number(data.rows[0].total);

    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch food log data.');
    }
}