import express from "express";
import passport from "passport";

import type { Request, Response } from "express";

const googleAuthRouter = express.Router();

function handleGoogleLogout(req: Request, res: Response) {
  /**
   * #swagger.tags = ['Auth']
   */
  return req.logout({}, (err) => "");
}

googleAuthRouter.get("/login", (req, res, next) => {
  /**
   * #swagger.tags = ['Auth']
   * #swagger.description = "Google OAuth를 통해 로그인을 할 때 이동하는 Endpoint입니다."
   * #swagger.parameters['querystring'] = { description: '로그인 후 돌아올 URL', schema: { redirect_url: 'http://localhost:3000' } }
   */
  const authenticator = passport.authenticate("google", {
    scope: ["email", "profile"],
    state: JSON.stringify(req.query),
  });

  authenticator(req, res, next);
});

googleAuthRouter.get(
  /**
   * #swagger.tags = ['Auth']
   */
  "/login/callback",
  passport.authenticate("google", {
    successRedirect: "http://localhost:3000",
    failureRedirect: "/auth/google/login/fail",
  }),
  function (req, res, next) {
    const stateObj = req.query.state as any;
    const { redirect_url } = stateObj && JSON.parse(stateObj);
    if (req.user) {
      return req.logIn(req.user, function (err) {
        if (err) {
          return next(err);
        }
        return res.redirect(redirect_url);
      });
    }
    return res.json({
      message: "로그인에 실패하였습니다.",
      status: res.statusCode,
    });
  }
);

googleAuthRouter.get("/login/fail", (req, res) => {
  /**
   * #swagger.tags = ['Auth']
   */
  return res.json({ message: "인증에 실패했습니다.", statue: res.statusCode });
});

googleAuthRouter.get("/logout", handleGoogleLogout);

export default googleAuthRouter;
