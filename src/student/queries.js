exports.getStudents = "SELECT * FROM students";

exports.getStudentById = "SELECT * FROM students WHERE id = $1";

exports.checkEmailExists = "SELECT s FROM students s WHERE s.email = $1"

exports.addStudent = "INSERT INTO students (name, email, age, dob) VALUES ($1, $2, $3, $4)"

exports.removeStudent = "DELETE FROM students WHERE id = $1";

exports.updateStudent = "UPDATE students SET name = $2 WHERE id = $1";