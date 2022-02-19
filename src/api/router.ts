import { index, find, save, remove, bulkRemove, bulkExport } from './controllers/definition';
import { save as saveResult } from './controllers/result';

const express = require("express");
const router = express.Router();

router.get("/definition/:id", find);
router.get("/definitions/:tenantId?/:userId?", index);
router.post("/definitions", save);
router.post("/definitions/export", bulkExport);
router.delete("/definitions", bulkRemove);
router.delete("/definition/:id", remove);

router.post("/result/:id", saveResult);

module.exports = router;