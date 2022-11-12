import express from "express";
import * as userHandlers from "./user-handlers";

const usersRouter = express.Router();

usersRouter.get("/users", userHandlers.getUsersHandler);

export { usersRouter };
