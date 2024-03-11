import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { IoIosLogOut } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { IoMdArrowDroprightCircle } from "react-icons/io";

const Header = ({ loginHandler, modeHandler, theme }) => {
  const [mode, setMode] = useState(false);
  const [time, setTime] = useState(new Date().toTimeString().slice(0, 8));
  const navigate = useNavigate();
  const role = localStorage.getItem("role");

  const date = new Date().toISOString().split("T")[0];

  setInterval(() => {
    setTime(new Date().toTimeString().slice(0, 8));
  }, 1000);

  const toggleMode = () => {
    setMode((prev) => !prev);
  };

  useEffect(() => {
    modeHandler(mode);
  }, [mode, modeHandler]);

  return (
    <div
      className={`${mode ? "bg-[#003EAA]" : "bg-[#303053]"} text-[#fff]
     flex justify-end items-center duration-500 p-2 font-semibold h-[6vh] shadow-md shadow-black/0"
  } `}
    >
      {/* <div className="w-36">
        <img src={"../src/assets/emtech-black.png"} alt="EM-Tech" />
      </div> */}
      <div className="flex gap-3">
        {/* <div className="text-xs flex flex-col items-center"> */}
        {/* <div
          className={`bg-[${theme.pageBg}] flex justify-center items-center py-1 px-2 rounded-lg`}>
          {role}
        </div> */}
        {/* </div> */}
        {/* <div className="text-xs flex flex-col items-center">
          <div>{date}</div>
          <div>{time}</div>
        </div> */}
        <button
          className={`${
            mode ? "hover:bg-gray-100" : "hover:bg-[#31304D]"
          } p-1 rounded-lg`}
          onClick={toggleMode}
        >
          {mode ? (
            <MdOutlineDarkMode size={20} />
          ) : (
            <MdOutlineLightMode size={20} />
          )}
        </button>
        <button
          className={`${
            mode ? "hover:bg-gray-100" : "hover:bg-[#31304D]"
          } p-1 rounded-lg`}
        >
          <AiOutlineUser size={20} />
        </button>

        <button
          className={`text-red-600 ${
            mode ? "hover:bg-gray-100" : "hover:bg-[#31304D]"
          } p-1 rounded-lg`}
          onClick={() => {
            loginHandler(false, mode);
            localStorage.removeItem("logged");
            localStorage.removeItem("token");
            localStorage.removeItem("role");
            localStorage.removeItem("hospital_name");
            localStorage.removeItem("patientDetailsArray");
            navigate("/");
          }}
        >
          <IoIosLogOut size={20} />
        </button>
      </div>
    </div>
  );
};

export default Header;
