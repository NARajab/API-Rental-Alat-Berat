const ApiError = require("../../utils/apiError");
const { HavyEquipment } = require("../models");

const creatHavyEquipment = async (req, res, next) => {
  const havyBody = req.body;
  try {
    const newHavy = await HavyEquipment.create({ ...havyBody });
    res.status(201).json({
      status: "Succes",
      data: newHavy,
    });
  } catch (err) {
    next(new ApiError(err.message, 500));
  }
};

const updateHavyEquipment = async (req, res, next) => {
  const { id } = req.params;
  const havyBody = req.body;
  const condition = { where: { id }, returning: true };
  try {
    const updateHavy = await HavyEquipment.update({ ...havyBody }, condition);
    res.status(201).json({
      status: "Success",
      data: updateHavy,
    });
  } catch (err) {
    next(new ApiError(err.message, 500));
  }
};

const getAllHavyEquipment = (module.exports = {
  creatHavyEquipment,
  updateHavyEquipment,
});
