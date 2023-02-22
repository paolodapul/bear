import gracefulShutdown from "http-graceful-shutdown";
import { server } from "./src/app";
import { prisma } from "./src/user/user-queries";

let shutdown: () => Promise<void>;

beforeAll(() => {
  shutdown = gracefulShutdown(server);
});

afterAll(async () => {
  await prisma.$disconnect();
  await shutdown();
});
