import { migration, index, updateName, find, findForRunner, hash, save, remove, bulkRemove, bulkExport } from './controllers/definition';
import { save as saveResult } from './controllers/result';
import { send, save as builderWebhook } from './controllers/webhooks';
import express from 'express';
import { authenticateToken } from '../middleware/authenticateToken';

const router = express.Router();

router.use(authenticateToken);

// TODO: Be careful with this route
// router.get("/migration", migration);

router.get("/definition/:id/:tenantId?", find);
router.put("/definition/:id/hash/:tenantId?", hash);
router.get("/definitions/:tenantId?/:userId?", index);
router.put("/definitions/:id/:tenantId?", updateName);
router.post("/definitions/:tenantId?", save);
router.post("/definitions/export/:tenantId?", bulkExport);
router.delete("/definitions/:tenantId?", bulkRemove);
router.delete("/definition/:id/:tenantId?", remove);

router.post("/result/:id/:tenantId?", saveResult);
router.post("/webhooks/runner/:id/:tenantId?", send);
router.get("/webhooks/builder/:id/:tenantId?", builderWebhook);

router.get("/runner/:id/:tenantId?", findForRunner);

module.exports = router;