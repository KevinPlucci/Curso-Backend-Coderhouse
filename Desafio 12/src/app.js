import express from "express";
import cookieParser from 'cookie-parser';
import session from 'express-session';
import { Server as HTTPServer } from 'http';
import path from 'path';
import { Server as websocketServer } from "socket.io";
import router from "./Routes/routes";
import sockets from "./sockets";
import yargs from 'yargs';
import * as dotenv from 'dotenv'
dotenv.config()
import MongoStore from 'connect-mongo';
import routerRandoms from "./Routes/RouterRandom";
const advancedOptions = { useNewUrlParser: true, useUnifiedTopology: true }

const args = yargs.default({
    PORT: 8080
}).alias({
    p: "PORT"
}).argv




const PORT = args.PORT;
const app = express();
app.use(session({

    store: MongoStore.create({
        mongoUrl: process.env.MongoAccessSession,
        mongoOptions: advancedOptions
    }),


    secret: 'RandomCode',
    resave: false,
    saveUninitialized: false,
    rolling: true,
    cookie: {
        maxAge: 60000
    }
}))

app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(cookieParser());
app.set('port', PORT);
app.use(router);
// app.use('/api',routerRandoms);
const http = new HTTPServer(app);
const io = new websocketServer(http);

sockets(io);

export {
    app,
    http
};