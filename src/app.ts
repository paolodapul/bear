import dotenv from "dotenv";
import express from "express";
import log from "loglevel";
import { logger } from "./middleware/logger";
import { usersRouter } from "./user";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(logger);

app.get("/", (req, res) => {
  res.send(
    `Bear.js - opinionated Node.js starter | Made with ❤️ by Paolo Dapul`
  );
});

app.use(usersRouter);

app.listen(port, () => {
  log.warn(`Express is listening at http://localhost:${process.env.PORT}\n`);
});

export { app };
