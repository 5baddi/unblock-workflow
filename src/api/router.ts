import { Container } from "../container";
import Symbols from "../symbols";
import { IDefinitionController } from "../interfaces/controllers";

const express = require("express");
const router = express.Router();

// let definitionController: IDefinitionController = Container.get<IDefinitionController>(Symbols.DefinitionController);
// router.post("/definition", definitionController.save);

module.exports = router;