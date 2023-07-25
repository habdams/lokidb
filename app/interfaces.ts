export interface Trending {
  results: {
    id: number;
    title: string;
    poster_path: string;
    overview: string;
  }[];
}

export interface Movie {
  title: string;
  homepage: string;
  original_language: string;
  release_date: string;
  backdrop_path: string;
  overview: string;
}
