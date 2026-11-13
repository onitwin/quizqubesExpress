require("dotenv").config();
const fs = require("fs");
const { Sequelize } = require("sequelize");

// Set up Sequelize connection
//Sequelize auto adds created at/timestamp fields to all models, so 'define' in the options object has 'timestamps:false' to
//globally override this.

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    port: Number(process.env.DB_PORT),
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    dialectOptions: {
      ssl: {
        ca: fs.readFileSync(process.env.DB_CA_PATH),
        rejectUnauthorized: true,
      },
    },
    define: {
      timestamps: false,
    },
  },
);

module.exports = sequelize;
