import { sql } from '@vercel/postgres';
import { BabyFood, User, Log } from './definitions';
import { unstable_noStore as noStore } from 'next/cache';

export async function fetchFilteredBabyFoods(user_id: string, query: string, category: string, currentPage: number) {
    noStore();
    try {

        
        await new Promise((resolve) => setTimeout(resolve, 3000));
        const ITEMS_PER_PAGE = 6;
        const offset = (currentPage - 1) * ITEMS_PER_PAGE;

        const data = await sql<BabyFood>`SELECT bf.id, bf.name, bf.category, bf.stage 
        FROM babyfoods bf
        WHERE bf.name ILIKE ${`%${query}%`} 
        AND bf.category ILIKE ${`%${category}%`} 
        AND bf.id NOT IN (
            SELECT fl.food_id
            FROM foodlog fl
            WHERE fl.user_id = ${user_id}
        ) LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}`;

        return data.rows;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch baby food data.');
    }
}

export async function fetchTotalFilteredBabyFoods(user_id: string, query: string, category: string) {
    noStore();
    try {

        const data = await sql`SELECT COUNT(*)  AS total
        FROM babyfoods bf
        WHERE bf.name ILIKE ${`%${query}%`} 
        AND bf.category ILIKE ${`%${category}%`} 
        AND bf.id NOT IN (
            SELECT fl.food_id
            FROM foodlog fl
            WHERE fl.user_id = ${user_id}
        )`;

        return Number(Math.ceil(data.rows[0].total/6));
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch baby food data.');
    }
}

export async function fetchFoodLog(user_id: string) {
    noStore();
    try {

        const data = await sql<BabyFood>`SELECT bf.id, bf.name, bf.category, bf.stage, fl.date, fl.opinion 
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