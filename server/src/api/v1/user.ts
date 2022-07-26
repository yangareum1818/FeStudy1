import express from "express";

import type { Request, Response } from "express";
import dbClient from "db/db";

const userRouter = express.Router();

async function getMyInfoHandler(req: Request, res: Response) {
  if (!req.isAuthenticated()) {
    return res.json({
      status: 401,
      message: "인증되지 않았습니다.",
    });
  }
  return res.send(req.user);
}

async function patchMyInfoHandler(req: Request, res: Response) {
  // Edit userinfo
  if (!req.isAuthenticated()) {
    return res.json({
      status: 401,
      message: "인증되지 않았습니다.",
    });
  }

  if (!req.body.id) {
    return res.json({
      status: 500,
      message: "유저 아이디가 제공되지 않았습니다.",
    });
  }

  const result = await dbClient.user.updateUserById(req.body.id, req.body.data);
  if (!result) {
    return res.json({
      message: "유저 업데이트가 실패하였습니다.",
      status: 500,
    });
  }
  return res.json({
    message: "success to patch request",
    status: 200,
    result: result[0],
  });
}

userRouter.post("/my", getMyInfoHandler);
userRouter.patch("/my", patchMyInfoHandler);

export default userRouter;
