import { index, find, save, remove, bulkRemove } from './controllers/definition';
import { save as saveResult } from './controllers/result';

const express = require("express");
const router = express.Router();

router.get("/definitions", index);
router.get("/definitions/:id", find);
router.post("/definitions", save);
router.delete("/definitions/:id", remove);
router.delete("/definitions", bulkRemove);

router.post("/result/:id", saveResult);

module.exports = router;