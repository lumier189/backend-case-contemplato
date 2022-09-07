const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('./db');
const Task = require('./task.model');

const { DataTypes } = Sequelize;

const User = sequelize.define(
  'users',
  {
    userId: {
      type: DataTypes.INTEGER,
    },
    avatar: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
      set(value) {
        this.setDataValue('password', bcrypt.hashSync(value, Number(process.env.SALT_ROUNDS)));
      },
    },
    name: {
      type: DataTypes.STRING,
    },
  },
);

User.hasMany(Task, { foreignKey: 'userId' });
Task.belongsTo(User, { foreignKey: 'userId' });

module.exports = User;
