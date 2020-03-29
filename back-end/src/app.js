const express = require('express');
const connection = require('./config/database')
const routes = require('./routes');

const app = express();

app.use(express.json())
app.use(routes);


module.exports =  app;