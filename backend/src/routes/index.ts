import { Application } from "express";
import pingRoute from "./ping";
import cardRoute from "./card";
export const initialiseRoute = (app: Application) => {
  app.use("/ping", pingRoute);
  app.use("/cards", cardRoute);
};
