"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addConstraint("Categories", {
      fields: ["UserId"],
      type: "FOREIGN KEY",
      references: {
        table: "Users",
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
      "Categories",
      "Categories_UserId_Users_fk"
    );
    await queryInterface.removeConstraint("Categories", "Categories_UserId_uk");
  },
};
