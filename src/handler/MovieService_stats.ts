import type { Context } from "openapi-backend";
import { movies } from "../store/movieStore.ts";

export function MovieService_stats(_c: Context, _req: Request, res: any): void {
  const avg = movies.reduce((a, b) => a + b.rating, 0) / movies.length;

  res.json({
    totalMovies: movies.length,
    averageRating: avg,
  });
}
