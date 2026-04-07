import express, { type Request, type Response } from "express";
import { OpenAPIBackend } from "openapi-backend";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
import fs from "fs";
import cors from "cors";
import { MovieService_list } from "./handler/MovieService_list.ts";
import { MovieService_create } from "./handler/MovieService_create.ts";
import { MovieService_get } from "./handler/MovieService_get.ts";
import { MovieService_update } from "./handler/MovieService_update.ts";
import { MovieService_delete } from "./handler/MovieService_delete.ts";
import { MovieService_stats } from "./handler/MovieService_stats.ts";

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "https://red-mud-0404c7e0f.6.azurestaticapps.net",
];

app.use(cors({ origin: allowedOrigins }));

app.use(express.json());
console.log("✓ Express app created");

const specPath = "./movieopenapi.yaml";

const api = new OpenAPIBackend({
  definition: specPath,
  validate: true,
});

api.register({
  MovieService_list,
  MovieService_create,
  MovieService_get,
  MovieService_update,
  MovieService_delete,
  MovieService_stats,

  validationFail: (_c, _req, res: Response) =>
    res.status(400).json({ message: "Bad Request" }),

  notFound: (_c, _req, res: Response) =>
    res.status(404).json({ message: "Not Found" }),
});

api.init();
console.log("✓ OpenAPI Backend initialized");

app.get("/movieopenapi.yaml", (_req, res) => {
  res.setHeader("Content-Type", "text/yaml");
  res.send(fs.readFileSync(specPath, "utf-8"));
});

app.get("/openapi.json", (_req, res) => {
  res.json(api.document);
});

const spec = YAML.load("./movieopenapi.yaml");

app.use("/docs", swaggerUi.serve, swaggerUi.setup(spec));
console.log("✓ Swagger UI mounted on /docs");

app.use((req: Request, res: Response) => {
  api.handleRequest(req as any, req, res);
});
console.log("✓ API middleware mounted");

export default app;
