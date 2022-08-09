import express from "express";
import passport from "passport";

import type { Request, Response } from "express";

const localAuthRouter = express.Router();

function handleGoogleLogout(req: Request, res: Response) {
  /**
   * #swagger.tags = ['Auth']
   */
  return req.logout({}, (err) => "");
}

localAuthRouter.post("/login", (req, res, next) => {
  /**
   * #swagger.tags = ['Auth']
   * #swagger.description = "이메일을 통해 로그인을 할 때 이동하는 Endpoint입니다."
   *  #swagger.parameters['obj'] = { in: 'body', description: 'Login', schema: { $ref: '#/definitions/emaillogin' }}
   */
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      console.error(err);
      next(err);
    }
    if (info) {
      return res.status(401).send(info.reason);
    }
    return req.login(user, (loginErr) => {
      if (loginErr) {
        return next(loginErr);
      }
      const filteredUser = { ...user.dataValues };
      delete filteredUser.password;
      return res.json(filteredUser);
    });
  })(req, res, next);
});

localAuthRouter.get("/login/fail", (req, res) => {
  /**
   * #swagger.tags = ['Auth']
   */
  return res.json({ message: "인증에 실패했습니다.", statue: res.statusCode });
});

localAuthRouter.get("/logout", handleGoogleLogout);

export default localAuthRouter;
