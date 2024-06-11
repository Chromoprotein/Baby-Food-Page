const { db } = require('@vercel/postgres');
const {
  babyFoods,
} = require('../app/lib/more-placeholder-data.js');

async function seedBabyFoods(client) {
  try {

    // Insert data into the "babyFoods" table
    const insertedBabyFoods = await Promise.all(
      babyFoods.map(
        (babyFood) => client.sql`
        INSERT INTO babyFoods (name, category, stage)
        VALUES (${babyFood.name}, ${babyFood.category}, ${babyFood.stage})
        ON CONFLICT (id) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedBabyFoods.length} baby foods`);

    return {
      babyFoods: insertedBabyFoods,
    };
  } catch (error) {
    console.error('Error seeding baby foods:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedBabyFoods(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});