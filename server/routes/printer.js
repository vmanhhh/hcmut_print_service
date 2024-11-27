const express = require('express');
const router = express.Router();

const printerController = require('../controller/PrinterController');
const authenticate = require('../middlewares/authentication');

router.get('/getalls', authenticate, printerController.getAllPrinters);
router.post('/create', authenticate, printerController.createPrinter);
router.post('/getbyid', authenticate, printerController.getPrinterById);
router.post('/getbybuilding', authenticate, printerController.getPrintersByBuilding);
module.exports = router