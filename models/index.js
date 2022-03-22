const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');
const User = require('./user');
const Dog = require('./dog');
const Activity = require('./activity');
const Booking = require('./booking')

User.hasMany(Dog, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Dog.belongsTo(User, {
  foreignKey: "user_id",
});

//Links dog to booking via the Activity Model//
Dog.belongsToMany(Booking, { through: Activity, foreignKey: "dog_id" });

//Links booking to dog via the Activity Model//
Booking.belongsToMany(Dog, { through: Activity, foreignKey: "booking_id" });

module.exports = { User, Dog, Activity, Booking };

