import express, { Express } from "express";
import connectDB from "./config/db";

const app: Express = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

connectDB();

export default app;
