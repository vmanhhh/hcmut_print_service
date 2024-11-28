const { generateToken } = require('../middlewares/jwtService');
const { get_customer_by_id, get_customer_by_email_or_usrname } = require('../models/User')
const bcrypt = require('bcrypt');

async function getStudent(req, res, next) {
    try {
        const result = await get_customer_by_id(req.body.id)
        return result == null ? res.status(404).json('Not found user with given id') : res.json(result)
    } catch (err) {
        next(err);
    }
}
async function logIn(req, res, next) {
    try {
        const user = await get_customer_by_email_or_usrname(req.body.username)
        if (!user) return res.status(400).json({ message: 'Invalid credentials' });
        const isMatch = await bcrypt.compare(req.body.password, user.password);
        console.log("Match:", isMatch)
        if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });
        const token = generateToken({ id: user.id });
        res.status(200).json({ token: token })
    } catch (err) {
        next(err);
    }
}
module.exports = {
    getStudent,
    logIn
}