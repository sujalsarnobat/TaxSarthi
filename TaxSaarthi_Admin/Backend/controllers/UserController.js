const generateToken = require('../Config/generateToken');
const User = require('../Models/Person');

// Signup controller
exports.signup = async (req, res) => {
  try {
    const user = await User.create(req.body);
    const token = generateToken(user._id);
    res.json({ token });
  } catch (err) {
    res.status(400).json(err);
  }
};

// Login controller
exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });

    if (user) {
      if (user.password === password) {
        const token = generateToken(user._id);
        res.json({
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
  }
};
