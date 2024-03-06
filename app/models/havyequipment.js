"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class HavyEquipment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      HavyEquipment.hasMany(models.UserHavyEquipment, {
        foreignKey: "havyEquipmentId",
        allowNull: false,
      });
      HavyEquipment.hasMany(models.Payment, {
        foreignKey: "havyEquipmentId",
        allowNull: false,
      });
      HavyEquipment.belongsTo(models.Service, {
        foreignKey: "serviceId",
        allowNull: false,
      });
    }
  }
  HavyEquipment.init(
    {
      nameHavyEquipemnt: DataTypes.STRING,
      priceHavyEquipemnt: DataTypes.FLOAT,
      stock: DataTypes.INTEGER,
      image: DataTypes.STRING,
      serviceId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "HavyEquipment",
    }
  );
  return HavyEquipment;
};
