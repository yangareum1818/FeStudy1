import express from "express";

import userRouter from "@api/v1/user";
import classRouter from "@api/v1/class";
import { CLASS_LIST_API_ROUTE, USER_API_ROUTE } from "@constants/routes";

const v1 = express.Router();

v1.use(USER_API_ROUTE, userRouter);
v1.use(CLASS_LIST_API_ROUTE, classRouter);

export default v1;
