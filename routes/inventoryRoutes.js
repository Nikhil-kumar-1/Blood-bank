const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware"); // Fixed the typo here
const  createInventoryController  = require("../controller/inventoryController");
const router = express.Router();

// ADD INVENTORY || POST
router.post('/create-inventory', authMiddleware, createInventoryController);
module.exports = router;
