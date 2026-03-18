import type { Context } from "openapi-backend";
import { movies } from "../store/movieStore.ts";

export function MovieService_get(c: Context, _req: Request, res: any): void {
  const movie = movies.find((m) => m.id === c.request.params.id);

  if (!movie) return res.status(404).json({ error: "Not found" });

  res.json(movie);
}
