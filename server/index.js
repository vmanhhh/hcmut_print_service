//Express setup
const express = require("express");
const app = express();
const cors = require('cors');


const printerRoutes = require('./routes/printer')
const printingReqRoutes = require('./routes/printingrequest')
const paperRoutes = require('./routes/paper')
const userRoutes = require('./routes/user')
const authRoutes = require('./routes')

require("dotenv").config();
const port = process.env.PORT;

app.use(express.json());
app.use('/api/printer', printerRoutes);
app.use('/api/printingReq', printingReqRoutes);
app.use('/api/paper', paperRoutes);
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

app.use(cors())

// Khởi động server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})
console.log('hello')