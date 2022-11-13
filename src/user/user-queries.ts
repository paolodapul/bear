import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getUsers(name: string) {
  const users = await prisma.user.findMany({
    where: {
      name: {
        startsWith: name,
      },
    },
  });
  return users;
}

export { getUsers };
