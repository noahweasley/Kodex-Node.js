const { Sequelize } = require("sequelize");
const env = require("./env");

const sequelize = new Sequelize(env.database, env.user, env.password, {
  host: env.host,
  dialect: "postgres",
  logging: false,
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

module.exports = sequelize;
