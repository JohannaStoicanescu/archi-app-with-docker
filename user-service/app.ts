import express, { Express } from "express";

import connectDB from "./config/db";
import { userRouter } from "./user/user.routes";

const app: Express = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

connectDB();

app.use("/api", userRouter);

export default app;
