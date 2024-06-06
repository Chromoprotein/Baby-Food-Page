const { db } = require('@vercel/postgres');
const {
  users,
  babyFoods,
  foodLog,
} = require('../app/lib/placeholder-data.js');
const bcrypt = require('bcrypt');

async function seedUsers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS users (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        dob DATE NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
      );
    `;

    console.log(`Created "users" table`);

    // Insert data into the "users" table
    const insertedUsers = await Promise.all(
      users.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return client.sql`
        INSERT INTO users (id, name, dob, email, password)
        VALUES (${user.id}, ${user.name}, ${user.dob}, ${user.email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedUsers.length} users`);

    return {
      createTable,
      users: insertedUsers,
    };
  } catch (error) {
    console.error('Error seeding users:', error);
    throw error;
  }
}

async function seedBabyFoods(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "babyFoods" table if it doesn't exist
    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS babyFoods (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    category VARCHAR(255) NOT NULL,
    age int NOT NULL
  );
`;

    console.log(`Created "babyFoods" table`);

    // Insert data into the "babyFoods" table
    const insertedBabyFoods = await Promise.all(
      babyFoods.map(
        (babyFood) => client.sql`
        INSERT INTO babyFoods (id, name, category, age)
        VALUES (${babyFood.id}, ${babyFood.name}, ${babyFood.category}, ${babyFood.age})
        ON CONFLICT (id) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedBabyFoods.length} baby foods`);

    return {
      createTable,
      babyFoods: insertedBabyFoods,
    };
  } catch (error) {
    console.error('Error seeding baby foods:', error);
    throw error;
  }
}

async function seedFoodLog(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "foodLog" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS foodLog (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        user_id UUID NOT NULL,
        food_id UUID NOT NULL,
        date DATE NOT NULL
      );
    `;

    console.log(`Created "foodLog" table`);

    // Insert data into the "foodLog" table
    const insertedfoodLog = await Promise.all(
      foodLog.map(
        (foodLogEntry) => client.sql`
        INSERT INTO foodLog (user_id, food_id, date)
        VALUES (${foodLogEntry.user_id}, ${foodLogEntry.food_id}, ${foodLogEntry.date})
        ON CONFLICT (id) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedfoodLog.length} foodLogs`);

    return {
      createTable,
      foodLog: insertedfoodLog,
    };
  } catch (error) {
    console.error('Error seeding food log:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedUsers(client);
  await seedBabyFoods(client);
  await seedFoodLog(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});