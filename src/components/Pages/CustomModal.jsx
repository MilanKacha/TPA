import React from "react";
import Modal from "react-modal";

const CustomisedModal = ({
  height,
  isOpen,
  onRequestClose,
  contentLabel,
  children,
}) => {
  const customStyles = {
    content: {
      width: "50%", // Set your desired width here
      height: height,
      margin: "auto", // Center the modal horizontally
      backgroundColor: "white",
      borderRadius: "10px",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.12)",
    },
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={contentLabel}
      style={customStyles}
      ariaHideApp={false} // Disable the app element warning
    >
      {children}
    </Modal>
  );
};

export default CustomisedModal;
