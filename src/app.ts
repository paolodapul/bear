import dotenv from "dotenv";
import express from "express";
import { format, transports } from "winston";
import expressWinston from "express-winston";
import log from "loglevel";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const logFormat = format.combine(
  format.label({ label: "worker" }),
  format.timestamp({
    format: "HH-MM:ss YYYY-MM-DD",
  }),
  format.prettyPrint(),
  format.colorize(),
  format.align(),
  format.printf((info) => {
    const timeStamp = info.timestamp as string;
    const label = info.label as string;
    const message = info.message as string;
    const level = info.level;

    return `[${timeStamp}] [${label}]@[${level}]: ${message.trim()}\n`;
  })
);

app.use(
  expressWinston.logger({
    transports: [new transports.Console()],
    format: logFormat,
    expressFormat: true,
  })
);

app.get("/", (req, res) => {
  res.send(
    `Bear.js - opinionated Node.js starter | Made with ❤️ by Paolo Dapul`
  );
});

app.listen(port, () => {
  log.warn(`Express is listening at http://localhost:${process.env.PORT}\n`);
});
