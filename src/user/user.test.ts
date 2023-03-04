import { prisma, getUsers } from "./user-queries";

interface User {
  id: number;
  email: string;
  name: string;
}

beforeAll(async () => {
  await prisma.user.createMany({
    data: [
      {
        email: "test@gmail.com",
        id: 1,
        name: "John Doe",
      },
    ],
  });
});

afterAll(async () => {
  const deleteUser = prisma.user.deleteMany();
  await prisma.$transaction([deleteUser]);
  await prisma.$disconnect();
});

it("should get a user", async () => {
  const mockUsers: User[] = [
    {
      id: 1,
      email: "test@gmail.com",
      name: "John Doe",
    },
  ];

  const users = await getUsers(mockUsers[0].name);
  expect(users).toEqual(mockUsers);
});
