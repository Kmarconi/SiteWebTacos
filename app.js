var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//MONGO DB
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017', {useNewUrlParser: true});

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var creationTacosRouter = require('./routes/creationTacos');
var randomTacosRouter = require('./routes/randomTacos');
var dataTacosRouter = require('./routes/dataTacos.js');
var signupRouter = require('./routes/signup.js');



//Schemas
const userSchema = mongoose.Schema({
  username : String,
  password : String
});
module.exports = mongoose.model('User', userSchema);



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/creationTacos', creationTacosRouter);
app.use('/randomTacos',randomTacosRouter);
app.use('/dataTacos', dataTacosRouter);
app.use('/signup', signupRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
