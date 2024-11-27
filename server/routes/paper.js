const express = require('express');
const { getAllPapers, createPaper, getPrices, getAllPaperSize, getAllTypeOfPaper } = require('../controller/PaperController');
const router = express.Router();

router.get('/get_alls', getAllPapers)
router.post('/add_paper', createPaper)
router.post('/get_prices', getPrices)
router.get('/get_sizes', getAllPaperSize)
router.get('/get_types', getAllTypeOfPaper)
module.exports = router