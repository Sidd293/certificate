'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Referrals', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      sender_name: {
        type: Sequelize.STRING
      },
      sender_email: {
        type: Sequelize.STRING
      },
      sender_phone: {
        type: Sequelize.STRING
      },
      receiver_name: {
        type: Sequelize.STRING
      },
      receiver_email: {
        type: Sequelize.STRING
      },
      receiver_phone: {
        type: Sequelize.STRING
      },
      msg_from_sender: {
        type: Sequelize.STRING
      },
      medium: {
        type: Sequelize.STRING
      },
      notes: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Referrals');
  }
};