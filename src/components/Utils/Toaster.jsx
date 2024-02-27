import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toaster = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 9999,
      }}
    >
      <ToastContainer autoClose={1000} />
    </div>
  );
};

export default Toaster;
