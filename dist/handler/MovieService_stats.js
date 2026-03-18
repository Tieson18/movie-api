import { movies } from "../store/movieStore.ts";
export function MovieService_stats(_c, _req, res) {
    const avg = movies.reduce((a, b) => a + b.rating, 0) / movies.length;
    res.json({
        totalMovies: movies.length,
        averageRating: avg,
    });
}
//# sourceMappingURL=MovieService_stats.js.map