//Express setup
const express = require("express");
const app = express();
const cors = require('cors')
app.use(cors());

const printerRoutes = require('./routes/printer')
const printingReqRoutes = require('./routes/printingrequest')
const paperRoutes = require('./routes/paper')
const userRoutes = require('./routes/user')
const s3Routes = require('./routes/s3url')
require("dotenv").config();
const port = process.env.PORT;

app.use(express.json());
app.use('/api/printer', printerRoutes);
app.use('/api/printingReq', printingReqRoutes);
app.use('/api/paper', paperRoutes);
app.use('/api/user', userRoutes);
app.use('/api/s3', s3Routes)


// Khởi động server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})
