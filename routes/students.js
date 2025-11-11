const express = require('express');
const router = express.Router();

let students = [
    { id: 1, name: 'Ahmed Ali', age: 20, course: 'Computer Science' },
    { id: 2, name: 'Fatima Hassan', age: 19, course: 'Engineering' }
];

router.get('/', (req, res) => {
    res.json(students);
});

router.get('/:id', (req, res) => {
    const student = students.find(s => s.id === parseInt(req.params.id));
    if (!student) {
        return res.status(404).json({ message: 'Student not found' });
    }
    res.json(student);
});

router.post('/', (req, res) => {
    if (!req.body.name || !req.body.age || !req.body.course) {
        return res.status(400).json({ message: 'Missing required fields' });
    }
    const newStudent = { id: students.length > 0 ? Math.max(...students.map(s => s.id)) + 1 : 1, name: req.body.name, age: req.body.age, course: req.body.course };
    students.push(newStudent);
    res.status(201).json(newStudent);
});

router.put('/:id', (req, res) => {
    const student = students.find(s => s.id === parseInt(req.params.id));
    if (!student) {
        return res.status(404).json({ message: 'Student not found' });
    }
    if (req.body.name) student.name = req.body.name;
    if (req.body.age) student.age = req.body.age;
    if (req.body.course) student.course = req.body.course;
    res.json(student);
});

router.delete('/:id', (req, res) => {
    const index = students.findIndex(s => s.id === parseInt(req.params.id));
    if (index === -1) {
        return res.status(404).json({ message: 'Student not found' });
    }
    const deletedStudent = students.splice(index, 1);
    res.json(deletedStudent[0]);
});

module.exports = router;