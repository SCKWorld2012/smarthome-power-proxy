/** @format */

require('express-async-errors');

const express = require('express');
const config = require('config');

const initApp = require('./startup/initApp');
const initCors = require('./startup/initCors');

//calling all the funcitons to initialize the app
const app = express();

initCors(app);
initApp(app);

//running the application on given port
const port = process.env.PORT || config.get('port');
const server = app.listen(port, () =>
	console.log(`${config.get('name')} listening on port ${port}...`)
);

module.exports = server;
