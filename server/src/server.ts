import express from "express";
import cors from "cors";
import session from "express-session";
import mysqlSession from "express-mysql-session";
import passport from "passport";
import gS from "passport-google-oauth2";

import Router from "./router";
import { SERVER_PORT } from "@constants/port";
import mysqlConnectionConfig from "@constants/mysqlConnectionConfig";

function callbackOnExpressServerRunning() {
  console.log(`Server listening on >> http://localhost:${SERVER_PORT}`);
}

// @ts-ignore
const MySQLStore = mysqlSession(session);
const GoogleStrategy = gS.Strategy;
const sessionStore = new MySQLStore(mysqlConnectionConfig);

const server = express();

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use("/api", Router);

server.listen(SERVER_PORT, callbackOnExpressServerRunning);
