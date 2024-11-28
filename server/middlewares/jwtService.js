const fs = require('fs');
const jwt = require('jsonwebtoken');
require("dotenv").config();
// Load RSA keys

const generateToken = (payload) => {
    return jwt.sign(payload, process.env.PRIVATE_KEY, { algorithm: 'RS256', expiresIn: '1h' });
};

const verifyToken = (token) => {
    try {
        return jwt.verify(token, process.env.PUBLIC_KEY, { algorithms: ['RS256'] });
    } catch (err) {
        return null;
    }
};

module.exports = { generateToken, verifyToken };
