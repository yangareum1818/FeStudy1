import express from "express";
import courseMockData from "@mocks/courses";

import type { Request, Response } from "express";

const classRouter = express.Router();

function getClassesInfoHandler(req: Request, res: Response) {
  res.send(courseMockData);
}

classRouter.get("/", getClassesInfoHandler);

export default classRouter;
