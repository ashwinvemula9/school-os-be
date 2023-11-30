const client = require("./connection");

const loginUser = async (req, res) => {
  try {
    const body = req.body; // Assuming email is passed as a URL parameter
    const database = client.db("school_os");
    const collectionName =
      body.cat === "system admin" ? "systemadmin" : `${body.cat}s`;
    const collection = database.collection(collectionName);

    console.log(body);

    // Use findOne to find a single document based on the email
    const result = await collection.findOne({ email: body.email });

    if (result) {
      // User found
      console.log(result);
      res.status(200).json(result);
    } else {
      // User not found
      console.log("User not found");
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// const getAllPosts = (req, res) => {
//   const postId = parseInt(req.params.id);
//   // Replace with your database fetching logic
//   // Example: const post = yourDatabase.getPostById(postId);
//   // const post = client.collection("systemadmin").ge;/
//   const post = {
//     id: "sd",
//   };
//   if (post) {
//     res.json(post);
//   } else {
//     res.status(404).json({ error: "Post not found" });
//   }
// };

// const getPostById = (req, res) => {
//   const postId = parseInt(req.params.id);
//   // Replace with your database fetching logic
//   // Example: const post = yourDatabase.getPostById(postId);

//   if (post) {
//     res.json(post);
//   } else {
//     res.status(404).json({ error: "Post not found" });
//   }
// };

// const createPost = async (req, res) => {
//   const newPost = req.body;
//   // Replace with your database creation logic
//   // Example: const postId = yourDatabase.createPost(newPost);
//   // const db = client.db("school_os");
//   const database = client.db("school_os"); // Replace with your actual database name
//   const collection = database.collection("systemadmin"); // Replace with your actual collection name
//   const document = { name: "bla bla" };
//   const result = await collection.insertOne(document);
//   console.log(client);
//   // const database = client.db("school_os");
//   // const collection = database.collection("systemadmin");

//   // Insert a document
//   // const result = collection.insertOne({
//   //   key: "value",
//   //   // Add your document fields and values here
//   // });

//   res.status(201).json(result);
// };

// const updatePost = (req, res) => {
//   const postId = parseInt(req.params.id);
//   const updatedPostData = req.body;
//   // Replace with your database update logic
//   // Example: const updatedPost = yourDatabase.updatePost(postId, updatedPostData);

//   if (updatedPost) {
//     res.json(updatedPost);
//   } else {
//     res.status(404).json({ error: "Post not found" });
//   }
// };

// const deletePost = (req, res) => {
//   const postId = parseInt(req.params.id);
//   // Replace with your database delete logic
//   // Example: const deletedPost = yourDatabase.deletePost(postId);

//   if (deletedPost) {
//     res.json(deletedPost);
//   } else {
//     res.status(404).json({ error: "Post not found" });
//   }
// };

module.exports = {
  // getAllPosts,
  // getPostById,
  // createPost,
  // updatePost,
  // deletePost,
  loginUser,
};
