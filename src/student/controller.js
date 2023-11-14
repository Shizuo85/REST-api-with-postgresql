const pool = require("../../db");
const queries = require("./queries");

exports.getStudents = (req, res) => {
    pool.query(queries.getStudents, (err, results) => {
        if (err) throw err;
        res.status(200).json(results.rows);
    });
};

exports.getStudentById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getStudentById, [id], (err, results) => {
        if (err) throw err;
        res.status(200).json(results.rows);
    });
};

exports.addStudent = (req, res) => {
    let { name, email, age, dob } = req.body;
    console.log(name, age, dob, email);
    pool.query(queries.checkEmailExists, [email], (err, results) => {
        if (results.rows.length) {
            return res.send("Email Exists");
        }

        pool.query(
            queries.addStudent,
            [name, email, age, dob],
            (err, results) => {
                if (err) throw err;
                res.status(201).json("student created successfully");
            }
        );
    });
};

exports.removeStudent = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getStudentById, [id], (err, results) => {
        if (!results.rows.length) {
            return res.send("Student does not exist");
        }

        pool.query(queries.removeStudent, [id], (err, results) => {
            res.status(200).json("Student removed successfully");
        });
    });
};

exports.updateStudent = (req, res) => {
    const id = parseInt(req.params.id);
    const { name } = req.body;
    pool.query(queries.getStudentById, [id], (err, results) => {
        if (!results.rows.length) {
            return res.send("Student does not exist");
        }

        pool.query(queries.updateStudent, [id, name], (err, results) => {
            if (err) throw err
            res.status(200).json("Student updated successfully");
        });
    });
};