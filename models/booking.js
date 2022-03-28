const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Dog = require('./dog');
const User = require('./user');

class Booking extends Model {}

Booking.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    session_datetime: {
      type: DataTypes.DATE,
      allowNull: false,
    },

    session_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    dog_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Dog,
        key: 'id',
      },
    },

    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: 'id',
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'booking',
  }
);

module.exports = Booking;
