const knex = require("knex");
const configurations = require("../knexfile.js");
const evironment = process.env.NODE_ENV || "development";

module.exports = knex(configurations[evironment]);
