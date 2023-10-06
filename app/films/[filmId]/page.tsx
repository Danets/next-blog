import { getFilm } from "@/app/actions/getFilm";
import { getFilms } from "@/app/actions/getFilms";

interface Params {
  params: {
    filmId: number;
  };
}

export default async function Film({ params: { filmId } }: Params) {
  const film = await getFilm(filmId);

  return (
    <div>
      <h1>{film.result.properties.title}</h1>
    </div>
  );
}

// export async function generateStaticParams() {
//   const films = await getFilms();

//   return films.result.map((film) => ({
//     filmId: film.uid,
//   }));
// }