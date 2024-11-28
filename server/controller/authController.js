const { OAuth2Client } = require('google-auth-library');
const jwt = require('jsonwebtoken');
const { get_customer_by_email_or_usrname, create_customer } = require('../models/User');
const client = new OAuth2Client('YOUR_GOOGLE_CLIENT_ID');

const verifyGoogleToken = async (token) => {
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: 'YOUR_GOOGLE_CLIENT_ID',
  });
  const payload = ticket.getPayload();
  return payload;
};

const googleLogin = async (req, res) => {
  const { token } = req.body;

  try {
    console.log('Received token:', token);
    const payload = await verifyGoogleToken(token);
    console.log('Google token payload:', payload);

    let user = await get_customer_by_email_or_usrname(payload.email);
    console.log('User from database:', user);

    if (!user) {
      // Create a new user if not found
      user = await create_customer({
        email: payload.email,
        name: payload.name,
        googleId: payload.sub,
      });
      console.log('New user created:', user);
    }

    const jwtToken = jwt.sign({ id: user.id }, 'YOUR_SECRET_KEY', { expiresIn: '1h' });
    console.log('Generated JWT token:', jwtToken);

    res.json({ user, token: jwtToken });
  } catch (error) {
    console.error('Error during Google login:', error);
    res.status(401).json({ message: 'Invalid Google token' });
  }
};

module.exports = { googleLogin };