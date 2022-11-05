import { format, transports } from "winston";
import expressWinston from "express-winston";

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

const logger = expressWinston.logger({
  transports: [new transports.Console()],
  format: logFormat,
  expressFormat: true,
});

export { logger };
