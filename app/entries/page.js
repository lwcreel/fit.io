import prisma from "../../api/db";

export default async function Entries() {
  // TODO: Switch this to fetch data
  let data = await prisma.recipe.findMany();

  return (
    <ul>
      {data.map((post) => (
        <li key={post.id}>{post.name}</li>
      ))}
    </ul>
  );
}
