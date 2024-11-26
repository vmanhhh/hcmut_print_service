const express = require("express");
const router = express.Router();
const supportFunction = require("../middlewares/supportFunction");
const userController = require("../controllers/UserController");

router.post("/login/customer", userController.loginCustomer);
router.post("/login/spso", userController.loginSPSO);
router.get("/", supportFunction, userController.getUserByID);

module.exports = router;
