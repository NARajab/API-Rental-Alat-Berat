const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User, Auth } = require("../models");

const ApiError = require("../../utils/apiError");

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await Auth.findOne({
      where: {
        email,
      },
      include: ["User"],
    });

    if (!user) {
      return next(new ApiError("Email tidak ditemukan", 404));
    }

    if (user && bcrypt.compareSync(password, user.password)) {
      const token = jwt.sign(
        {
          id: user.userId,
          username: user.User.name,
          email: user.email,
        },
        process.env.JWT_SECRET
      );

      res.status(200).json({
        status: "Success",
        message: "Berhasil login",
        data: token,
      });
    } else {
      return next(new ApiError("Kata sandi salah", 401));
    }
  } catch (err) {
    next(new ApiError(err.message, 500));
  }
};

const authenticate = async (req, res, next) => {
  try {
    res.status(200).json({
      status: "Success",
      data: {
        id: req.user.id,
        name: req.user.name,
        phoneNumber: req.user.phoneNumber,
        email: req.user.Auth.email,
      },
    });
  } catch (err) {
    next(new ApiError(err.message, 500));
  }
};

module.exports = {
  login,
  authenticate,
};
