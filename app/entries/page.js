import prisma from "../api/db";

export default async function Entries() {
  let data = await prisma.entry.findMany();
  console.log(data);

  let entries = data.map((entry) => {
    let temp = {
      id: entry.id,
      exercises: JSON.parse(entry.exercises),
      notes: entry.notes,
      createdDate: entry.createdAt.toString(),
      updatedDate: entry.updatedAt.toString(),
    };

    return temp;
  });

  console.log(entries);

  return (
    <ul>
      {entries.map((entry) => (
        <ul key={entry.id}>
          {entry.createdDate}
          {entry.exercises.map((exercise) => (
            <li key={exercise.name + entry.id}>
              {exercise.name + exercise.sets.toString()}
            </li>
          ))}
        </ul>
      ))}
    </ul>
  );
}
