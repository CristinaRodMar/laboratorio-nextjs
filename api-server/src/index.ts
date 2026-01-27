import { Hono } from "hono";
import { logger } from "hono/logger";
import { cors } from "hono/cors";
import { serve } from "@hono/node-server";
import { serveStatic } from "@hono/node-server/serve-static";
import { houses } from "./mock-data";

let db = {
  houses,
};

const app = new Hono();
app.use("/*", serveStatic({ root: "./public" }));

app.use(logger());
app.use("/api/*", cors());

app.get("/api/houses", (context) => {
  return context.json(db.houses);
});

app.get("/api/houses/:id", (context) => {
  return context.json(db.houses.find((c) => c.id === context.req.param("id")));
});

serve({ fetch: app.fetch, port: 3001 }, (info) => {
  console.log(`API running on ${info.port}`);
});
