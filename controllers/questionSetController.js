const questionSetService = require("../services/questionSetService");

const createQuestionSet = async (req, res) => {
  const {
    title,
    publicationDate,
    published,
    description,
    logic,
    maxQuestions,
  } = req.body;
  try {
    const questionSet = await questionSetService.createQuestionSet(
      title,
      publicationDate,
      published,
      description,
      logic,
      maxQuestions,
    );
    res.status(201).json(questionSet);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getQuestionSetById = async (req, res) => {
  const { id } = req.params;
  try {
    const questionSets = await questionSetService.getQuestionSetById(id);
    if (questionSets) {
      res.status(200).json({ message: questionSets });
    } else {
      res.status(404).json({ message: `Question Set ${id} not found` });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getQuestionSetByDate = async (req, res) => {
  const { unixDate } = req.params;
  try {
    const questionSets =
      await questionSetService.getQuestionSetByDate(unixDate);
    if (questionSets) {
      res.status(200).json({ message: questionSets });
    } else {
      res
        .status(404)
        .json({ message: `Question Set with Unixdate ${unixDate} not found` });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getQuestionSetWithQuestionsByDate = async (req, res) => {
  try {
    const questionSet =
      await questionSetService.getQuestionSetWithQuestionsByDate(
        req.params.unixDate,
      );
    if (!questionSet) {
      return res
        .status(404)
        .json({ message: "No question set found for that date" });
    }
    res.json(questionSet);
  } catch (err) {
    res.status(err.status || 500).json({ message: err.message });
  }
};

const getAllQuestionSets = async (req, res) => {
  try {
    const questionSets = await questionSetService.getAllQuestionSets();
    res.status(200).json(questionSets);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateQuestionSet = async (req, res) => {
  const { id } = req.params;
  const {
    title,
    publicationDate,
    published,
    description,
    logic,
    maxQuestions,
  } = req.body;
  try {
    const questionSet = await questionSetService.updateQuestionSet(
      title,
      id,
      publicationDate,
      published,
      description,
      logic,
      maxQuestions,
    );
    if (questionSet) {
      res.status(200).json(questionSet);
    } else {
      res.status(404).json({ message: `Question Set ${id} not found` });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteQuestionSet = async (req, res) => {
  const { id } = req.params;
  try {
    const success = await questionSetService.deleteQuestionSet(id);
    if (success) {
      res.status(200).json({ message: `Question set ${id} deleted` });
    } else {
      res.status(404).json({ message: `Question Set ${id} not found` });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createQuestionSet,
  getQuestionSetById,
  getAllQuestionSets,
  updateQuestionSet,
  deleteQuestionSet,
  getQuestionSetByDate,
  getQuestionSetWithQuestionsByDate,
};
