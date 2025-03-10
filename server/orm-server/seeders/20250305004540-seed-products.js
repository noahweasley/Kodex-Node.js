"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    return await queryInterface.bulkInsert("Products", [
      {
        name: "Laptop",
        price: 1000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Smartphone",
        price: 600,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Headphones",
        price: 200,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return await queryInterface.bulkDelete("Products", null, {});
  },
};
