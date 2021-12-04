'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Carts', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      courseId: {
        type: Sequelize.UUID,
        onDelete: 'CASCADE',
        references: {
          model: 'Courses',
          key: 'id',
          as: 'courseId'
        }
      },
      userId: {
        type: Sequelize.UUID,
        onDelete: 'CASCADE',
        references: {
          model: 'Users',
          key: 'id',
          as: 'userId'
        }
      },
      deleted:{
        type: Sequelize.BOOLEAN, 
        defaultValue: false
      },
      deleteOn:{
        type: Sequelize.DATE
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
    await queryInterface.dropTable('Carts');
  }
};