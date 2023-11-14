const { Router } = require("express");
const studentController = require("./controller");
const router = Router();


router.get("/", studentController.getStudents);
router.get("/:id", studentController.getStudentById);
router.post("/", studentController.addStudent);
router.put("/:id", studentController.updateStudent);
router.delete("/:id", studentController.removeStudent);

module.exports = router;
