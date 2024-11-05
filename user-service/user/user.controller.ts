import { Request, Response } from "express";
import { UserService } from "./user.service";

export class UserController {
  constructor(private userService: UserService) {
    this.userService = userService;
  }

  create = async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;
      const user = await this.userService.create({ email, password });
      res.json(user);
    } catch (error: Error | any) {
      res
        .status(500)
        .json({ message: error.message || "Error while creating user" });
    }
  };

  login = async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;
      const userToken = await this.userService.login({ email, password });
      res.json({ userToken });
    } catch (error: Error | any) {
      res
        .status(500)
        .json({ message: error.message || "Error while connecting user" });
    }
  };
}
