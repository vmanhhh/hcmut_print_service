const express = require('express');
const router = express.Router();

const printingReqs = require('../controller/PrintingRequestController');
router.get('/get_alls', printingReqs.getAllPrintingReqs);
router.post('/get_by_usrid', printingReqs.getPrintingRequestByUserId);
router.post('/get_by_id', printingReqs.getPrintingRequestById);

module.exports = router