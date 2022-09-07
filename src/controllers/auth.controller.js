const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

const { SECRET } = process.env;

async function login(req, res) {
  const user = await User.findOne({ where: { email: req.body.email } });
  if (user === null || !await bcrypt.compare(req.body.password, user.password)) {
    const error = new Error('Invalid login.');
    error.httpCode = 401;
    throw error;
  }
  const { id } = user;
  const token = jwt.sign({ id }, SECRET, { expiresIn: 60 * 3 });
  return res.json({ token, expiresIn: +new Date() + 1000 * 60 * 10 });
}

async function profile(req, res) {
  return res.json(await User.findByPk(req.userId));
}

async function register(req, res) {
  const {
    email,
    password,
    avatar,
    name,
  } = req.body;
  return res.status(201).json(await User.create({
    email, password, avatar, name,
  }));
}

module.exports = { login, register, profile };
