const ApiError = require("../../utils/apiError");
const { User } = require("../models");
const { Op } = require("sequelize");

const getAllUser = async (req, res, next) => {
  try {
    const user = await User.findAll();
    res.status(200).json({
      status: "Success",
      data: user,
    });
  } catch (err) {
    next(new ApiError(err.message, 500));
  }
};

const getOneUser = async (req, res, next) => {
  let user;
  try {
    if (req.query.name) {
      user = await User.findAll({
        where: {
          name: { [Op.iLike]: `%${req.query.name.toLowerCase()}%` },
        },
      });
    } else if (req.params.id) {
      user = await User.findByPk(req.params.id);
    } else {
      return next(new ApiError("Not found", 404));
    }
    res.status(200).json({
      status: "Success",
      data: user,
    });
  } catch (err) {
    next(new ApiError(err.message, 500));
  }
};

const createUser = async (req, res, next) => {
  const userBody = req.body;
  try {
    const newUser = await User.create({ ...userBody });
    res.status(201).json({
      status: "Success",
      data: newUser,
    });
  } catch (err) {
    next(new ApiError(err.message, 500));
  }
};

const updateUser = async (req, res, next) => {
  const { id } = req.params;
  const user = await User.findOne({
    where: {
      id,
    },
  });
  const userBody = req.body;
  const condition = { where: { id }, returning: true };
  try {
    if (!user) {
      return next(new ApiError("Pengguna Tidak ditemukan", 404));
    }
    const updateUser = await User.update({ ...userBody }, condition);
    res.status(200).json({
      status: "Success",
      message: `Pembaruan user dengan id ${id} berhasil`,
      data: updateUser,
    });
  } catch (err) {
    next(new ApiError(err.message, 500));
  }
};

module.exports = {
  createUser,
  getAllUser,
  getOneUser,
  updateUser,
};
