import express from "express";

import userRouter from "@api/v1/user";
import courseRouter from "@api/v1/course";
import couponRouter from "@api/v1/coupon";
import {
  COURSE_LIST_API_ROUTE,
  USER_API_ROUTE,
  COUPON_LIST_API_ROUTE,
} from "@constants/routes";

const v1 = express.Router();

v1.use(USER_API_ROUTE, userRouter);
v1.use(COURSE_LIST_API_ROUTE, courseRouter);
v1.use(COUPON_LIST_API_ROUTE, couponRouter);

export default v1;
