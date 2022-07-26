import express from "express";
import passport from "passport";

import type { Request, Response } from "express";

const googleAuthRouter = express.Router();

function handleGoogleLogout(req: Request, res: Response) {
  return req.logout({}, (err) => "");
}

googleAuthRouter.get("/login", (req, res, next) => {
  const authenticator = passport.authenticate("google", {
    scope: ["email", "profile"],
    state: JSON.stringify(req.query),
  });

  authenticator(req, res, next);
});

googleAuthRouter.get(
  "/login/callback",
  passport.authenticate("google", {
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

googleAuthRouter.get("/fail", (req, res) => {
  return res.json({ message: "인증에 실패했습니다.", statue: res.statusCode });
});

googleAuthRouter.get("/logout", handleGoogleLogout);

export default googleAuthRouter;
