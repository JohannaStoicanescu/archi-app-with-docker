import express, { Express } from "express";

import connectDB from "./config/db";
import { timerRouter } from "./timer/timer.routes";

const app: Express = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

connectDB();

app.use("/api", timerRouter);

export default app;
