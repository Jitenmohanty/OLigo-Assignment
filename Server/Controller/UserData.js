import User from "../Model/User.js";
import userData from "../Model/User.js";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import fs from "fs";

// Multer setup

const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now());
  },
});

const upload = multer({ storage: storage });

export const getAllUsers = async (req, res, next) => {
  try {
    const users = await userData.find();
    res.json(users);
  } catch (error) {
    return res.json({
      msg: `Error on fetching notes: ${error.message}`,
      status: false,
    });
  }
};

export const addUsers = async (req, res, next) => {
  try {
    const { name, dob, gender, hobbies, state, address } = req.body;
    // const { originalname, mimetype, buffer } = req.file;
    console.log(req.body);
    console.log(req.file);
    const file = req.file.path;
    console.log(file);

    const user = new userData({
      name,
      dob,
      gender,
      hobbies,
      state,
      file: file,
      address,
    });

    const savedUser = await user.save();
    res.json({ status: true, user: savedUser });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ status: false, error: "Error adding user to the database" });
  }
};

// export const downloadFile = async (req, res) => {
//   const { id } = req.params;
//   const item = await userData.findById(id);
//   if (!item) {
//     return next(new Error("No item found"));
//   }
//   const file = item.file;
//   const filePath = path.join(__dirname, `../${file}`);
//   res.download(filePath);
// };

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const downloadFile = async (req, res, next) => {
  const { id } = req.params;

  try {
    const item = await userData.findById(id);

    if (!item) {
      return next(new Error("No item found"));
    }
    console.log(item)
    const file = item.file;
    const filePath = path.join(__dirname, `../${file}`);
    res.download(filePath);
  } catch (error) {
    console.error("Error downloading file:", error);
    res.status(500).send("Internal Server Error");
  }
};

// Use multer middleware in the route for file handling
export const addUsersWithFile = [
  upload.single("file"), // 'file' should match the name attribute in your form's file input
  addUsers, // Call the actual controller after multer has processed the file
];
