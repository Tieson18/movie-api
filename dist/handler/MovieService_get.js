import { movies } from "../store/movieStore.js";
export function MovieService_get(c, _req, res) {
  const movie = movies.find((m) => m.id === c.request.params.id);
  if (!movie) return res.status(404).json({ error: "Not found" });
  res.json(movie);
}
//# sourceMappingURL=MovieService_get.js.map
