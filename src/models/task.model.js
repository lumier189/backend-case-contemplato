const Sequelize = require('sequelize');
const sequelize = require('./db');

const { DataTypes } = Sequelize;

const Task = sequelize.define(
  'task',
  {
    userId: {
      type: DataTypes.STRING,
    },
    title: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    isDone: {
      type: DataTypes.STRING,
    },
  },
);

module.exports = Task;
