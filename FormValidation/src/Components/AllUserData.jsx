import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const AllUserData = () => {
  const [formData, setFormData] = useState([]);

  function formatDate(inputDate) {
    const originalDate = new Date(inputDate);
    const formattedDate = `${originalDate.getFullYear()}-${(
      originalDate.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}-${originalDate.getDate().toString().padStart(2, "0")}`;

    return formattedDate;
  }

  const downloadFile = async (id) => {
    try {
      const res = await axios.get(`/api/download/${id}`, {
        responseType: "blob",
      });
      const blob = new Blob([res.data], { type: res.data.type });
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = "file.docx";
      link.click();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("/api/allUser");
        setFormData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching form data:", error);
      }
    }

    fetchData();
  }, []);
  return (
    <div className="bg-white min-h-screen p-4">
      <h2 className="text-2xl font-bold mb-4 flex justify-center uppercase text-purple-500">
        View All User
      </h2>

      <div className="overflow-x-auto mx-4">
        <table className="table-auto w-full">
          <thead>
            <tr className="bg-purple-500 text-white font-bold h-16 text-lg">
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">DOB</th>
              <th className="px-4 py-2">Gender</th>
              <th className="px-4 py-2">Hobbies</th>
              <th className="px-4 py-2">State</th>
              <th className="px-4 py-2">Address</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <motion.tbody
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
          >
            {formData &&
              formData.map((data) => (
                <tr
                  className="bg-slate-200 h-24 sm:text-lg text-md"
                  key={data.createdAt}
                >
                  <td className="px-4 py-2 text-center">{data.name}</td>
                  <td className="px-4 py-2 text-center">
                    {formatDate(data.dob)}
                  </td>
                  <td className="px-4 py-2 text-center">{data.gender}</td>
                  <td className="px-4 py-2 text-center">{data.hobbies}</td>
                  <td className="px-4 py-2 text-center">{data.state}</td>
                  <td className="px-4 py-2 text-center">{data.address}</td>
                  <td className="px-4 py-2 text-center">
                    <button
                      onClick={() => downloadFile(data._id)}
                      className="bg-blue-500 text-white px-2 py-1 rounded"
                    >
                      Download Resume
                    </button>
                  </td>
                </tr>
              ))}
          </motion.tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUserData;
