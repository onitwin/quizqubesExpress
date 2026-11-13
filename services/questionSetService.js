const QuestionSet = require("../models/QuestionSet");

const createQuestionSet = async (
  title,
  publicationDate,
  published,
  description,
  logic,
) => {
  const questionSet = await QuestionSet.create({
    title,
    publicationDate,
    published,
    description,
    logic,
  });
  return questionSet;
};

const getAllQuestionSets = async () => {
  const questionSets = await QuestionSet.findAll();
  return questionSets;
};

const getQuestionSetById = async (id) => {
  const questionSet = await QuestionSet.findByPk(id);
  return questionSet;
};

const updateQuestionSet = async (
  title,
  id,
  publicationDate,
  published,
  description,
  logic,
) => {
  const questionSet = await QuestionSet.findByPk(id);
  if (questionSet) {
    questionSet.title = title;
    questionSet.publicationDate = publicationDate;
    questionSet.published = published;
    questionSet.description = description;
    questionSet.logic = logic;
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
};
