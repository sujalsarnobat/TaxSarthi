const mongoose = require("mongoose");

const OldSchema = new mongoose.Schema({
  Token: { type: String, required: true },
  
  AadharNo: { type: Number, default: 0, unique: true },
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
});

// Pre-save hook to update the 'Name' field before saving to the database
OldSchema.pre("save", function (next) {
  // Combine FirstName, MiddleName, and LastName to create the 'Name' field
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
  next();
});

const OldReign = mongoose.model("OldReign", OldSchema);

module.exports = OldReign;
