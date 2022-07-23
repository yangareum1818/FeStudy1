import express from "express";
import courseMockData from "@mocks/courses";

import type { Request, Response } from "express";

const courseRouter = express.Router();

function getCoursesInfoHandler(req: Request, res: Response) {
  if (!req.isAuthenticated()) {
    return res.json({
      status: 401,
      message: "인증되지 않았습니다.",
    });
  }
  return res.send(courseMockData);
}

courseRouter.get("/my", getCoursesInfoHandler);

export default courseRouter;
