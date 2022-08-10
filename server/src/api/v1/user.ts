import express from "express";
import bcrpyt from "bcrypt";

import dbClient from "db/db";

import type { Request, Response } from "express";
import type { UserDTO } from "db/dto/user";

const userRouter = express.Router();

async function getMyInfoHandler(req: Request, res: Response) {
  // #swagger.tags = ['User']
  // #swagger.description = "내 정보를 조회합니다(로그인 상태여야 함)."
  // #swagger.responses[200] = { description: 'User successfully created.', schema: { $ref: '#/definitions/user' }}

  if (!req.isAuthenticated()) {
    return res.status(401).json({
      status: 401,
      message: "인증되지 않았습니다.",
    });
  }
  return res.send(req.user);
}

async function createUser(req: Request, res: Response) {
  /**
   * #swagger.tags = ['User']
   * #swagger.description = "유저를 생성할 때 사용할 API Endpoint입니다."
   *  #swagger.parameters['obj'] = { in: 'body', description: 'Patch User Data', schema: { $ref: '#/definitions/patchuser' }}
   *  #swagger.responses[200] = { description: 'User successfully created.', schema: { $ref: '#/definitions/user' }}
   **/
  if (!req.body.email) {
    return res
      .status(500)
      .json({ message: "email이 Payload에 포함되지 않았습니다." });
  }
  if (!req.body.name) {
    return res
      .status(500)
      .send({ message: "name이 Payload에 포함되지 않았습니다." });
  }

  const isEmailDuplicated = await dbClient.user.getUserByEmail(req.body.email);

  if (isEmailDuplicated.length) {
    return res.status(500).json({
      message: "이미 같은 email을 가진 유저가 있습니다",
    });
  }

  const result = await dbClient.user.createUser({
    ...req.body,
    password: bcrpyt.hashSync(req.body.password, 10),
    provider: "email",
  });

  return res.status(200).json({
    message: "Success to create User",
    result: result[0],
  });
}

async function patchMyInfoHandler(req: Request, res: Response) {
  /**
   *  #swagger.tags = ['User']
   *  #swagger.description = "유저를 수정할 때 사용할 API Endpoint입니다."
   *  #swagger.parameters['obj'] = { in: 'body', description: 'Patch User Data', schema: { $ref: '#/definitions/patchuser' }}
   *  #swagger.responses[200] = { description: 'User successfully edited.', schema: { $ref: '#/definitions/user' }}
   */

  const user = req.user as UserDTO;
  // Edit userinfo
  if (!req.isAuthenticated()) {
    return res.status(401).json({
      message: "인증되지 않았습니다.",
    });
  }

  if (!req.body.id) {
    return res.status(500).json({
      message: "유저 아이디가 제공되지 않았습니다.",
    });
  }

  if (user.provider === "google") {
    return res.status(500).json({
      message: "구글 계정으로 로그인한 경우 이메일 정보를 수정할 수 없습니다.",
    });
  }

  const result = await dbClient.user.updateUserById(req.body.id, req.body.data);
  if (!result) {
    return res.status(500).json({
      message: "유저 업데이트가 실패하였습니다.",
    });
  }
  return res.status(200).json({
    message: "success to patch request",
    result: result[0],
  });
}

userRouter.post("/", createUser);
userRouter.post("/my", getMyInfoHandler);
userRouter.patch("/my", patchMyInfoHandler);

export default userRouter;
