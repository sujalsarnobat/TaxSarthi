const mongoose = require('mongoose')

const taxcalculationSchema = new mongoose.Schema(
  {
  Token: { type: String, required: true },
  AadharNo: { type: Number, default: 0 },
  // Personal Information
  FirstName: { type: String, default: "" },
  MiddleName: { type: String, default: "" },
  LastName: { type: String, default: "" },
  Name: { type: String, default: "" },
  DateOfBirth: { type: String, default: "" },
  FatherName: { type: String, default: "" },
  Gender: { type: String, default: "" },
  MaritalStatus: { type: String, default: "" },
  
  PanCard: { type: String, default: "" },
  MobileNo: { type: Number, default: 0 },
  Email: { type: String, default: "" },
        Address: { type: String, default: "" },
        PermanentAddress: { type: String, default: "" },
        City: { type: String, default: "" },
        selectedState: { type: String, default: "" },
        PinCode: { type: String, default: "" },
        
        employerName: { type: String, default: "" },
        employerAddress: { type: String, default: "" },
        employerPanNumber: { type: String, default: "" },
        tanNumber: { type: String, default: "" },
        employeeReferenceNo: { type: String, default: "" },
        Year: { type: String, default: "" },
        TaxDeducted: { type: Number, default: 0 },
        
        Salary: { type: Number, default: 0 },
        PrerequisiteIncome: { type: Number, default: 0 },
        ProfitIncome: { type: Number, default: 0 },
        OtherIncome: { type: Number, default: 0 },
        HRA: { type: Number, default: 0 },
        LTA: { type: Number, default: 0 },
        OtherExemptedAllowances: { type: Number, default: 0 },
        ProfessionalTax: { type: Number, default: 0 },
        
        OwnHouseIncome: { type: Number, default: 0 },
        
        section80C: { type: Number, default: 0 },
        section80CCC: { type: Number, default: 0 },
        section80CCD1: { type: Number, default: 0 },
        section80CCD2: { type: Number, default: 0 },
        section80CCD1B: { type: Number, default: 0 },
        section80CCF: { type: Number, default: 0 },
        section80CCG: { type: Number, default: 0 },
        section80D: { type: Number, default: 0 },
        section80DD: { type: Number, default: 0 },
        section80DDB: { type: Number, default: 0 },
        section80E: { type: Number, default: 0 },
        section80EE: { type: Number, default: 0 },
        section80G: { type: Number, default: 0 },
        section80GGA: { type: Number, default: 0 },
        section80GGC: { type: Number, default: 0 },
        section80QQB: { type: Number, default: 0 },
        section80RRB: { type: Number, default: 0 },
        section80TTA: { type: Number, default: 0 },
        section80U: { type: Number, default: 0 },
        
        RentedHouseIncome: { type: Number, default: 0 },
        DeemdedHouseIncome: { type: Number, default: 0 },
        OldFinalTax: { type: Number, default: 0 },
        OldFinalCess: { type: Number, default: 0 },
        NewFinalTax: { type: Number, default: 0 },
        NewFinalCess: { type: Number, default: 0 },
        PreferredSystem: {
          type: String,
          default: "NewRegime",
          enum: ["OldRegime", "NewRegime"],
        },
        TotalTaxableIncome: { type: Number, default: 0 },
        TotalIncome: { type: Number, default: 0 },
        TotalDeductions: { type: Number, default: 0 },

  },
  { timestamps: true }
  );
  
  const calculateOldRegimeTax = async function (income) {
    const TAX_REBATE = {
    old: 500000,
  };
  
  const calculateSlabTax = (income, rate) => income * rate;
  
  const calculateCess = (totalTax) => totalTax * 0.04;

  let totalTax = 0;

  if (income >= TAX_REBATE.old) {
    totalTax += calculateSlabTax(Math.min(income, 250000), 0);

    totalTax += calculateSlabTax(
      Math.min(Math.max(income - 250000, 0), 500000 - 250000),
      0.05
    );

    totalTax += calculateSlabTax(
      Math.min(Math.max(income - 500000, 0), 1000000 - 500000),
      0.2
    );

    totalTax += calculateSlabTax(Math.max(income - 1000000, 0), 0.3);
  }

  const ceSS = calculateCess(totalTax);
  const Tax = totalTax + ceSS;

  return { Tax, ceSS };
};

const calculateNewRegimeTax = async function (income) {
  const TAX_REBATE_NEW = {
    new: 700000,
  };

  const calculateSlabTax = (income, rate) => income * rate;

  let totalTax = 0;

  if (income >= TAX_REBATE_NEW.new) {
    totalTax += calculateSlabTax(Math.min(income, 250000), 0);

    totalTax += calculateSlabTax(
        Math.min(Math.max(income - 250000, 0), 500000 - 250000),
        0.05
    );

    totalTax += calculateSlabTax(
        Math.min(Math.max(income - 500000, 0), 750000-500000),
        0.1
    );

    totalTax += calculateSlabTax(
        Math.min(Math.max(income - 750000, 0), 1000000 - 750000),
        0.15
    );

    totalTax += calculateSlabTax(
        Math.min(Math.max(income - 1000000, 0), 1250000 - 1000000),
        0.2
    );
    totalTax += calculateSlabTax(
        Math.min(Math.max(income - 1250000, 0), 1500000 - 1250000),
        0.25
    );
    totalTax += calculateSlabTax(Math.max(income - 1500000, 0), 0.3);
  }

  const calculateCess = (totalTax) => totalTax * 0.04;

  const newcess = calculateCess(totalTax);
  const newfinaltax = totalTax + newcess;

  return { newfinaltax, newcess };
};

taxcalculationSchema.pre("save", async function (next) {
  this.Name = `${this.FirstName} ${
    this.MiddleName ? this.MiddleName + " " : ""
  }${this.LastName}`;

  this.TotalIncome =
    this.Salary +
    this.PrerequisiteIncome +
    this.ProfitIncome +
    this.OtherIncome +
    this.RentedHouseIncome +
    this.DeemdedHouseIncome;

  this.TotalDeductions =
    this.section80C +
    this.section80CCC +
    this.section80CCD1 +
    this.section80CCD2 +
    this.section80CCD1B +
    this.section80CCF +
    this.section80CCG +
    this.section80D +
    this.section80DD +
    this.section80DDB +
    this.section80E +
    this.section80EE +
    this.section80G +
    this.section80GGA +
    this.section80GGC +
    this.section80QQB +
    this.section80RRB +
    this.section80TTA +
    this.section80U +
    this.HRA +
    this.LTA +
    this.OtherExemptedAllowances +
    this.ProfessionalTax +
    this.OwnHouseIncome;

  this.TotalTaxableIncome = this.TotalIncome - this.TotalDeductions;

  let StandardDeduction = 50000;

  let OldTaxableIncome =
    this.TotalIncome - this.TotalDeductions - StandardDeduction;

  const { Tax, ceSS } = await calculateOldRegimeTax(OldTaxableIncome);
  const { newfinaltax, newcess } = await calculateNewRegimeTax(this.TotalIncome);

  this.OldFinalTax = Tax;
  this.OldFinalCess = ceSS;
  this.NewFinalTax = newfinaltax;
  this.NewFinalCess = newcess;
  this.PreferredSystem =
    this.NewFinalTax < this.OldFinalTax ? "NewRegime" : "OldRegime";

  next();
});


const TaxCalculation = mongoose.model("TaxCalculation",taxcalculationSchema);

module.exports = TaxCalculation;