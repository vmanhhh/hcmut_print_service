const express = require('express');
const { getAllPapers, createPaper, getPrices, getAllPaperSize, getAllTypeOfPaper } = require('../controller/PaperController');
const router = express.Router();
const authenticate = require('../middlewares/authentication');

router.get('/get_alls', authenticate, getAllPapers)
router.post('/add_paper', authenticate, createPaper)
router.post('/get_prices', authenticate, getPrices)
router.get('/get_sizes', authenticate, getAllPaperSize)
router.get('/get_types', authenticate, getAllTypeOfPaper)
module.exports = router