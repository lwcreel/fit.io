import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Hello, World!</h1>
      <ul>
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link href="/log">Add a new log</Link>
        </li>
        <li>
          <Link href="/entries">View Past Entries</Link>
        </li>
      </ul>
    </div>
  );
}
