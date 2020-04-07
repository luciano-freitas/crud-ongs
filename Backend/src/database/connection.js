const Knex = require('knex');
const configuration = require('../../knexfile');

const env = process.env.NODE_ENV == 'test' ? configuration.test : configuration.development;

const connnection = Knex(env);

module.exports = connnection;