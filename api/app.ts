import express, { Express } from "express";

import connectDB from "./config/db";
import { timerRouter } from "./features/timer/timer.routes";
import { userRouter } from "./features/user/user.routes";

const app: Express = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

connectDB();

app.use("/api", userRouter, timerRouter);

export default app;
