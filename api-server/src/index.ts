import { Hono } from "hono";
import { logger } from "hono/logger";
import { cors } from "hono/cors";
import { serve } from "@hono/node-server";
import { serveStatic } from "@hono/node-server/serve-static";
import { houses } from "./mock-data";

const app = new Hono();

app.use(logger());
app.use("/api/*", cors());

app.use("/images/*", serveStatic({ root: "./public" }));

app.get("/api/houses", (c) => c.json(houses));

serve({ fetch: app.fetch, port: 3001 }, (info) => {
  console.log(`✅ Backend en http://localhost:${info.port}`);
});