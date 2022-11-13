import express from "express";
import asyncHandler from "express-async-handler";
import * as userHandlers from "./user-handlers";

const usersRouter = express.Router();

usersRouter.get("/users", asyncHandler(userHandlers.getUsersHandler));

export { usersRouter };
