import path from "path";
import { ENV, SERVER_PORT, SERVER_HOST, APP_NAME, URL } from "./settings";

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

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
    url: URL
};

app.use(async (req, res, next) => {
    try {
        next();
    } catch (error) {
        console.log(error);

        next(error.message);
    }
});

app.get('/*', (req, res) => {
    res.render("index");
});

app.listen(SERVER_PORT, SERVER_HOST,(error) => {
    let protocol = "http";
    console.log(`Unblock forms studio running on: ${protocol}://${SERVER_HOST}:${SERVER_PORT}`);
    console.log(`Environment: ${ENV}`);

    if (error) {
        console.log(error);
    }
});