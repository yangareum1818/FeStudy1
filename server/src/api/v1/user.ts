import express from "express";

import dbClient from "db/db";

import type { Request, Response } from "express";
import type { UserDTO } from "db/dto/user";

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

async function createUser(req: Request, res: Response) {
  const result = await dbClient.user.createUser({
    ...req.body,
  });
  if (!req.isAuthenticated()) {
    return res.json({
      status: 401,
      message: "인증되지 않았습니다.",
    });
  }
  return res.json({
    message: "Success to create User",
    status: 200,
    result: result[0],
  });
}

async function patchMyInfoHandler(req: Request, res: Response) {
  const user = req.user as UserDTO;
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

  if (user.provider === "google") {
    return res.json({
      status: 500,
      message: "구글 계정으로 로그인한 경우 이메일 정보를 수정할 수 없습니다.",
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

userRouter.post("/", createUser);
userRouter.post("/my", getMyInfoHandler);
userRouter.patch("/my", patchMyInfoHandler);

export default userRouter;
