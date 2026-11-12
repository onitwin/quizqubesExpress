// routes/questionRoutes.js
const express = require("express");
const questionController = require("../controllers/questionController");
const router = express.Router();

router.post("/question", questionController.createQuestion);
router.get("/questions", questionController.getAllQuestions);
router.get("/question/:id", questionController.getQuestionById);
router.put("/question/:id", questionController.updateQuestion);
router.delete("/question/:id", questionController.deleteQuestion);

module.exports = router;
