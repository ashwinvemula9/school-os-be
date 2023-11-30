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

const allEntries = async (req, res) => {
  try {
    const collectionName = req.params.collection;
    const database = client.db("school_os");
    const collection = database.collection(collectionName);

    console.log(collectionName);

    // Use findOne to find a single document based on the email
    const result = await collection.find({}).toArray();

    if (result) {
      // User found
      console.log(result);
      res.status(200).json(result);
    } else {
      // User not found
      console.log("something went wrong");
      res.status(404).json({ error: "Something went wrong" });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const createUser = async (req, res) => {
  try {
    const body = req.body;

    const collectionName = req.params.collection;
    const database = client.db("school_os");
    const collection = database.collection(`${collectionName}s`);

    console.log(collectionName);

    // Use findOne to find a single document based on the email
    const result = await collection.insertOne(body);

    if (result) {
      // User found
      console.log(result);
      res.status(200).json(result);
    } else {
      // User not found
      console.log("something went wrong");
      res.status(404).json({ error: "Something went wrong" });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getAllAdminsDataOnSys = async (req, res) => {
  try {
    const id = req.params.id;

    const database = client.db("school_os");
    const collection = database.collection("admins");

    const result = await collection.find({ sys_id: id }).toArray();
    if (result) {
      res.status(200).json(result);
    } else {
      // User not found
      console.log("something went wrong");
      res.status(404).json({ error: "Something went wrong" });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getAllTeacherDataOnAdmin = async (req, res) => {
  try {
    const id = req.params.id;

    const database = client.db("school_os");
    const collection = database.collection("teachers");

    const result = await collection.find({ adminId: id }).toArray();
    console.log(result);
    if (result) {
      res.status(200).json(result);
    } else {
      // User not found
      console.log("something went wrong");
      res.status(404).json({ error: "Something went wrong" });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getAllParentDataOnTeacher = async (req, res) => {
  try {
    const id = req.params.id;

    const database = client.db("school_os");
    const collection = database.collection("parents");

    const result = await collection.find({ teacherId: id }).toArray();
    console.log(result);
    if (result) {
      res.status(200).json(result);
    } else {
      // User not found
      console.log("something went wrong");
      res.status(404).json({ error: "Something went wrong" });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  loginUser,
  allEntries,
  createUser,
  getAllParentDataOnTeacher,
  getAllTeacherDataOnAdmin,
  getAllAdminsDataOnSys,
};
