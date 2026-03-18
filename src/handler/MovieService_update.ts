import type { Context } from "openapi-backend";
import { movies } from "../store/movieStore.ts";
import type { Request, Response } from "express";

export function MovieService_update(
  c: Context,
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
