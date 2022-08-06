import express from "express";

import userRouter from "@api/v1/user";
import courseRouter from "@api/v1/course";
import couponRouter from "@api/v1/coupon";

const v1 = express.Router();

v1.use(`/user`, userRouter);
v1.use(`/courses`, courseRouter);
v1.use(`/coupons`, couponRouter);

export default v1;
