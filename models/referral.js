'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, Sequelize) => {
  class Referral extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Referral.init({
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
    sender_phone:{
        type: Sequelize.STRING
    },
    receiver_name:{
        type: Sequelize.STRING
    },
    receiver_email:{
        type: Sequelize.STRING
    },
    receiver_phone:{
        type: Sequelize.STRING
    },
    msg_from_sender:{
        type: Sequelize.STRING
    },
    medium:{
        type: Sequelize.STRING
    },
    notes:{
        type: Sequelize.STRING
    },
    state:{
        type: Sequelize.STRING
    },
  }, {
    sequelize,
    modelName: 'Referral',
  });
  return Referral;
};