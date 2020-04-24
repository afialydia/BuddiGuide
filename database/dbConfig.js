const knex = require("knex");

const config = require("../knexfile");

const env = process.env.NODE_ENV || "development";

const configOptions = config[env];

const db = knex(configOptions);

module.exports = db;
