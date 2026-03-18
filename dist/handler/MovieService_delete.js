import { movies } from "../store/movieStore.ts";
export function MovieService_delete(c, _req, res) {
    const index = movies.findIndex((m) => m.id === c.request.params.id);
    if (index === -1) {
        res.status(404).json({ error: "Not found" });
        return;
    }
    movies.splice(index, 1);
    res.json({ message: "Deleted" });
}
//# sourceMappingURL=MovieService_delete.js.map