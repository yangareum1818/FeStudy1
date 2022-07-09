import express from "express";
import cors from 'cors';

import Router from "./router";
import { SERVER_PORT } from "@constants/port";

function callbackOnExpressServerRunning() {
  console.log(`Server listening on >> http://localhost:${SERVER_PORT}`);
}

const server = express();

server.use(cors())
server.use("/api", Router);

server.listen(SERVER_PORT, callbackOnExpressServerRunning);
