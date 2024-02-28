"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Service extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Service.hasOne(models.HavyEquipment, {
        foreignKey: "serviceId",
        allowNull: false,
      });
    }
  }
  Service.init(
    {
      service: DataTypes.STRING,
      price: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "Service",
    }
  );
  return Service;
};
