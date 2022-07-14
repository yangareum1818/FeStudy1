import express from "express";
import courseMockData from "@mocks/courses";

import type { Request, Response } from "express";

const courseRouter = express.Router();

function getCoursesInfoHandler(req: Request, res: Response) {
  res.send(courseMockData);
}

courseRouter.get("/my", getCoursesInfoHandler);

export default courseRouter;
