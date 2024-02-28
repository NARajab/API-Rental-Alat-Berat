"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserHavyEquipment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      UserHavyEquipment.belongsTo(models.User, {
        foreignKey: "userId",
        as: "user",
      });
      UserHavyEquipment.belongsTo(models.HavyEquipment, {
        foreignKey: "havyEquipmentId",
        as: "havyEquipment",
      });
    }
  }
  UserHavyEquipment.init(
    {
      userId: DataTypes.INTEGER,
      havyEquipmentId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "UserHavyEquipment",
    }
  );
  return UserHavyEquipment;
};
