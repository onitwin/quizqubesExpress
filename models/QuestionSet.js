const { DataTypes } = require("sequelize");
const sequelize = require("../db");

//question set is parent of questions > e.g. users is parent of posts in guide being followed or 'one questionSet, many questions
const QuestionSet = sequelize.define("QuestionSet", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  publicationDate: {
    type: DataTypes.BIGINT,
  },
  published: {
    type: DataTypes.TINYINT,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    defaultValue: "Please enter a description",
  },
  logic: {
    type: DataTypes.STRING,
    defaultValue: "Please enter a logic description",
  },
});

module.exports = QuestionSet;
