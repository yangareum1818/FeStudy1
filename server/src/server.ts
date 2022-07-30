import express from "express";
import cors from "cors";
import session from "express-session";
import cookieParser from "cookie-parser";
import passport from "passport";
import gS from "passport-google-oauth2";

import Router from "./router";
import { SERVER_PORT } from "@constants/port";
import authRouter from "@auth/index";
import dbClient from "db/db";

import type { UserDTO } from "db/dto/user";

function callbackOnExpressServerRunning() {
  console.log(`Server listening on >> http://localhost:${SERVER_PORT}`);
}

const GoogleStrategy = gS.Strategy;

const server = express();

server.use(
  cors({
    origin: true, // 여기서 origin은 URL의 protocol, domain, port를 의미한다.
    credentials: true,
  })
);

server.use(cookieParser());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// for login session
server.use(
  session({
    secret: process.env.SERVER_SESSION_SECRET_KEY as string,
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 60 * 60 * 1000, secure: false, httpOnly: false },
  })
);

// passport 초기화 및 session 연결
server.use(passport.initialize());
server.use(passport.session());
server.set("trust proxy", 1);

// Google login 전략
passport.use(
  "google",
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      callbackURL: `http://localhost:${SERVER_PORT}/auth/google/login/callback`,
      passReqToCallback: true,
    },
    // @ts-ignore
    async function (request, accessToken, refreshToken, profile, done) {
      const user = await dbClient.user.getUserByEmail(profile.email);
      if (user.length) {
        // should unique user
        return done(null, user[0]);
      }
      if (!user.length) {
        // OAuth 로그인 시 없던 계정인 경우
        const data = {
          name: profile.given_name,
          email: profile.email,
          address: null,
          company: null,
          organization: null,
          provider: "google",
        };
        const newUser = await dbClient.user.createUser(
          data as Omit<UserDTO, "ID" | "updated_at" | "created_at">
        );
        return done(null, newUser[0]);
      }
    }
  )
);

// login이 최초로 성공했을 때만 호출되는 함수
passport.serializeUser(function (user: any, done) {
  // @ts-ignore
  return done(null, user.email);
});

// 사용자가 페이지를 방문할 때마다 호출되는 함수
// done(null, id)로 사용자의 정보를 각 request의 user 변수에 넣어준다.
passport.deserializeUser(async function (email: string, done) {
  const userInstance = await dbClient.user.getUserByEmail(email);
  // @ts-ignore
  return done(null, userInstance[0]);
});

server.use("/api", Router);
server.use("/auth", authRouter);

server.listen(SERVER_PORT, callbackOnExpressServerRunning);
