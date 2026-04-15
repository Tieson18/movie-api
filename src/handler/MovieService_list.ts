import type { Request, Response } from "express";
// import { movies } from "../store/movieStore.js";
import type { Context } from "openapi-backend";
import sql from "../config/database.js";

export async function MovieService_list(
  c: Context,
  _req: Request,
  res: Response,
): Promise<void> {
  const movies = await sql`SELECT * FROM movies`;
  res.json({ value: movies });
}
