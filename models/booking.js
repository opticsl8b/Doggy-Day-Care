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

    dog_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

    activity_id: {

    },

    date: {

    },

    session: {

    },
},

{
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "comment",
}

)
