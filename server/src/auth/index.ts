import express from "express";

import googleAuthRouter from "./google";

const authRouter = express.Router();

authRouter.use("/google", googleAuthRouter);

export default authRouter;
