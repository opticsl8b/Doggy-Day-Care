const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');
const User = require('./user');
const Project = require('./dog');


class User extends Model {
  async checkPw(loginPw) {
    return await bcrypt.compare(loginPw, this.password);
  }
}


User.hasMany(Project, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Project.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Project };

