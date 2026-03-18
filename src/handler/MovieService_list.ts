import type { Request, Response } from "express";
import { movies } from "../store/movieStore.ts";
import type { Context } from "openapi-backend";

export function MovieService_list(
  c: Context,
  _req: Request,
  res: Response,
): void {
  res.json(movies);
}
