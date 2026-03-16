import express from "express";
import { OpenAPIBackend } from "openapi-backend";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
import { movieController } from "./controller/movieController.js";

const api = new OpenAPIBackend({
  definition: "./openapi.yaml",
  handlers: movieController,
});

api.init();

const app = express();
app.use(express.json());

const spec = YAML.load("./openapi.yaml");

app.use("/docs", swaggerUi.serve, swaggerUi.setup(spec));
app.get("/openapi.yaml", (req, res) =>
  res.sendFile(__dirname + "/openapi.yaml"),
);
app.get("/openapi.json", (req, res) => res.json(spec));

app.use((req, res) => api.handleRequest(req, req, res));

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
