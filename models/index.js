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

Dog.hasMany(Activity, {
  foreignKey: "activity_id",
  onDelete: "CASCADE",
});

Activity.hasMany(Dog, {
  foreignKey: "dog_id",
});


module.exports = { User, Dog, Activity, Booking };

