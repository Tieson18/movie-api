import { v4 as uuid } from "uuid";
import { movies } from "../store/movieStore.ts";

export const movieHandler = {
  MovieService_list: (context: any) => {
    context.res.json(movies);
  },

  MovieService_create: (context: any) => {
    const movie = { id: uuid(), ...context.req.body };
    movies.push(movie);
    context.res.status(201).json(movie);
  },

  MovieService_get: (context: any) => {
    const movie = movies.find((m) => m.id === context.req.params.id);
    if (!movie) {
      context.res.status(404).json({ error: "Not found" });
      return;
    }
    context.res.json(movie);
  },

  MovieService_update: (context: any) => {
    const movie = movies.find((m) => m.id === context.req.params.id);
    if (!movie) {
      context.res.status(404).json({ error: "Not found" });
      return;
    }

    Object.assign(movie, context.req.body);
    context.res.json(movie);
  },

  MovieService_delete: (context: any) => {
    const index = movies.findIndex((m) => m.id === context.req.params.id);
    if (index === -1) {
      context.res.status(404).json({ error: "Not found" });
      return;
    }

    movies.splice(index, 1);
    context.res.json({ message: "Deleted" });
  },

  MovieService_stats: (context: any) => {
    if (movies.length === 0) {
      context.res.json({
        totalMovies: 0,
        averageRating: 0,
      });
      return;
    }

    const avg = movies.reduce((a, b) => a + b.rating, 0) / movies.length;
    context.res.json({
      totalMovies: movies.length,
      averageRating: avg,
    });
  },
};
