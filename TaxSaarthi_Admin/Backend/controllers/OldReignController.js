const OldReign = require('../Models/OldReign');

exports.Old = async(req,res) => {
    try {
        const oldreign = await OldReign.create(req.body);
        res.json(oldreign);
    } catch (error) {
        res.status(400).json(error);
    }
}

exports.Oldbody = async(req,res)=>{
    const {Token} = req.body
    try {
        const oldreign = await OldReign.findOne({ Token });

        if (oldreign) {
          res.status(200).json(oldreign);
        } else {
          res
            .status(404)
            .json({ message: "No data found for the provided AadharNo" });
        }
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
}


//Old Tax Reign Calculation
// const TAX_REBATE = {
//   old: 250000
// };

// function calculateOldRegimeTax(income) {
//   let totalTax = 0;

//   if (income >= TAX_REBATE.old) {
//     totalTax += calculateSlabTax(Math.min(income, 250000), 0);
//     totalTax += calculateSlabTax(Math.max(Math.min(income - 250000, 250000), 0), 0.05);
//     totalTax += calculateSlabTax(Math.max(Math.min(income - 500000, 500000), 0), 0.20);
//     totalTax += calculateSlabTax(Math.max(income - 1000000, 0), 0.30);
//   }

//   const finalTax = totalTax + calculateCess(totalTax);
  
//   return finalTax;
// }

// // Example usage for old regime
// const oldIncome = 2042000; // Replace with your actual income
// const oldRegimeTax = calculateOldRegimeTax(oldIncome);

// console.log(`Income: ₹${oldIncome}`);
// console.log(`Old Regime Tax: ₹${oldRegimeTax.toFixed(2)}`);

// function calculateSlabTax(income, rate) {
//   return income * rate;
// }

// function calculateCess(totalTax) {
//   return totalTax * 0.04;
// }



// New Tax Reign
// const TAX_REBATE = {
//   new: 700000,
// };

// function calculateNewRegimeTax(income) {
//   let totalTax = 0;

//   if (income >= TAX_REBATE.new) {
//     totalTax += calculateSlabTax(Math.min(income, 300000), 0);
//     totalTax += calculateSlabTax(
//       Math.max(Math.min(income - 300000, 300000), 0),
//       0.05
//     );
//     totalTax += calculateSlabTax(
//       Math.max(Math.min(income - 600000, 300000), 0),
//       0.1
//     );
//     totalTax += calculateSlabTax(
//       Math.max(Math.min(income - 900000, 300000), 0),
//       0.15
//     );
//     totalTax += calculateSlabTax(
//       Math.max(Math.min(income - 1200000, 300000), 0),
//       0.2
//     );
//     totalTax += calculateSlabTax(Math.max(income - 1500000, 0), 0.3);
//   }

//   const finalTax = totalTax + calculateCess(totalTax);

//   return finalTax;
// }

// function calculateSlabTax(income, rate) {
//   return income * rate;
// }

// function calculateCess(totalTax) {
//   return totalTax * 0.04;
// }

// // Example usage
// const income = 2042000; // Replace with your actual income
// const newRegimeTax = calculateNewRegimeTax(income);

// console.log(`Income: ₹${income}`);
// console.log(`New Regime Tax: ₹${newRegimeTax.toFixed(2)}`);
