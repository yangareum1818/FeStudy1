import express from "express";

import Router from "./router";
import { SERVER_PORT } from "@constants/port";

function callbackOnExpressServerRunning() {
  console.log(`Server listening on >> http://localhost:${SERVER_PORT}`);
}

const server = express();

server.use("/api", Router);

server.listen(SERVER_PORT, callbackOnExpressServerRunning);
