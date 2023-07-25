import Link from "next/link";
import Image from "next/image";
import { Trending } from "./interfaces";

async function getData() {
  const url = await fetch("https://api.themoviedb.org/3/trending/movie/day", {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: process.env.THEMOVIEDB_API as string,
    },
    next: {
      revalidate: 10,
    },
  });

  return url.json();
}

export default async function Home() {
  const data: Trending = await getData();

  console.log(data);
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen px-4 md:px-8">
        <div className="mb-10 md:mb-16">
          <h2 className="text-2xl mb-4 text-center font-bold text-grey-800 md:mb-6 lg:text-3xl">
            Top Trending movies
          </h2>

          <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg-grid-cols-3 xl:grid-cols-4 xl:gap-8">
            {data.results.map((movie) => (
              <div
                className="flex flex-col overview-hidden rounded-lg border bg-white"
                key={movie.id}
              >
                <Link
                  className="group relative block h-48 overflow-hidden bg-gray-100 md:h-64"
                  href={`/movie/${movie.id}`}
                >
                  <Image
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                    alt="image movie banner"
                    width={500}
                    height={500}
                  />
                </Link>

                <div className="flex flex-1 flex-col p-4 sm:p-6">
                  <h2 className="mb-2 text-lg font-semibold text-gray-800">
                    <Link
                      href={`/movie/${movie.id}`}
                      className="transition duration-100 hover:text-purple-500 active:bg-purple-600"
                    >
                      {movie.title}
                    </Link>
                  </h2>
                  <p className="text-gray-500 line-clamp-3">{movie.overview}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
