const express = require('express');
const controller = require('./src/controllers/Controller');

const app = express();

// Define routes
app.get('/', controller.home);
app.get('/about', controller.about);
app.get('/contact', controller.contact);
app.get('/file-write', controller.writeFile);
app.post('/upload', controller.uploadFile);

module.exports = app;