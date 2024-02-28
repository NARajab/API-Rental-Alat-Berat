"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("HavyEquipments", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nameHavyEquipemnt: {
        type: Sequelize.STRING,
      },
      priceHavyEquipemnt: {
        type: Sequelize.FLOAT,
      },
      stock: {
        type: Sequelize.INTEGER,
      },
      imageUrl: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      serviceId: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("HavyEquipments");
  },
};
