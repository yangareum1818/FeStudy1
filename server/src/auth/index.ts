import express from "express";

import googleAuthRouter from "./google";
import localAuthRouter from "./local";

const authRouter = express.Router();

authRouter.use("/local", localAuthRouter);
authRouter.use("/google", googleAuthRouter);

export default authRouter;
