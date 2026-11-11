const questionService = require("../services/questionService");

const createQuestion = async (req, res) => {
  const {
    questionSetId,
    pairId,
    question,
    answer,
    questionCategory,
    questionFormat,
  } = req.body;
  try {
    const question = await questionService.createQuestion(
      questionSetId,
      pairId,
      question,
      answer,
      questionCategory,
      questionFormat,
    );
    res.status(201).json(question);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getQuestionById = async (req, res) => {
  const { id } = req.params;
  try {
    const success = await questionService.getQuestionById(id);
    if (success) {
      res.status(200).json({ message: `Question with id ${id} retrieved` });
    } else {
      res.status(404).json({ message: `Question with id ${id} not found` });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllQuestions = async (req, res) => {
  try {
    const questions = await questionService.getAllQuestions();
    res.status(200).json(questions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateQuestion = async (req, res) => {
  const { id } = req.params;
  const {
    questionSetId,
    pairId,
    question,
    answer,
    questionCategory,
    questionFormat,
  } = req.body;
  try {
    const question = await questionService.updateQuestion(
      id,
      questionSetId,
      pairId,
      question,
      answer,
      questionCategory,
      questionFormat,
    );
    if (question) {
      res.status(200).json(post);
    } else {
      res.status(404).json({ message: `Question using id ${id} not found` });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteQuestion = async (req, res) => {
  const { id } = req.params;
  try {
    const success = await questionService.deleteQuestion(id);
    if (success) {
      res.status(200).json({ message: `Question with id ${id} deleted` });
    } else {
      res.status(404).json({ message: `Question with id ${id} not found` });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createQuestion,
  getAllQuestions,
  getQuestionById,
  updateQuestion,
  deleteQuestion,
};
