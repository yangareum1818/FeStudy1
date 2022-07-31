import { GOOGLE_AUTH_ROUTE } from "constants/routes";
import express from "express";

import googleAuthRouter from "./google";

const authRouter = express.Router();

authRouter.use(GOOGLE_AUTH_ROUTE, googleAuthRouter);

export default authRouter;
