const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const questionsRouter = require('./routes/questions');
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 3001;
app.use(express.json());
app.use(cors());

// Middleware
async function startServer() {
  // Middleware
  app.use(bodyParser.json());

  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log('Connected to MongoDB Atlas');

    // Routes
    app.use('/api/questions', questionsRouter);

    // Start the server
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error('Error connecting to MongoDB Atlas:', error);
  }
}

// Call the async function to start the server
startServer();