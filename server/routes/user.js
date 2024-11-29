const express = require('express');
const { getStudent, logIn } = require('../controller/UserController');
const authenticate = require('../middlewares/authentication');
const s3 = require('../config/s3');
const router = express.Router();

require('dotenv').config()
router.post('/get_studentinfo', authenticate, getStudent)
router.post('/login', logIn)
module.exports = router