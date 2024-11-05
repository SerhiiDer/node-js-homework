const express = require('express');
const router = express.Router();
const StudentService = require('../services/StudentService');

router.post('/students', async (req, res) => {
   const { name, age } = req.body;
   try {
       const newStudent = await StudentService.createStudent(name, age);
       res.status(200).json(newStudent);
   } catch (err) {
       res.status(500).json({ error: err.message });
   }
});

module.exports = router;