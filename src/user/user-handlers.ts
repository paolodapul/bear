import { Request, Response } from "express";
import { z, ZodError } from "zod";

const UserSchema = z.object({
  name: z.string(),
});

type User = z.infer<typeof UserSchema>;

const validateParams = (query: unknown) => UserSchema.parse(query);

const userHandler = (req: Request, res: Response) => {
  try {
    const user: User = validateParams(req.query);
    res.status(200).send(user);
  } catch (error: unknown) {
    if (error instanceof ZodError) {
      res.status(400).send({
        error: "Bad request",
        message: "You may have passed incorrect values on your query string.",
      });
    }
  }
};

export { userHandler, validateParams };
