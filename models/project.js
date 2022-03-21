const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Project extends Model {}

Project.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    dog_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    gender: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    breed:{
      type: DataTypes.STRING,
      allowNull: true,
    },

    age:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    breed: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    size: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
        },
      },
      
      note: {
        type: DataTypes.TEXT,
        allowNull: false,
    
      },
    
  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'project',
  }

);

module.exports = Project;