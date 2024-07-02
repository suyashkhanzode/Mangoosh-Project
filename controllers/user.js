const User = require("../models/user");

exports.addUser = async (req, res, next) => {
  const { name, email, password } = req.body;

  const result = await User.create({
    name: name,
    email: email,
    password: password,
  });
  res.status(201).json({ message: result });
};

exports.findUserById = async (req, res, next) => {
  const userId = req.params.userId;
  const user = await User.findById(userId)
  res.status(200).json({ result: user });
};
