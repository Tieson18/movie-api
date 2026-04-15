import type { Context } from "openapi-backend";
// import { movies } from "../store/movieStore.js";
import type { Request, Response } from "express";
import sql from "../config/database.js";

export async function MovieService_delete(
  c: Context,
  _req: Request,
  res: Response,
): Promise<void> {
  const { id } = c.request.params;

  await sql`DELETE FROM movies WHERE id = ${id}`;

  res.json({ message: "Deleted" });
}
