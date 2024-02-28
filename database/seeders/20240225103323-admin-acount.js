"use strict";

const { User } = require("../../app/models");
const dotenv = require("dotenv");
const bcrypt = require("bcrypt");
dotenv.config();
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Users", [
      {
        name: "admin",
        phoneNumber: "6285246918505",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    const adminPassword = process.env.PASSWORD_HASH;
    const saltRounds = 10;
    const hashedPassword = bcrypt.hashSync(adminPassword, saltRounds);

    await User.findAll();

    await queryInterface.bulkInsert("Auths", [
      {
        email: "adminc8@mail.com",
        password: hashedPassword,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
    await queryInterface.bulkDelete("Auths", null, {});
  },
};
