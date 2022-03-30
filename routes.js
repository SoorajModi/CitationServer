const express = require('express');
const HomeController = require('./controllers/homeController');

const routes = express();

routes.get('/hello', HomeController.hello);

module.exports = routes;
