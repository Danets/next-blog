export async function getFilm(id: number): Promise<FilmResponse> {
    return fetch(`https://swapi.tech/api/films/${id}`).then(res => res.json())
//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }

//   return res.json();
}
