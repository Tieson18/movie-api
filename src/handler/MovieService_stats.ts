import type { Context } from "openapi-backend";
import { movies } from "../store/movieStore.js";
import sql from "../config/database.js";

// export async function MovieService_stats(
//   _c: Context,
//   _req: Request,
//   res: any,
// ): Promise<void> {
//   const result = await sql`
//     SELECT COUNT(*)::int AS total, AVG(rating)::float AS avg
//     FROM movies
//   `;

//   res.json({
//     totalMovies: result[0]!.total,
//     averageRating: result[0]!.avg,
//   });
// }

export function MovieService_stats(_c: any, _req: Request, res: any): void {
  const avg = movies.reduce((a, b) => a + b.rating, 0) / movies.length;

  res.json({
    totalMovies: movies.length,
    averageRating: avg,
  });
}
