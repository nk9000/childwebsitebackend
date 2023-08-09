const express = require('express');
const Question = require('../models/questionModel');

const router = express.Router();


router.get('/', async (req, res) => {
  try {
    console.log('GET /api/questions');
    const questions = await Question.find();
    res.json(questions);
  } catch (err) {
    console.error('Error fetching questions:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});


module.exports = router;
