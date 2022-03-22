const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Booking extends Model {}

Booking.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    date: {
        field: "date",
        type: DataTypes.DATE, 
        allowNull: false,
    },

    session: {
        field: "session_time",
        type: DataTypes.TIME,
        allowNull: false,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
      
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "booking",
  }

);

module.exports = Booking;
