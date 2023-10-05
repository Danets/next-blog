export async function getFilms(): Promise<FilmsResponse> {
  const res = await fetch("https://swapi.dev/api/films");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
