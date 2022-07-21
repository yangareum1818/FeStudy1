import express from "express";

import dbClient from "db/db";

import type { Request, Response } from "express";

const userRouter = express.Router();

async function getMyInfoHandler(req: Request, res: Response) {
  const userEmail = req.body.email;
  const result = await dbClient.user.getUserByEmail(userEmail);
  return res.json(result);
}

async function loginHandler(req: Request, res: Response) {
  const userEmail = req.body.email;
  const password = req.body.password;
  return res.json();
}

userRouter.post("/my", getMyInfoHandler);
userRouter.post("/login", loginHandler);

export default userRouter;
