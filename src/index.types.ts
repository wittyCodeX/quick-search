export type Genre = "Comedy" | "Fantasy" | "Crime" | "Drama" | "Music" | "Adventure" | "History" | "Thriller" | "Animation" | "Family" | "Mystery" | "Biography" | "Action" | "Film-Noir" | "Romance" | "Sci-Fi" | "War" | "Western" | "Horror" | "Musical" | "Sport"

export interface Movie {
  id: number;
  title: string;
  year: string;
  runtime: string;
  director: string;
  actors?: string;
  plot?: string;
  posterUrl?: string;
  genres: string[];
}
