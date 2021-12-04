'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, Sequelize) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Cart.init({
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
    }
  }, {
    sequelize,
    modelName: 'Cart',
  });
  return Cart;
};