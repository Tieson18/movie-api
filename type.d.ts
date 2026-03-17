export type Genre = "Action" | "Drama" | "Comedy" | "Sci-Fi";

export interface Movie {
  id: string;
  title: string;
  director: string;
  releaseYear: number;
  genre: Genre;
  rating: number;
}
export interface MovieCreate {
  title: string;
  director: string;
  releaseYear: number;
  genre: Genre;
  rating: number;
}

export interface MovieUpdate {
  title?: string;
  director?: string;
  releaseYear?: number;
  genre?: Genre;
  rating?: number;
}
