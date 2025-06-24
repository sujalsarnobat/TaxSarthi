const express = require("express");
const router = express.Router();
const TaxController = require("../controllers/TaxController");

//@description http://localhost:8000/api/v1/tax/calculations

router.post("/calculations", TaxController.Tax);

router.get("/calculations", (req, res) => {
  res.send("It is working");
});

router.post("/calculationbody", TaxController.Taxbody);

module.exports = router;