import express from "express";
import couponsMockData from "@mocks/coupons";

import type { Request, Response } from "express";

const couponsRouter = express.Router();

function getCouponsInfoHandler(req: Request, res: Response) {
  res.send(couponsMockData);
}

couponsRouter.get("/my", getCouponsInfoHandler);

export default couponsRouter;
