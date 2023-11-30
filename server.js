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

// Additional CRUD endpoints using the controller
app.get("/", (req, res) => {
  return res.status(200);
});
app.post("/api/login", controller.loginUser);

// app.get("/api/posts", controller.getAllPosts);
// app.get("/api/posts/:id", controller.getPostById);
// app.post("/api/posts", controller.createPost);
// app.put("/api/posts/:id", controller.updatePost);
// app.delete("/api/posts/:id", controller.deletePost);

// Start Express server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
