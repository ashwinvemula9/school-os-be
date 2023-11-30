// server.js
const express = require("express");
const path = require("path");
const controller = require("./controller");
const client = require("./connection");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 7000;

app.use(cors());
// Use middleware to handle JSON data
app.use(express.json());

app.post("/api/login", controller.loginUser);
app.get("/api/entries/:collection", controller.allEntries);
app.post("/api/:collection/createuser", controller.createUser);
app.get("/api/allteachers/:id", controller.getAllTeacherDataOnAdmin);
app.get("/api/alladmins/:id", controller.getAllAdminsDataOnSys);
app.get("/api/allparents/:id", controller.getAllParentDataOnTeacher);

// Start Express server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
