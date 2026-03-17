import type { Request, Response } from "express";
import { movies } from "../store/movieStore.ts";

export function MovieService_list(c: any, _req: Request, res: Response): void {
  res.json(movies);
}
