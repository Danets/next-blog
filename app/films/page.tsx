import Link from "next/link";
import { getFilms } from "../actions/getFilms";

export default async function Films() {
  const films = await getFilms();

  return (
    <div className="container mx-auto mt-4">
      <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
        Films list:
      </h2>
      <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
        {films.results.map((film: any) => (
          <li key={film.episode_id}>
            <Link href={`/films/${film.episode_id}`}>{film.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
