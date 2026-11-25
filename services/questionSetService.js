const QuestionSet = require("../models/QuestionSet");
const Question = require("../models/Question");
const { Op } = require("sequelize");

const DAY_MS = 24 * 60 * 60 * 1000;

const createQuestionSet = async (
  title,
  publicationDate,
  published,
  description,
  logic,
  maxQuestions,
) => {
  const questionSet = await QuestionSet.create({
    title,
    publicationDate,
    published,
    description,
    logic,
    maxQuestions,
  });
  return questionSet;
};

const getAllQuestionSets = async () => {
  const questionSets = await QuestionSet.findAll({
    order: [["publicationDate", "ASC"]],
  });
  return questionSets;
};

const getQuestionSetByDate = async (unixDate) => {
  const questionSet = await QuestionSet.findOne({
    where: { publicationDate: unixDate },
  });
  return questionSet;
};

const getQuestionSetById = async (id) => {
  const questionSet = await QuestionSet.findByPk(id);
  return questionSet;
};

const getQuestionSetWithQuestionsByDate = async (unixDate) => {
  // Snap to the start of that UTC day, then match anything within the day
  //doing this here allows simple "Date.now()" to be passed in with fetch on front end
  console.log("unixdate:", unixDate);
  const start = Math.floor(Number(unixDate) / DAY_MS) * DAY_MS;
  const end = start + DAY_MS;
  console.log("START: ", start);
  console.log("END: ", end);

  return QuestionSet.findOne({
    where: { publicationDate: { [Op.gte]: start, [Op.lt]: end } },
    include: [
      {
        model: Question,
        required: false, // LEFT OUTER JOIN
      },
    ],
    order: [[{ model: Question }, "pairId", "ASC"]],
  });
};

const updateQuestionSet = async (
  title,
  id,
  publicationDate,
  published,
  description,
  logic,
  maxQuestions,
) => {
  const questionSet = await QuestionSet.findByPk(id);
  if (questionSet) {
    questionSet.title = title;
    questionSet.publicationDate = publicationDate;
    questionSet.published = published;
    questionSet.description = description;
    questionSet.logic = logic;
    questionSet.maxQuestions = maxQuestions;
    await questionSet.save();
    return questionSet;
  }
  return null;
};

const deleteQuestionSet = async (id) => {
  const questionSet = await QuestionSet.findByPk(id);
  if (questionSet) {
    await questionSet.destroy();
    return true;
  }
  return false;
};

module.exports = {
  createQuestionSet,
  getAllQuestionSets,
  getQuestionSetById,
  updateQuestionSet,
  deleteQuestionSet,
  getQuestionSetByDate,
  getQuestionSetWithQuestionsByDate,
};
