require('dotenv').config();
require('@babel/register');

const path = require('path');
const express = require('express');
const morgan = require('morgan');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const { sequelize, User, Cart } = require('../db/models');

const renderTemplate = require('../lib/renderReactModule');
const cartRouter = require('./routes/cartRouter');
const deleteFavoritesRouter = require('./routes/deleteRoute');
const registrationRouter = require('./routes/registrationRouter');
const loginRouter = require('./routes/loginRouter');
const mainRouter = require('./routes/mainRouter');
const logoutRouter = require('./routes/logoutRouter');
const favoritesRouter = require('./routes/favoritesRouter')
const addFavoriteRouter = require('./routes/addFavoriteRouter')

const app = express();

app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '../public/')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const { PORT, SESSION_SECRET } = process.env;

const sessionConfig = {
  name: 'Session',
  store: new FileStore(),
  secret: SESSION_SECRET ?? '123',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 10,
    httpOnly: true,
  },
};

app.use(session(sessionConfig));

app.use('/', mainRouter)
app.use('/cart', cartRouter);
//app.use('/order', cartRouter);
app.use('/registration', registrationRouter);
app.use('/login', loginRouter);
app.use('/logout', logoutRouter);
app.use('/addFavorite', addFavoriteRouter);
app.use('/favorites', favoritesRouter);

app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log('Соединение с базой установлено!');
  } catch (err) {
    console.log(err, 'Error!');
  }
  console.log(`Сервер поднят на ${PORT} порту!`);
});
