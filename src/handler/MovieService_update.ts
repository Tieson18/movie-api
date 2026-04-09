import type { Context } from "openapi-backend";
import { movies } from "../store/movieStore.js";
import type { Request, Response } from "express";
import sql from "../config/database.js";

// export async function MovieService_update(
//   c: Context,
//   _req: Request,
//   res: Response,
// ): Promise<void> {
//   const { id } = c.request.params;
//   const { title, director, releaseYear, genre, rating } = _req.body;

//   const result = await sql`
//     UPDATE movies
//     SET title = ${title},
//         director = ${director},
//         release_year = ${releaseYear},
//         genre = ${genre},
//         rating = ${rating}
//     WHERE id = ${id}
//     RETURNING *
//   `;

//   if (result.length === 0) {
//     res.status(404).json({ error: "Not found" });
//     return;
//   }

//   res.json(result[0]);
// }

export function MovieService_update(
  c: any,
  _req: Request,
  res: Response,
): void {
  const movie = movies.find((m) => m.id === c.request.params.id);

  if (!movie) {
    res.status(404).json({ error: "Not found" });
    return;
  }

  Object.assign(movie, c.request.requestBody);
  res.json(movie);
}
