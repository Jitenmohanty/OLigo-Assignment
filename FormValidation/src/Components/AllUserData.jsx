import React from "react";
import { motion } from "framer-motion";

const AllUserData = () => {
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
            <tr className="bg-slate-200 h-24 sm:text-lg text-md">
              <td className="px-4 py-2 text-center">John Doe</td>
              <td className="px-4 py-2 text-center">1990-01-01</td>
              <td className="px-4 py-2 text-center">Male</td>
              <td className="px-4 py-2 text-center">Reading, Coding</td>
              <td className="px-4 py-2 text-center">California</td>
              <td className="px-4 py-2 text-center">123 Main St</td>
              <td className="px-4 py-2 text-center">
                {/* Action buttons go here */}
                <button className="bg-blue-500 text-white px-2 py-1 rounded">
                  Download
                </button>
              </td>
            </tr>
          </motion.tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUserData;
