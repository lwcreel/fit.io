export default function Log() {
  async function search(formData) {
    "use server";

    const query = formData.get("query");
    return `You searched for '${query}'`;
  }

  return (
    <form action={console.log(search)}>
      <input name="query" />
      <button type="submit">Search</button>
    </form>
  );
}
