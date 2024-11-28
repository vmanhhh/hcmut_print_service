const express = require('express');
const router = express.Router();

const printingReqs = require('../controller/PrintingRequestController');
const authenticate = require('../middlewares/authentication');
router.post('/create', authenticate, printingReqs.createPrintingRequest);
router.get('/get_alls', authenticate, printingReqs.getAllPrintingReqs);
router.post('/get_by_usrid', authenticate, printingReqs.getPrintingRequestByUserId);
router.post('/get_by_id', authenticate, printingReqs.getPrintingRequestById);
router.post('/confirm_printing', authenticate, printingReqs.completePrinting);
// router.post('/complete_printing',)


module.exports = router