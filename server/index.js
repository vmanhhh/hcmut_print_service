//Express setup
const express = require("express");
const app = express();
const fireStore = require("./config/db");
const { createPayment } = require("./controller/PaymentController");

const printerRoutes = require("./routes/printer");
const printingReqRoutes = require("./routes/printingrequest");

require("dotenv").config();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/printer", printerRoutes);
app.use("/api/printingReq", printingReqRoutes);
// Khởi động server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
