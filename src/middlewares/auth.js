const { SECRET } = process.env;
const jwt = require('jsonwebtoken');

function auth(req, res, next) {
  const token = req.headers.authorization.replace('Bearer ', '');
  let decoded = null;
  try {
    decoded = jwt.verify(token, SECRET);
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' });
  }
  req.userId = decoded.id;
  return next();
}

module.exports = { auth };
