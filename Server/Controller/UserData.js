import userData from "../Model/User.js";
import multer from "multer";

// Multer setup
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

export const getAllUsers = async (req, res, next) => {
  try {
    const notes = await userData.find({ user: req.user.id });
    res.json(notes);
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

    // Assuming you are using a file input field named 'file' in your form
    const file = req.file;

    // Convert the date of birth to a JavaScript Date object
    const dobDate = new Date(dob);

    const user = new userData({
      name,
      dob: dobDate,
      gender,
      hobbies,
      state,
      address,
      file: {
        data: file.buffer,
        contentType: file.mimetype,
      },
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

// Use multer middleware in the route for file handling
export const addUsersWithFile = [
  upload.single("file"), // 'file' should match the name attribute in your form's file input
  addUsers, // Call the actual controller after multer has processed the file
];
