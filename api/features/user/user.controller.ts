import { Request, Response } from "express";
import { UserService } from "./user.service";

export class UserController {
  constructor(private userService: UserService) {
    this.userService = userService;
  }

  getAll = async (req: Request, res: Response) => {
    try {
      const users = await this.userService.getAll();
      res.json(users);
    } catch (error) {
      res.status(500).json({ message: "Error fetching users" });
    }
  };

  create = async (req: Request, res: Response) => {
    try {
      const user = await this.userService.create(req.body);
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: "Error creating user" });
    }
  };

  connection = async (req: Request, res: Response) => {
    try {
      const user = await this.userService.connection(req.body);
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: "Error connecting user" });
    }
  };
}
