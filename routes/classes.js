const express = require('express');
const router = express.Router();

let classes = [
    { id: 1, name: 'Class A', instructor: 'Dr. Mohammed', schedule: 'Monday 10:00-12:00', capacity: 30 },
    { id: 2, name: 'Class B', instructor: 'Prof. Layla', schedule: 'Tuesday 14:00-16:00', capacity: 25 }
];

router.get('/', (req, res) => {
    res.json(classes);
});

router.get('/:id', (req, res) => {
    const classData = classes.find(c => c.id === parseInt(req.params.id));
    if (!classData) {
        return res.status(404).json({ message: 'Class not found' });
    }
    res.json(classData);
});

router.post('/', (req, res) => {
    if (!req.body.name || !req.body.instructor || !req.body.schedule || !req.body.capacity) {
        return res.status(400).json({ message: 'Missing required fields' });
    }
    const newClass = {
        id: classes.length > 0 ? Math.max(...classes.map(c => c.id)) + 1 : 1,
        name: req.body.name,
        instructor: req.body.instructor,
        schedule: req.body.schedule,
        capacity: req.body.capacity
    };
    classes.push(newClass);
    res.status(201).json(newClass);
});

router.put('/:id', (req, res) => {
    const classData = classes.find(c => c.id === parseInt(req.params.id));
    if (!classData) {
        return res.status(404).json({ message: 'Class not found' });
    }
    if (req.body.name) classData.name = req.body.name;
    if (req.body.instructor) classData.instructor = req.body.instructor;
    if (req.body.schedule) classData.schedule = req.body.schedule;
    if (req.body.capacity) classData.capacity = req.body.capacity;
    res.json(classData);
});

router.delete('/:id', (req, res) => {
    const index = classes.findIndex(c => c.id === parseInt(req.params.id));
    if (index === -1) {
        return res.status(404).json({ message: 'Class not found' });
    }
    const deletedClass = classes.splice(index, 1);
    res.json(deletedClass[0]);
});

module.exports = router;