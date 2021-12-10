const User = require("../models/User");
const bcrypt = require("bcryptjs");

exports.userRegiter = async (req, res) => {
  let newUser = new User({ ...req.body });
  try {
    const user = await User.findOne({ email: newUser.email });

    if (user) return res.status(404).json({ msg: "User already exist" });

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(newUser.password, salt);

    newUser.password = hash;

    await newUser.save();

    res.status(201).json({ msg: "User register success" });
  } catch (error) {
    console.log("Register error", error);

    res.status(401).json({ msg: "User register failed" });
  }
};
