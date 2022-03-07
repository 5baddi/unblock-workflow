import { index, find, hash, save, remove, bulkRemove, bulkExport } from './controllers/definition';
import { save as saveResult } from './controllers/result';
import { send, save as builderWebhook } from './controllers/webhooks';

const express = require("express");
const router = express.Router();

router.get("/definition/:id", find);
router.put("/definition/:id/hash", hash);
router.get("/definitions/:tenantId?/:userId?", index);
router.post("/definitions", save);
router.post("/definitions/export", bulkExport);
router.delete("/definitions", bulkRemove);
router.delete("/definition/:id", remove);

router.post("/result/:id", saveResult);
router.post("/webhooks/runner/:id", send);
router.get("/webhooks/builder/:id", builderWebhook);

module.exports = router;