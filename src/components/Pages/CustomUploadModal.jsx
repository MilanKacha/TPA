import Modal from "react-modal";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const CustomUploadModal = ({ isOpen, onClose, bgColor }) => {
  const navigate = useNavigate();
  const [appElement, setAppElement] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [pdfPreview, setPdfPreview] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    localStorage.setItem("storedFile", JSON.stringify(file));
    console.log(selectedFile);
    // Generate a preview for PDF files
    if (file && file.type === "application/pdf") {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPdfPreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPdfPreview("");
    }
  };
  const handleUpload = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile);
      // console.log(selectedFile);

      const token = localStorage.getItem("token");

      fetch("http://172.21.10.68:4000/autofillform", {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("API response:", data);

          // localStorage.setItem("storedFile", pdfPreview);

          localStorage.setItem("storedResponseData", JSON.stringify(data));

          const storedResponseDataString =
            localStorage.getItem("storedResponseData");

          const storedResponseData = JSON.parse(storedResponseDataString);
          navigate("/form");
          toast.success("File uploaded successfully");
          if (storedResponseData.Aadhaar_No) {
            localStorage.setItem("fileuplodedAdharcard", pdfPreview);
          } else if (storedResponseData.Pan_No) {
            localStorage.setItem("fileuplodedPancard", pdfPreview);
          }
        })

        .catch((error) => {
          console.error("Error uploading file:", error);
          toast.error("Error uploading file");
        });
    }
  };

  useEffect(() => {
    Modal.setAppElement(appElement);
  }, [appElement]);

  return (
    <div ref={(el) => setAppElement(el)}>
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        className={`absolute inset-1/4 bg-${bgColor} opacity-80 p-4  rounded-md text-white ${
          pdfPreview ? "h-[400px]" : "h-[170px]"
        }`}
        overlayClassName="fixed inset-0 bg-opacity-50 bg-black">
        <h2>Upload Document</h2>
        <div>
          Please upload the document here.
          {!pdfPreview && (
            <input
              type="file"
              onChange={handleFileChange}
              className="rounded-md ml-[8%] bg-[#C3C5D0] text-black"
            />
          )}
          {pdfPreview && (
            <iframe
              title="PDF Preview"
              src={pdfPreview}
              width="100%"
              height="220px"
              style={{ marginTop: "10px", borderRadius: "5px" }}
            />
          )}
        </div>
        <div className="mt-3 flex justify-center">
          <button
            onClick={handleUpload}
            className="bg-green-600 hover:bg-green-500 px-6 py-2 rounded-lg">
            Upload
          </button>
          <button
            onClick={() => {
              onClose();
              setPdfPreview("");
            }}
            className="bg-red-600 hover:bg-red-500 ml-6 px-6 py-2 rounded-lg">
            Cancel
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default CustomUploadModal;
