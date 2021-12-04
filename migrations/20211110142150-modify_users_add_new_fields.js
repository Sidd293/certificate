'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return Promise.all([
      queryInterface.addColumn(
        'Users',
        'brainlox_coin',
        {
          type: Sequelize.INTEGER,
          defaultValue: 0
        }
      ),
    ]);

    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
