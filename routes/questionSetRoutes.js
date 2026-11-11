// routes/questionSetRoutes.js
const express = require("express");
const questionSetController = require("../controllers/questionSetController");
const router = express.Router();

router.post("/questionSet", questionSetController.createQuestionSet);
router.get("/questionSets", questionSetController.getAllQuestionSets);
router.put("/questionSet/:id", questionSetController.updateQuestionSet);
router.delete("/questionSet/:id", questionSetController.deleteQuestionSet);

module.exports = router;
