const { Router } = require('express')
const routs = Router()
const readForm = require('../controllers/ControllerForm')
const createForm = require('../controllers/ControllerForm')
const readDate = require('../controllers/ControllerForm')

routs.get('/form', readForm.readForm);
routs.post('/form', createForm.createForm);
routs.get('/data ', readDate.readDate);

module.exports = routs