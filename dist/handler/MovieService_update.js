import { movies } from "../store/movieStore.ts";
export function MovieService_update(c, _req, res) {
    const movie = movies.find((m) => m.id === c.request.params.id);
    if (!movie) {
        res.status(404).json({ error: "Not found" });
        return;
    }
    Object.assign(movie, c.request.requestBody);
    res.json(movie);
}
//# sourceMappingURL=MovieService_update.js.map