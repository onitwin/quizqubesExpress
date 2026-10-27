const Question = require("../models/Question");

const createQuestion = async (
  questionSetId,
  pairId,
  newQuestion,
  answer,
  questionCategory,
  questionFormat,
) => {
  const question = await Question.create({
    questionSetId,
    pairId,
    newQuestion,
    answer,
    questionCategory,
    questionFormat,
  });
  return question;
};

const getAllQuestions = async () => {
  const questions = await Question.findAll();
  return questions;
};

const getQuestionById = async (id) => {
  const question = await Question.findByPk(id);
  return question;
};

const updateQuestion = async (
  id,
  questionSetId,
  pairId,
  question,
  answer,
  questionCategory,
  questionFormat,
) => {
  const questionToUpdate = await Question.findByPk(id);
  if (questionToUpdate) {
    questionToUpdate.questionSetId = questionSetId;
    questionToUpdate.pairId = pairId;
    questionToUpdate.question = question;
    questionToUpdate.answer = answer;
    questionToUpdate.questionCategory = questionCategory;
    questionToUpdate.questionFormat = questionFormat;
    await questionToUpdate.save();
    return questionToUpdate;
  }
  return null;
};

const deleteQuestion = async (id) => {
  const question = await Question.findByPk(id);
  if (question) {
    await question.destroy();
    return true;
  }
  return false;
};

module.exports = {
  createQuestion,
  getAllQuestions,
  getQuestionById,
  updateQuestion,
  deleteQuestion,
};
