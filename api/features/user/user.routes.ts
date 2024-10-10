import express from "express";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";

export const userRouter = express.Router();

const userService = new UserService();
const userController = new UserController(userService);

userRouter.get("/users", userController.getAll);

userRouter.post("/register", userController.create);
userRouter.post("/login", userController.connection);
