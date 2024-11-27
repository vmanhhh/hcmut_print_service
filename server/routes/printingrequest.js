const express = require('express');
const router = express.Router();

const printingReqs = require('../controller/PrintingRequestController');
router.post('/create', printingReqs.createPrintingRequest);
router.get('/get_alls', printingReqs.getAllPrintingReqs);
router.post('/get_by_usrid', printingReqs.getPrintingRequestByUserId);
router.post('/get_by_id', printingReqs.getPrintingRequestById);
// router.post('/complete_printing',)


module.exports = router