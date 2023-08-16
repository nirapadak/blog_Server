const jwt = require('jsonwebtoken');
const User = require('../models/user');

exports.requireSignIn = (req, res, next) => {
  try {
    const decoded = jwt.verify(
      req.headers.authorization,
      process.env.SECRET_KEY
    );
    req.user = decoded;
    next();
  } catch (error) {
    return res.json({error: "Invalid authorization"})
  }
}

exports.isAdmin = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id);
    if (user.role != 1) {
      return res.json({error: "unAuthorized admin"})
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
  }
}