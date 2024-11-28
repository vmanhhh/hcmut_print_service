const express = require('express');
const router = express.Router();
const { googleLogin } = require('../controller/auth.controller');

router.post('/google', googleLogin);

module.exports = router;
