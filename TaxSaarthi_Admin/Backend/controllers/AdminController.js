const { Admin, generateAdminToken } = require("../Models/Admin");

// Signup controller
exports.signup = async (req, res) => {
  try {
    const user = await Admin.create(req.body);
    const token = generateAdminToken(user.username, user.email, user.uniqueId);
    res.status(200).json({ token });
  } catch (err) {
    res.status(400).json(err);
    console.log(err)
  }
};

// Login controller
exports.login = async (req, res) => {
  const { username, password, uniqueId } = req.body;
  try {
    const admin = await Admin.findOne({ username, uniqueId });

    if (admin) {
      if (admin.password === password) {
        const token = generateAdminToken(
          admin.username,
          admin.email,
          admin.uniqueId
        );
        res.status(200).json({
          token,
          message: "Success",
        });
      } else {
        res.json("Password is incorrect");
      }
    } else {
      res.json("No record exists");
    }
  } catch (err) {
    res.status(500).json(err);
    console.log(error)
  }
};
