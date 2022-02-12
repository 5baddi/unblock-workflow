import path from "path";
import { ENV, SERVER_PORT, SERVER_HOST, APP_NAME, PUBLIC_URL } from "./settings";
import migrate from './migrations';

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const apiRouter = require("./api/router");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "./../public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./../public"));

app.locals = {
    env: ENV,
    host: SERVER_HOST,
    appName: APP_NAME,
    url: PUBLIC_URL
};

app.use(async (req, res, next) => {
    try {
        res.header("Access-Control-Allow-Origin", "*");
        res.header(
            "Access-Control-Allow-Headers",
            "Origin, X-Requested-With, Content-Type, Accept, Authorization"
        );
        if (req.method === "OPTIONS") {
            res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
            return res.status(200).json({});
        }

        next();
    } catch (error) {
        console.log(error);

        next(error.message);
    }
});

app.get('/404', (req, res) => {
    res.render("404");
});

app.use(express.json());
app.use("/api", apiRouter);

app.get('/*', (req, res) => {
    res.render("index");
});

app.listen(SERVER_PORT, (error) => {
    let protocol = ENV === "development" ? "http" : "https";
    console.log(`Unblock forms studio running on: ${protocol}://${SERVER_HOST}:${SERVER_PORT}`);
    console.log(`Environment: ${ENV}`);

    if (error) {
        console.log(error);
    }

    migrate();
});