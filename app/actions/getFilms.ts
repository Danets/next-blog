export async function getFilms(): Promise<FilmsResponse> {
  return fetch("https://swapi.tech/api/films").then((res) => res.json());
  //   if (!res.ok) {
  //     throw new Error("Failed to fetch data");
  //   }

  //   return res.json();
}
