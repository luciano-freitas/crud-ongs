const Knex = require('knex');
const configuration = require('../../knexfile');

const connnection = Knex(configuration.development);

module.exports = connnection;