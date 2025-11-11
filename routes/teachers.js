const express = require('express');
const router = express.Router();

let teachers = [
    { id: 1, name: 'Dr. Mohammed', subject: 'Mathematics', experience: 10 },
    { id: 2, name: 'Prof. Layla', subject: 'Physics', experience: 8 }
];

router.get('/', (req, res) => {
    res.json(teachers);
});

router.get('/:id', (req, res) => {
    const teacher = teachers.find(t => t.id === parseInt(req.params.id));
    if (!teacher) {
        return res.status(404).json({ message: 'Teacher not found' });
    }
    res.json(teacher);
});

router.post('/', (req, res) => {
    if (!req.body.name || !req.body.subject || !req.body.experience) {
        return res.status(400).json({ message: 'Missing required fields' });
    }
    const newTeacher = {
        id: teachers.length > 0 ? Math.max(...teachers.map(t => t.id)) + 1 : 1,
        name: req.body.name,
        subject: req.body.subject,
        experience: req.body.experience
    };
    teachers.push(newTeacher);
    res.status(201).json(newTeacher);
});

router.put('/:id', (req, res) => {
    const teacher = teachers.find(t => t.id === parseInt(req.params.id));
    if (!teacher) {
        return res.status(404).json({ message: 'Teacher not found' });
    }
    if (req.body.name) teacher.name = req.body.name;
    if (req.body.subject) teacher.subject = req.body.subject;
    if (req.body.experience) teacher.experience = req.body.experience;
    res.json(teacher);
});

router.delete('/:id', (req, res) => {
    const index = teachers.findIndex(t => t.id === parseInt(req.params.id));
    if (index === -1) {
        return res.status(404).json({ message: 'Teacher not found' });
    }
    const deletedTeacher = teachers.splice(index, 1);
    res.json(deletedTeacher[0]);
});

module.exports = router;