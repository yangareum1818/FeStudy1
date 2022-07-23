import express from "express";

import type { Request, Response } from "express";

const userRouter = express.Router();

async function getMyInfoHandler(req: Request, res: Response) {
  // @ts-ignore
  if (!req.isAuthenticated()) {
    return res.json({
      status: 401,
      message: "인증되지 않았습니다.",
    });
  }
  return res.json({
    data: req.user,
    status: 200,
  });
}

userRouter.post("/my", getMyInfoHandler);

export default userRouter;
