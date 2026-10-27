const { DataTypes } = require("sequelize");
const sequelize = require("../db");
const QuestionSet = require("./QuestionSet");

const Question = sequelize.define("Question", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  questionSetId: {
    type: DataTypes.UUID,
  },
  pairId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
  },
  question: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  answer: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  questionCategory: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  questionFormat: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Define relationship: One User has many Posts > one question set has many questions
Question.belongsTo(QuestionSet, { foreignKey: "questionSetId" });

module.exports = Question;
