const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Dog = require('./dog');
const Booking = require('./booking');

class Activity extends Model {}

Activity.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    dog_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Dog,
        key: 'id',
      },
    },

    booking_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Booking,
        key: 'id',
      },
    },
  },

  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'activity',
  }
);

module.exports = Activity;
