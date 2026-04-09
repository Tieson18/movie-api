import type { Context } from "openapi-backend";
import { movies } from "../store/movieStore.ts";
import type { Request, Response } from "express";
import sql from "../config/database.ts";

// export async function MovieService_delete(
//   c: Context,
//   _req: Request,
//   res: Response,
// ): Promise<void> {
//   const { id } = c.request.params;

//   await sql`DELETE FROM movies WHERE id = ${id}`;

//   res.json({ message: "Deleted" });
// }

export function MovieService_delete(
  c: any,
  _req: Request,
  res: Response,
): void {
  const index = movies.findIndex((m) => m.id === c.request.params.id);

  if (index === -1) {
    res.status(404).json({ error: "Not found" });
    return;
  }

  movies.splice(index, 1);
  res.json({ message: "Deleted" });
}
