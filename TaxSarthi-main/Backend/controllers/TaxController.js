const TaxCalculation = require('../Models/TaxCalculation.model')

exports.Tax = async (req, res) => {
  try {
    const taxbody = await TaxCalculation.create(req.body);
    res.json(taxbody);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.Taxbody = async (req, res) => {
  const { Token } = req.body;
  try {
    const taxbody = await TaxCalculation.findOne({ Token });

    if (taxbody) {
      res.status(200).json(taxbody);
    } else {
      res
        .status(404)
        .json({ message: "No data found for the provided AadharNo" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
