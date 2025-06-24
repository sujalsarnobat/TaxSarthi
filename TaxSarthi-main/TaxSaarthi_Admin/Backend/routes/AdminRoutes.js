const express = require("express");
const router = express.Router();
const AdminController = require("../controllers/AdminController");

// Signup route
router.post("/signup", AdminController.signup);

// Login route
router.post("/login", AdminController.login);

module.exports = router;
