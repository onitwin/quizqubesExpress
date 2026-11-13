const questionSetService = require("../services/questionSetService");

const createQuestionSet = async (req, res) => {
  const { title, publicationDate, published, description, logic } = req.body;
  try {
    const questionSet = await questionSetService.createQuestionSet(
      title,
      publicationDate,
      published,
      description,
      logic,
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
  const { title, publicationDate, published, description, logic } = req.body;
  try {
    const questionSet = await questionSetService.updateQuestionSet(
      title,
      id,
      publicationDate,
      published,
      description,
      logic,
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
};
