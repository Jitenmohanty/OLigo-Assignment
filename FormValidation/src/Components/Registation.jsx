import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';

const Registration = () => {
  const [selectedHobbies, setSelectedHobbies] = useState([]);
  const [userData, setUserData] = useState({
    name: '',
    dob: '',
    gender: '',
    hobbies: [],
    state: '',
    file: null,
    address: '',
  });

  const navigate = useNavigate();

  const handleFile = (e) => {
    const allowedFileTypes = ['docx'];
    const fileInput = e.target;
    const selectedFile = fileInput.files[0];

    if (selectedFile) {
      const selectedFileType = selectedFile.name.split('.').pop().toLowerCase();

      console.log('Selected file type:', selectedFileType);

      if (allowedFileTypes.includes(selectedFileType)) {
        console.log('File type is valid:', selectedFileType);
        setUserData((prevUserData) => ({
          ...prevUserData,
          file: selectedFile,
        }));
      } else {
        console.error('Invalid file type!');
        toast.error('Invalid file type!');
        fileInput.value = '';
      }
    }
  };

  const handleHobbyChange = (e) => {
    const selectedHobby = e.target.value;
    const updatedHobbies = [...selectedHobbies];

    if (selectedHobbies.includes(selectedHobby)) {
      // Remove hobby if already selected
      const index = updatedHobbies.indexOf(selectedHobby);
      updatedHobbies.splice(index, 1);
    } else {
      // Add hobby if not selected
      updatedHobbies.push(selectedHobby);
    }

    setSelectedHobbies(updatedHobbies);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Custom validation: At least two hobbies must be selected
    if (selectedHobbies.length < 2) {
      toast.error("Please select at least two hobbies!");
      return;
    }

    // Continue with the form submission logic
    console.log("Form submitted!", userData);
  };

  return (
    <div className="flex flex-col md:flex-row m-4 border rounded-lg bg-white">
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="w-full md:w-1/2"
      >
        {/* Your existing image or content */}
      </motion.div>

      <div className="container mx-auto p-8 bg-orange-200 rounded-lg shadow-md w-full md:w-1/2">
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold mb-6">Registration Form</h1>
          <button onClick={() => navigate('/user-data')} className="bg-black text-white rounded-md font-bold mb-6 p-2">
            Display All User
          </button>
        </div>
        <form action="/submit" method="post" encType="multipart/form-data" onSubmit={handleSubmit}>
          {/* ... (unchanged code) */}

          {/* Submit Button */}
          <div className="flex justify-end">
            <button type="reset" className="bg-white text-black p-2 rounded-md">
              Reset All
            </button>
            <button type="submit" className="bg-yellow-400 text-black p-2 rounded-md ml-2">
              Submit Form
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
