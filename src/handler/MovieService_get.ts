import type { Context } from "openapi-backend";
import { movies } from "../store/movieStore.ts";
import sql from "../config/database.ts";

// export async function MovieService_get(
//   c: Context,
//   _req: Request,
//   res: any,
// ): Promise<void> {
//   const { id } = c.request.params;

//   const result = await sql`
//     SELECT * FROM movies WHERE id = ${id}
//   `;

//   if (result.length === 0) {
//     return res.status(404).json({ error: "Not found" });
//   }

//   res.json(result[0]);
// }

export function MovieService_get(c: any, _req: Request, res: any): void {
  const movie = movies.find((m) => m.id === c.request.params.id);

  if (!movie) return res.status(404).json({ error: "Not found" });

  res.json(movie);
}
