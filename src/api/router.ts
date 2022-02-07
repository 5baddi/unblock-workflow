import { Container } from "../container";
import Symbols from "../symbols";
import { DefinitionController } from "./controllers/definition";

const express = require("express");
const router = express.Router();

let definitionController = Container.resolve(DefinitionController);
router.post("/definition", definitionController.save);

module.exports = router;