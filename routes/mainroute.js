const path = require("path");
const express = require("express");
const router = express.Router();
const mainController = require("../controller/main_controller");
router.get("/", mainController.getUrls);
router.post("/shortUrls", mainController.urlLength);
// router.post("/shortUrls", )

module.exports = router;
