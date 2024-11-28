// Express setup
const express = require("express");
const app = express();
const cors = require('cors');

const printerRoutes = require('./printer');
const printingReqRoutes = require('./printingrequest');
const paperRoutes = require('./paper');
const userRoutes = require('./user');
const authRoutes = require('./auth'); // Ensure this is the correct path

require("dotenv").config();
const port = process.env.PORT || 5001;

app.use(express.json());
app.use(cors());

app.use('/api/printer', printerRoutes);
app.use('/api/printingReq', printingReqRoutes);
app.use('/api/paper', paperRoutes);
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes); // Ensure this is included

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});