import express from "express";

import getMyUserAPIMockData from "@mocks/getMyInfoAPIMockData";

import type { Request, Response } from "express";

const userRouter = express.Router();

function getMyInfoHandler(req: Request, res: Response) {
  res.json(getMyUserAPIMockData);
}

userRouter.get("/my", getMyInfoHandler);

export default userRouter;
