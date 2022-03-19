import path from "path";
import { ENV, SERVER_PORT, SERVER_HOST, APP_NAME, PUBLIC_URL, MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DB } from './settings';

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const apiRouter = require("./api/router");
const mysql = require("mysql");
const connection = require("express-myconnection");

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "./../public")));

app.use(
    connection(
        mysql, 
        {
            host: MYSQL_HOST,
            user: MYSQL_USER,
            password: MYSQL_PASSWORD,
            database: MYSQL_DB,
            port: 3306
        },
        "request"
    )
);

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
        res.header("Access-Control-Allow-Origin", ENV === "development" ? "*" : SERVER_HOST);
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
});