import React from 'react'
import Modal from "react-modal";

const CommonModal = (props) => {
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
    <>
    <Modal style={customStyles} isOpen={props.isOpen} onRequestClose={props.onClose} >
{props.children}
        </Modal></>
  )
  
}

export default CommonModal
