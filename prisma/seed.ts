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

main()
  .then(async () => prisma.$disconnect())
  .catch(async (e) => {
    log.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
