const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv'); // Require dotenv
const StudentRoutes = require('./routes/StudentsRouts');

const app = express();
dotenv.config();
// Middleware to parse JSON data
app.use(express.json());

// Use CORS
app.use(cors());

// MongoDB connection using the URI from environment variables
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Failed to connect to MongoDB', err);
});

app.use('/api/students', StudentRoutes);
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
