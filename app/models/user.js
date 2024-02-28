"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasOne(models.Auth, {
        foreignKey: {
          name: "userId",
          allowNull: false,
        },
      });
      User.hasMany(models.UserHavyEquipment, {
        foreignKey: "userId",
        allowNull: false,
      });
      User.hasMany(models.Transaction, {
        foreignKey: "userId",
        allowNull: false,
      });
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      address: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
