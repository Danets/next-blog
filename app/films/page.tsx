async function getData() {
  const res = await fetch("https://swapi.dev/api/films");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Films() {
  const data = await getData();

  return (
    <ul>
      {data.results.map((playlist: any) => (
        <li key={playlist.episode_id}>{playlist.title}</li>
      ))}
    </ul>
  );
}
