import gracefulShutdown from "http-graceful-shutdown";
import { server } from "./src/app";

let shutdown: () => Promise<void>;

beforeAll(() => {
  shutdown = gracefulShutdown(server);
});

afterAll(async () => {
  await shutdown();
});
