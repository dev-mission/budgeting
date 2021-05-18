const express = require("express");

const router = express.Router();

router.use("/auth", require("./auth"));
router.use("/passwords", require("./passwords"));
router.use("/uploads", require("./uploads"));
router.use("/users", require("./users"));
router.use("/budget", require("./budget"));
router.use("/expenses", require("./expenses"));
module.exports = router;
