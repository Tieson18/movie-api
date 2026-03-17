import type { Request, Response } from "express";
import { v4 as uuid } from "uuid";
import { movies } from "../store/movieStore.ts";

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
