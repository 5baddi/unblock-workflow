import * as fs from "fs";
import { PUBLIC_KEY_PATH } from "../settings";

const jwt = require("jsonwebtoken");

function authenticateToken(req, res, next) {
    const authHeader = req.headers["authorization"]
    const token = authHeader && authHeader.split(' ')[1]

    if (token == null) return res.sendStatus(401)

    const publicKey = fs.readFileSync(PUBLIC_KEY_PATH);

    jwt.verify(token, publicKey, (err: any, user: any) => {
        if (err) {
            console.log(err);

            return res.sendStatus(403);
        }

        req.user = user

        next()
    })
}
export {
    authenticateToken
}