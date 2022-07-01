import express from "express";

import type { Request, Response } from "express";

const classRouter = express.Router();

function getClassesInfoHandler(req: Request, res: Response) {
  res.send("getClassesInfo");
}

classRouter.get("/classes", getClassesInfoHandler);

export default classRouter;
