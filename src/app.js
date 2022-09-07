const createError = require('http-errors');
const cors = require('cors');
const express = require('express');
require('express-async-errors');
const logger = require('morgan');
const taskRouter = require('./routes/task.router');
const authRouter = require('./routes/auth.router');

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/task', taskRouter);
app.use('/auth', authRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  // eslint-disable-next-line no-console
  console.error(err);
  return res
    .status(err.httpCode ?? 500)
    .json({ message: err.message ?? 'Unexpected error.' });
});

module.exports = app;
