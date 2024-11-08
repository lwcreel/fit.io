import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const entries = [
  {
    exercises: JSON.stringify([
      { name: "Squat", sets: ["5x185", "5x225", "5x275"] },
      { name: "Bench", sets: ["5x185", "5x225", "5x275"] },
    ]),
    notes: "Testing entry one.",
  },

  {
    exercises: JSON.stringify([
      { name: "Deadlift", sets: ["5x185", "5x225", "5x275"] },
      { name: "Press", sets: ["5x185", "5x225", "5x275"] },
    ]),
    notes: "Testing entry two.",
  },
];

async function seedData() {
  console.log("Seeding...");

  for (const entry of entries) {
    const result = await prisma.entry.create({
      data: entry,
    });
    console.log(`Created entry with id: ${result.id}`);
  }
  console.log("Finished seeding.");
}

seedData()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
