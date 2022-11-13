import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";
import log from "loglevel";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      email: faker.internet.email(),
      name: faker.name.fullName(),
    },
  });
}

async function disconnect(): Promise<void> {
  return prisma.$disconnect();
}

main()
  .then(() => disconnect())
  .catch((e) => {
    log.error(e);
    process.exit(1);
  });
