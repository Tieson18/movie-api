import { v4 as uuid } from "uuid";
import { movies } from "../store/movieStore.js";

export const movieController = {
  MovieService_list: (c: any, res: any) => {
    res.json(movies);
  },

  MovieService_create: (c: any, res: any) => {
    const movie = { id: uuid(), ...c.request.requestBody };
    movies.push(movie);
    res.status(201).json(movie);
  },

  MovieService_get: (c: any, res: any) => {
    const movie = movies.find((m) => m.id === c.request.params.id);
    if (!movie) return res.status(404).json({ error: "Not found" });
    res.json(movie);
  },

  MovieService_update: (c: any, res: any) => {
    const movie = movies.find((m) => m.id === c.request.params.id);
    if (!movie) return res.status(404).json({ error: "Not found" });
    Object.assign(movie, c.request.requestBody);
    res.json(movie);
  },

  MovieService_delete: (c: any, res: any) => {
    const index = movies.findIndex((m) => m.id === c.request.params.id);
    if (index === -1) return res.status(404).json({ error: "Not found" });
    movies.splice(index, 1);
    res.json({ message: "Deleted" });
  },

  MovieService_stats: (c: any, res: any) => {
    const avg = movies.reduce((a, b) => a + b.rating, 0) / movies.length;
    res.json({
      totalMovies: movies.length,
      averageRating: avg,
    });
  },
};
