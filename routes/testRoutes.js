const express = require("express");
const { testController } = require("../controller/testController");

//router object create
const router = express.Router();
//create routes
router.get("/test", testController);
module.exports = router;
