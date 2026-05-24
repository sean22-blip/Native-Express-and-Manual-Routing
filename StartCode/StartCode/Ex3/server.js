const express = require('express');
const logger = require('./logger');
const validating = require('./validateQuery');
const courses = require('../EX-2/course');
// const { log } = require('node:console');
const app = express();
const port = 8000;
app.use(logger);
