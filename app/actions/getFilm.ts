export async function getFilm(id: number): Promise<Film> {
  const res = await fetch(`https://swapi.dev/api/films/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
