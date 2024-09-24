import { sql } from '@vercel/postgres';
import { BabyFood, User, Log } from './definitions';
import { unstable_noStore as noStore } from 'next/cache';

// Fetch a single food log entry for editing or deleting purposes
export async function fetchFoodLogById(id: string) {
    noStore();

    try {
        const data = await sql<Log>`SELECT fl.id, bf.name, bf.category, bf.stage, fl.date, fl.opinion 
        FROM foodlog fl
        JOIN babyfoods bf ON fl.food_id = bf.id 
        WHERE fl.id = ${id}`;
        return data.rows[0];

    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch food log data.');
    }
}

// Searching, filtering, and paginating
export async function fetchFilteredBabyFoods(user_id: string, query: string, category: string, stage: number | null, currentPage: number) {
    noStore();
    try {

        console.log("category is: " + category + " stage is " + stage + " query is " + query);

        const ITEMS_PER_PAGE = 6;
        const offset = (currentPage - 1) * ITEMS_PER_PAGE;

        if(stage) {
            const data = await sql<BabyFood>`SELECT bf.id, bf.name, bf.category, bf.stage 
            FROM babyfoods bf
            WHERE bf.name ILIKE ${`%${query}%`} 
            AND bf.category ILIKE ${`%${category}%`} 
            AND bf.stage = ${stage} 
            AND bf.id NOT IN (
                SELECT fl.food_id
                FROM foodlog fl
                WHERE fl.user_id = ${user_id}
            ) LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}`;
            return data.rows;
        } else {
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
        }
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch baby food data.');
    }
}

// Page number for pagination
export async function fetchTotalFilteredBabyFoods(user_id: string, query: string, stage: number | null, category: string) {
    noStore();
    try {

        if(stage) {
            const data = await sql`SELECT COUNT(*)  AS total
            FROM babyfoods bf
            WHERE bf.name ILIKE ${`%${query}%`} 
            AND bf.category ILIKE ${`%${category}%`} 
            AND bf.stage = ${stage} 
            AND bf.id NOT IN (
                SELECT fl.food_id
                FROM foodlog fl
                WHERE fl.user_id = ${user_id}
            )`;

            return Number(data.rows[0].total/6);
        } else {
            const data = await sql`SELECT COUNT(*)  AS total
            FROM babyfoods bf
            WHERE bf.name ILIKE ${`%${query}%`} 
            AND bf.category ILIKE ${`%${category}%`} 
            AND bf.id NOT IN (
                SELECT fl.food_id
                FROM foodlog fl
                WHERE fl.user_id = ${user_id}
            )`;

            return Number(data.rows[0].total/6);
        }
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch baby food data.');
    }
}

// Number of baby foods in database
export async function fetchTotalBabyFoods() {
    noStore();
    try {

        const data = await sql`SELECT COUNT(*) AS total FROM babyfoods`;

        return Number(data.rows[0].total);
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch baby food data.');
    }
}

// All food logs
export async function fetchFoodLog(user_id: string) {
    noStore();
    try {

        const data = await sql<Log>`SELECT fl.id, bf.name, bf.category, bf.stage, fl.date, fl.opinion 
        FROM foodlog fl
        JOIN babyfoods bf ON fl.food_id = bf.id 
        WHERE fl.user_id = ${user_id}`;

        return data.rows;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch food log data.');
    }
}

// Number of food log entries, for calculating progress
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