import express from "express";
import { TimerController } from "./timer.controller";
import { TimerService } from "./timer.service";

export const timerRouter = express.Router();

const timerService = new TimerService();
const timerController = new TimerController(timerService);

timerRouter.get("/reaction-times/:user_id", timerController.getTimer);
timerRouter.post("/reaction-time", timerController.addTimer);
