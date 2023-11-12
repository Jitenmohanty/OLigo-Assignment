import mongoose from 'mongoose';

const User = new mongoose.Schema({
  name: {
    type: String, // Use String with an uppercase "S"
    required: true,

  },
  dob: {
    type: Date,
    required: true,

  },
  gender: {
    type: String, // Use String with an uppercase "S"
    required: true,

  },
  hobbies: {
    type: [String],
    default: [],
    required: true,

  },
  state: {
    type: String, // Use String with an uppercase "S"
  },
  address: {
    type: String, // Use String with an uppercase "S"
    required: true,

  },
  file:{
    type:String,
    required: true,
  } 
}, { timestamps: true });

export default mongoose.model('user', User);
