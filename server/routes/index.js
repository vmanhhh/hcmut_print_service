const express = require('express');
const authenticate = require('./authentication');
const router = express.Router();

router.get('/api/protected', authenticate, (req, res) => {
  res.json({ message: 'This is a protected route', user: req.user });
});

module.exports = router;