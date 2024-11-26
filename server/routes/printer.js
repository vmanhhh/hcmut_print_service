const express = require('express');
const router = express.Router();

const printerController = require('../controller/PrinterController');
router.get('/getalls', printerController.getAllPrinters);
router.post('/create', printerController.createPrinter);
router.post('/getbyid', printerController.getPrinterById);
router.post('/getbybuilding', printerController.getPrintersByBuilding);
module.exports = router