const mongoose = require("mongoose");

const PersonalInfoSchema = new mongoose.Schema(
  {
    Token: {type: String,required:true},
    FirstName: { type: String, required: true },
    MiddleName: { type: String, required: false }, // Adjust required as needed
    LastName: { type: String, required: true },
    DateOfBirth: { type: String, required: true },
    FatherName: { type: String, required: true },
    Gender: { type: String, required: true },
    MaritalStatus: { type: String, required: true },
    AadharNo: { type: Number, required: true,unique: true },
    PanCard: { type: String, required: true },
    MobileNo: { type: String, required: true },
    Email: { type: String, required: true,unique: true },
    Address: { type: String, required: true },
    // PermanentAddress: { type: String, required: true },
    City: { type: String, required: true },
    selectedState: { type: String, required: true },
    PinCode: { type: String, required: true },
  },

  { timestaps: true }
);

const PersonalInfo = mongoose.model("personalinfo", PersonalInfoSchema);
module.exports = PersonalInfo;