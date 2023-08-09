const mongoose = require('mongoose');
const Question = require('./models/questionModel');

const questionsArray = [
  { question: 'warm and comfortable', answer: 'cozy' },
  { question: 'forgive me', answer: 'sorry' },
  { question: 'largest mammal?', answer: 'Whale' },
  
];

async function insertQuestions() {
  try {
    await Question.insertMany(questionsArray);
    console.log('Questions inserted successfully');
  } catch (err) {
    console.error('Error inserting questions:', err);
  } finally {
    mongoose.connection.close();
  }
}

insertQuestions();
