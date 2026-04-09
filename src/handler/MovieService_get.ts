import type { Context } from "openapi-backend";
import { movies } from "../store/movieStore.js";
import sql from "../config/database.js";

export async function MovieService_get(
  c: Context,
  _req: Request,
  res: any,
): Promise<void> {
  const { id } = c.request.params;

  const result = await sql`
    SELECT * FROM movies WHERE id = ${id}
  `;

  if (result.length === 0) {
    return res.status(404).json({ error: "Not found" });
  }

  res.json(result[0]);
}
