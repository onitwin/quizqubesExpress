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
QuestionSet.hasMany(Question, {
  foreignKey: "questionSetId",
  onDelete: "CASCADE",
});

module.exports = Question;

/*Mapped to following on database
id(char(36))
questionSetId(char(36))
pairId(int)
question(varchar(255))
answer(varchar(255))
questionCategory(varchar(255))
questionFormat(varchar(255))
 */
