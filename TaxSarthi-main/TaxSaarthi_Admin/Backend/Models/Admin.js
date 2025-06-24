const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const AdminSchema = new mongoose.Schema(
  {
    username: { type: "String", unique: true, required: true },
    email: { type: "String", unique: true, required: true },
    uniqueId: { type: "String", unique: true, required: true },
    password: { type: "String", required: true },
  },

  { timestaps: true }
);

const generateAdminToken = (username,email,uniqueId) => {
  return jwt.sign({ username, email, uniqueId }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
};

const Admin = mongoose.model("admin", AdminSchema);
module.exports = {Admin,generateAdminToken};
