import userData from "../Model/User.js";
import multer from "multer";

// Multer setup
// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });

const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now());
  },
});

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
      file:file,
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

// Use multer middleware in the route for file handling
export const addUsersWithFile = [
  upload.single("file"), // 'file' should match the name attribute in your form's file input
  addUsers, // Call the actual controller after multer has processed the file
];
