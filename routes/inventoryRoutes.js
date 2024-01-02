const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware"); // Fixed the typo here
const  {createInventoryController, getInventoryController}  = require("../controller/inventoryController");
const router = express.Router();

// ADD INVENTORY || POST
router.post('/create-inventory', authMiddleware, createInventoryController);

//GET ALL BLOOD RECORDS
router.get("/get-inventory", authMiddleware, createInventoryController, getInventoryController);
module.exports = router;
