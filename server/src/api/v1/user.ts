import express from "express";

import dbClient from "db/db";
import getMyUserAPIMockData from "@mocks/getMyInfoAPIMockData";

import type { Request, Response } from "express";

const userRouter = express.Router();

async function getMyInfoHandler(req: Request, res: Response) {
  const result = await dbClient.user.getAllUser();
  return res.json(result);
}

userRouter.get("/my", getMyInfoHandler);

export default userRouter;
