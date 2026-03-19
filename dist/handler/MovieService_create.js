import { v4 as uuid } from "uuid";
import { movies } from "../store/movieStore.js";
export function MovieService_create(c, _req, res) {
  const body = c.request.requestBody;
  const movie = { id: uuid(), ...body };
  movies.push(movie);
  res.status(201).json(movie);
}
//# sourceMappingURL=MovieService_create.js.map
