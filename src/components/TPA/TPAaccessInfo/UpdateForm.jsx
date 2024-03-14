import React, { useState } from "react";

const UpdateForm = ({ onClose, data }) => {
  const [updateData, setUpdatedData] = useState({ userName: data.User_Name, password: data.Password });
  

  const handleChange = (e) => {
  
    const { name, value } = e.target;

    setUpdatedData({ ...updateData, [name]: value });
  };
  // console.log(data);
  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log(updateData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div className="grid grid-cols-1">
          <label
            htmlFor="userName"
            className="block text-sm font-medium text-gray-700"
          >
            UserName
          </label>
          <input
            type="text"
            id="userName"
            name="userName"
            value={updateData.userName}
            onChange={handleChange}
            className={
              "border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:border-blue-500 " 
            }
          />
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="text"
            id="password"
            name="password"
            value={updateData.password}
            onChange={handleChange}
            className={
              "border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:border-blue-500 " 
            }
          />
        
        </div>
        <div className="mt-3 flex justify-center space-x-3">
          <button
            type="submit"
            className="bg-[#4747d7] text-white text-[15px] py-[5px] px-4 rounded-md"
          >
            Update
          </button> 
          <button
            onClick={onClose}
            className="bg-[#ee5c5c] text-white text-[15px] py-[5px] px-4 rounded-md"
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
};

export default UpdateForm;
