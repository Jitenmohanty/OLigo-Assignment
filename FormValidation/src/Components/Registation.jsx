import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

const Registation = () => {
    const [selectedHobbies, setSelectedHobbies] = useState([]);
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


      const handleSubmit = (e) => {
        e.preventDefault();
    
        // Custom validation: At least two hobbies must be selected
        if (selectedHobbies.length < 2) {
          toast.error("Please select at least two hobbies!");
          return;
        }
    
        // Continue with the form submission logic
        console.log("Form submitted!");
      };
  return (
    <div className="flex flex-col md:flex-row m-4 border rounded-lg bg-white">
      <motion.div
        initial={{ x: "-100%" }} 
        animate={{ x: 0 }} 
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="w-full md:w-1/2"
      >
        <img
          className="w-full h-full rounded-lg hidden md:block"
          src="https://media.istockphoto.com/id/1281150061/vector/register-account-submit-access-login-password-username-internet-online-website-concept.jpg?s=612x612&w=0&k=20&c=9HWSuA9IaU4o-CK6fALBS5eaO1ubnsM08EOYwgbwGBo="
          alt=""
        />
      </motion.div>

      <div className="container mx-auto p-8 bg-orange-200 rounded-lg shadow-md w-full md:w-1/2">
        <div className="flex justify-between">
        <h1 className="text-3xl font-bold mb-6">Registration Form</h1>
        <button onClick={()=>navigate('/user-data')} className="bg-black text-white rounded-md font-bold mb-6 p-2">Display All User</button>
        </div>
        <form action="/submit" method="post" encType="multipart/form-data" onSubmit={handleSubmit}>
          <div className="flex flex-wrap -mx-4 mb-4 font-semibold">
            <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-600"
              >
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 p-2 border rounded-md w-full"
                required
              />
            </div>
            <div className="w-full md:w-1/2 px-4">
              <label
                htmlFor="dob"
                className="block text-sm font-medium text-gray-600"
              >
                Date of Birth:
              </label>
              <input
                type="date"
                id="dob"
                name="dob"
                className="mt-1 p-2 border rounded-md w-full"
                required
              />
            </div>
          </div>

          {/* Gender */}
          <div className="mb-4 flex">
            <label className="block text-sm font-medium text-gray-600">
              Gender:
            </label>
            <div className="mx-4">
              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                required
              />
              <label htmlFor="male" className="ml-1">
                Male
              </label>
            </div>
            <div className="mx-1">
              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                required
              />
              <label htmlFor="female" className="ml-1">
                Female
              </label>
            </div>
            <div className="mx-1">
              <input
                type="radio"
                id="other"
                name="gender"
                value="other"
                required
              />
              <label htmlFor="other" className="ml-1">
                Other
              </label>
            </div>
          </div>

          {/* Hobbies */}
          <div className="mb-4 flex">
            <label className="block text-sm font-medium text-gray-600">
              Hobbies:
            </label>
            <div className="mx-1 ml-2">
              <input
                type="checkbox"
                id="Reading"
                name="hobbies"
                value="Reading"
                onChange={handleHobbyChange}
              />
              <label htmlFor="hobby1" className="ml-1">
                Reading
              </label>
            </div>
            <div className="mx-1">
              <input
                type="checkbox"
                id="Dancing"
                name="hobbies"
                value="Dancing"
                onChange={handleHobbyChange}
              />
              <label htmlFor="hobby2" className="ml-1">
                Dancing
              </label>
            </div>
            <div className="mx-1">
              <input
                type="checkbox"
                id="Skating"
                name="hobbies"
                value="Skating"
                onChange={handleHobbyChange}
              />
              <label htmlFor="hobby3" className="ml-1">
                Skating
              </label>
            </div>
            <div className="mx-1">
              <input
                type="checkbox"
                id="Cycling"
                name="hobbies"
                value="Cycling"
                onChange={handleHobbyChange}
              />
              <label htmlFor="hobby4" className="ml-1">
                Cycling
              </label>
            </div>
          </div>

          {/* State Selector */}
          <div className="mb-4">
            <label
              htmlFor="state"
              className="block text-sm font-medium text-gray-600 "
            >
              State:
            </label>
            <select
              id="state"
              name="state"
              className="mt-1 p-2 border rounded-md w-full"
              required
            >
              <option value="state1">Odisha</option>
              <option value="state2">Panjab 2</option>
              <option value="state3">Hariyana 3</option>
              <option value="state3">Moharastra 3</option>
              {/* Add more options as needed */}
            </select>
          </div>

          {/* Upload PDF */}
          <div className="mb-4">
            <label
              htmlFor="pdf"
              className="block text-sm font-medium text-gray-600"
            >
              Upload PDF:
            </label>
            <input
              type="file"
              id="pdf"
              name="pdf"
              className="mt-1 p-2 border rounded-md w-full  bg-white"
              onChange={handleFile}
              required
            />
             <p className="text-xs text-gray-500 mt-1">Only .docx files are allowed.</p>
          </div>

          {/* Address */}
          <div className="mb-4">
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-600"
            >
              Address:
            </label>
            <textarea
              id="address"
              name="address"
              rows="4"
              className="mt-1 p-2 border rounded-md w-full"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-white text-black p-2 rounded-md"
            >
              Reset All
            </button>
            <button
              type="submit"
              className="bg-yellow-400 text-black p-2 rounded-md ml-2"
            >
              Submit Form
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registation;