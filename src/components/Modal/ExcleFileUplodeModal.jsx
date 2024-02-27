import React, { useState } from "react";
import Modal from "react-modal";
import axios from "axios";
import moment from "moment";
import { motion } from "framer-motion";

Modal.setAppElement("#root");

const ExcleFileUplodeModal = ({ isOpen, onClose }) => {
  const [file, setFile] = useState(null);
  const [date, setDate] = useState(null);
  const [fileError, setFileError] = useState(false);
  const [dateError, setDateError] = useState(false);

  const convertDateFormat = (inputDate) => {
    const inputDateFormat = moment(inputDate, "YYYY-MM-DD", true);
    if (!inputDateFormat.isValid()) {
      return "Invalid date";
    }
    return inputDateFormat.format("DD-MM-YYYY");
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    setFileError(false);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
    setDateError(false);
  };

  const handleUpload = async () => {
    if (!file) {
      setFileError(true);
      return;
    }
    if (!date) {
      setDateError(true);
      return;
    }

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("PDate", date);
      // console.log(date);

      const response = await axios.post(
        "http://172.21.10.11:4890/kbh/AddSAPDump",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("File uploaded:", response.data);
      // Display success toast
      if (response.data === "true") {
        alert("File uploaded successfully!");
      } else {
        alert("Failed to upload file. Please try again.");
      }
      onClose();
      console.log(formData);
    } catch (error) {
      console.error("Error uploading file:", error);
      // Display error toast
      alert("Failed to upload file. Please try again.");
    }
  };

  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0)",
    },
    content: {
      width: "30%",
      height: "35%",
      margin: "auto",
      overflow: "hidden",
    },
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} style={customStyles}>
      <div>
        <div className="grid grid-cols-1">
          <label
            htmlFor="fileInput"
            className="block text-sm font-medium text-gray-700"
          >
            Upload File
          </label>
          <input
            type="file"
            id="fileInput"
            onChange={handleFileChange}
            className={
              "border border-gray-300 rounded-md px-1 py-1 focus:outline-none focus:border-blue-500 " +
              (fileError ? "border-red-500" : "")
            }
          />
          {fileError && (
            <p className="text-red-500 text-sm">Please select a file</p>
          )}
          <label
            htmlFor="dateInput"
            className="block text-sm font-medium text-gray-700"
          >
            Select Date
          </label>
          <input
            type="date"
            id="dateInput"
            value={date}
            onChange={handleDateChange}
            className={
              "border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:border-blue-500 " +
              (dateError ? "border-red-500" : "")
            }
          />
          {dateError && (
            <p className="text-red-500 text-sm">Please select a date</p>
          )}
        </div>
        <div className="mt-3 flex justify-center space-x-3">
          <button
            onClick={handleUpload}
            className="bg-[#4747d7] text-white text-[15px] py-[5px] px-4 rounded-md"
          >
            Upload
          </button>
          <button
            onClick={onClose}
            className="bg-[#ee5c5c] text-white text-[15px] py-[5px] px-4 rounded-md"
          >
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ExcleFileUplodeModal;
