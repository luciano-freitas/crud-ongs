const express = require('express');
const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

/*Validações importação das validações das rotas*/
const OngsValidation = require('./validations/ongs');
const ProfilesValidation = require('./validations/profiles');
const IncidentsValidation = require('./validations/incidents');
const SessionsValidation = require('./validations/sessions');

const routes = express.Router();

routes.post('/sessions', SessionsValidation.create(), SessionController.create)

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngsValidation.create(), OngController.create);

routes.get('/incidents', IncidentsValidation.index(), IncidentController.index);
routes.post('/incidents', IncidentsValidation.create(), IncidentController.create);
routes.delete('/incidents/:id', IncidentsValidation.delete(), IncidentController.delete);

routes.get('/profile', ProfilesValidation.index(), ProfileController.index);

module.exports = routes;