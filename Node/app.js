var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var fiboRouter = require('./routes/fibo');
var addUserRouter = require('./routes/addUser');
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/fibo', fiboRouter);
app.use('/addUser', addUserRouter);

module.exports = app;
