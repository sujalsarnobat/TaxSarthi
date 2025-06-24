const express = require("express");
const router = express.Router();
const PersonalInfoController = require('../controllers/PersonalInfoController');


// save in database route
router.post("/personalInfosave", PersonalInfoController.PersonalInfoSave);

// access from database route
router.post("/personalInfoaccess", PersonalInfoController.PersonalInfoAccess);

module.exports = router;
