"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addConstraint("Expenses", {
      fields: ["CategoryId"],
      type: "FOREIGN KEY",
      references: {
        table: "Categories",
        field: "id",
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeConstraint(
      "Expenses",
      "Expenses_CategoryId_Categories_fk"
    );
  },
};
