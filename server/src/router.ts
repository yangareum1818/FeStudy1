import express from "express";

import v1 from "@api/v1/index";

const router = express.Router();

router.use("/v1", v1);

export default router;
