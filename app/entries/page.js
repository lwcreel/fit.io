import styles from "./styles.module.css";
import getAllEntries from "../api/entries";

export default async function Entries() {
  let data = await getAllEntries();

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
        <ul key={entry.id} className={styles.entry_header}>
          {entry.createdDate.slice(4, 15)}
          {entry.exercises.map((exercise) => (
            <li key={exercise.name + entry.id} className={styles.exercise}>
              {exercise.name + ": " + exercise.sets.toString()}
            </li>
          ))}
        </ul>
      ))}
    </ul>
  );
}
