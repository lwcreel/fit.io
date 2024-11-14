import prisma from "./db";

export default async function getAllEntries() {
  const result = await prisma.entry.findMany();

  return result;
}
