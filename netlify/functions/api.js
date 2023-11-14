// YOUR_BASE_DIRECTORY/netlify/functions/api.ts

import express, { Router } from "express";
import serverless from "serverless-http";

const api = express();

const router = Router();
router.get("/", (req, res) => res.render("index.hbs"));

api.use("/api/", router);

export const handler = serverless(api);