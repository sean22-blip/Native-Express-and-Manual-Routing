const express = require('express');
const app = express();
const port = 8000;

const courses = require('../EX-2/course');
const logger = require('./logger');
const validateQuery = require('./validateQuery');

app.use(logger);
app.get('/departments/:dept/courses', validateQuery, (req, res) => {
    const { dept } = req.params;
    const { level, minCredits, maxCredits, semester, instructor } = req.query;

    let results = courses;

    results = results.filter(c => c.department.toLowerCase() === dept.toLowerCase());

    if (level !== undefined) {
        results = results.filter(c => c.level.toLowerCase() === level.toLowerCase());
    }

    if (minCredits !== undefined) {
        results = results.filter(c => c.credits >= Number(minCredits));
    }

    if (maxCredits !== undefined) {
        results = results.filter(c => c.credits <= Number(maxCredits));
    }

    if (semester !== undefined) {
        results = results.filter(c => c.semester.toLowerCase() === semester.toLowerCase());
    }

    if (instructor !== undefined) {
        results = results.filter(c => c.instructor.toLowerCase().includes(instructor.toLowerCase()));
    }

    if (results.length === 0) {
        return res.status(404).json({
            results: [],
            meta: { total: 0 },
            message: "No courses found"
        });
    }

    return res.status(200).json({
        results,
        meta: { total: results.length }
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});