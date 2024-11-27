const express = require('express');
const { getStudent, logIn } = require('../controller/UserController');
const authenticate = require('../middlewares/authentication');
const router = express.Router();

router.post('/get_studentinfo', authenticate, getStudent)
router.post('/login', logIn)


module.exports = router