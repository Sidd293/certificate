'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, Sequelize) => {
  class App_Settings extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  App_Settings.init({
    key: Sequelize.STRING,
    value: Sequelize.STRING
  }, {
    sequelize,
    modelName: 'App_Settings',
  });
  return App_Settings;
};