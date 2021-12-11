/**
 * Module dependencies.
 */
const express = require('express');
const dotenv = require('dotenv');
const ejs = require('ejs')
const cors = require('cors');
const path = require('path');
const logger = require('morgan');
const chalk = require('chalk');
const mongoose = require('mongoose')
const http = require('http')

/**
 * .env config
 */
dotenv.config({
    path: '.env'
});

/**
 * Create Express server.
 */
const app = express();
app.use(cors())

/**
 * Connect to MongoDB.
 */
 require('./configs/mongoose')


/**
 * Express configuration.
 */ 
app.set('port', process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('layouts', path.join(__dirname, 'views/layouts'));
app.set('/uploads', express.static(path.join(__dirname, 'uploads')));
app.set('view engine', 'ejs');

app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/bootstrap', express.static(path.join(__dirname, '/node_modules/bootstrap/dist')));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

const router = require('./routers/router.js')
app.use('/', router);


app.use((err, req, res, next) => {
    // console.log(req);
    res.status(err.status || 500).json({
        msg: err.msg || 'We meet an unexpected error.',
        success: false,
        status: err.status || 500
    });
});


var server = http.createServer(app)

server.listen(app.get('port'), () => {
    console.log('%s App is running at http://localhost:3000', chalk.green('✓'));
    console.log(chalk.magentaBright('  Press CTRL-C to stop'));
});

require('./services/park_sensors');