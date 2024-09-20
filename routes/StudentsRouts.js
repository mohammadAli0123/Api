const express = require('express');
const router = express.Router();
const Student = require("../models/Student");

// POST route to add a new student
router.post('/add', async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(201).json({ message: 'Student added successfully!', student });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add student' });
  }
});

module.exports = router;
