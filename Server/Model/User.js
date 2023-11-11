import mongoose from 'mongoose';

const User = new mongoose.Schema({
  name: {
    type: String, // Use String with an uppercase "S"
  },
  dob: {
    type: Date,
  },
  gender: {
    type: String, // Use String with an uppercase "S"
  },
  hobbies: {
    type: [String],
    default: [],
  },
  state: {
    type: String, // Use String with an uppercase "S"
  },
  address: {
    type: String, // Use String with an uppercase "S"
  },
  file: {
    type: Buffer,
    contentType: String,
    required: true,
  }
}, { timestamps: true });

export default mongoose.model('user', User);
