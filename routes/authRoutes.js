const express = require("express");
const { registerController, loginController, currentUserController } = require("../controller/authController");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();
//REGISTER
router.post('/register', registerController)
//LOGIN||POST
router.post('/login',loginController);

//CURRENT USER
router.get("/current-user",authMiddleware, currentUserController)


module.exports = router;