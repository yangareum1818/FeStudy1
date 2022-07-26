import express from "express";
import couponsMockData from "@mocks/coupons";

import type { Request, Response } from "express";

const couponsRouter = express.Router();

function getCouponsInfoHandler(req: Request, res: Response) {
  if (!req.isAuthenticated()) {
    return res.json({
      status: 401,
      message: "인증되지 않았습니다.",
    });
  }
  return res.send(couponsMockData);
}

couponsRouter.get("/my", getCouponsInfoHandler);

export default couponsRouter;
