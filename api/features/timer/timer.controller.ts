import { Request, Response } from "express";
import { TimerService } from "./timer.service";

export class TimerController {
  constructor(private timerService: TimerService) {
    this.timerService = timerService;
  }

  getTimer = async (req: Request<{ user_id: string }>, res: Response) => {
    try {
      const { user_id } = req.params;
      const timer = await this.timerService.getTimer(user_id);
      res.json(timer);
    } catch (error) {
      res
        .status(500)
        .json({ message: "An error occurred while getting the timer." });
    }
  };

  addTimer = async (req: Request, res: Response) => {
    console.log("ADD TIMER", req);
    try {
      if (!req.body || !req.body.user_id || !req.body.time) {
        res
          .status(400)
          .json({ message: "Missing required fields: user_id or time" });
      }
      const { user_id, time } = req.body;
      const timer = await this.timerService.addTimer({ user_id, time });
      res.json(timer);
    } catch (error) {
      res
        .status(500)
        .json({ message: "An error occurred while adding the timer." });
    }
  };
}
