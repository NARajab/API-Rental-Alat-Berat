"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Transaction.belongsTo(models.HavyEquipment, {
        foreignKey: {
          name: "havyEquipmentId",
          allowNull: false,
        },
      });
      Transaction.belongsTo(models.User, {
        foreignKey: {
          name: "userId",
          allowNull: false,
        },
      });
    }
  }
  Transaction.init(
    {
      userId: DataTypes.INTEGER,
      havyEquipmentId: DataTypes.INTEGER,
      totalPrice: DataTypes.FLOAT,
      statusPayment: { type: DataTypes.ENUM(["Paid", "Unpaid", "Panding"]) },
    },
    {
      sequelize,
      modelName: "Transaction",
    }
  );
  return Transaction;
};
