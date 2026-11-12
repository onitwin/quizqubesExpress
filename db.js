require("dotenv").config();
const { Sequelize } = require("sequelize");

// Set up Sequelize connection
//Sequelize auto adds created at/timestamp fields to all models, so 'define' in the options object has 'timestamps:false' to
//globally override this.

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    define: {
      timestamps: false,
    },
  },
);

module.exports = sequelize;
