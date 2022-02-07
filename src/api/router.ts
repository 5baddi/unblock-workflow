import { DefinitionController } from "./controllers/definition";

const express = require("express");
const router = express.Router();

router.post("/definition", DefinitionController.save);

module.exports = router;