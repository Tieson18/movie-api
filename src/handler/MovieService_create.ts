import type { Request, Response } from "express";
import { v4 as uuid } from "uuid";
import { movies } from "../store/movieStore.ts";
import type { Context } from "openapi-backend";
import sql from "../config/database.ts";

// export async function MovieService_create(
//   c: Context,
//   _req: Request,
//   res: Response,
// ): Promise<void> {
//   const { title, director, releaseYear, genre, rating } = c.request.requestBody;

//   const result = await sql`
//     INSERT INTO movies (id, title, director, release_year, genre, rating)
//     VALUES (gen_random_uuid(), ${title}, ${director}, ${releaseYear}, ${genre}, ${rating})
//     RETURNING *
//   `;

//   res.status(201).json(result);
// }

export function MovieService_create(
  c: any,
  _req: Request,
  res: Response,
): void {
  const body = c.request.requestBody;

  const movie = { id: uuid(), ...body };
  movies.push(movie);

  res.status(201).json(movie);
}
