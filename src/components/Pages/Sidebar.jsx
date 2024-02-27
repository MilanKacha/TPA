import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { FaHospitalUser, FaWpforms } from "react-icons/fa";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";

import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { RiFilePdfFill } from "react-icons/ri";
import { IoIosLogOut } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ mode, loginHandler }) => {
  const role = localStorage.getItem("role");
  const billing = role === "Billing";
  const frontDesk = role === "Front_Desk";
  const admin = role === "Admin";
  const navigate = useNavigate();

  const location = useLocation();

  const [open, setOpen] = useState(false);
  const [menuStates, setMenuStates] = useState({});

  let menus = [];

  if (billing) {
    menus = [
      { name: "Pre-Auth", link: "/pre_auth", icon: FaWpforms },
      {
        name: "Patients Registered",
        link: "/patient_registered",
        icon: FaHospitalUser,
      },
      { name: "Settings", link: "/settings", icon: RiSettings4Line },
    ];
  } else if (frontDesk) {
    menus = [
      { name: "Registration", link: "/register", icon: MdOutlineDashboard },
      { name: "Settings", link: "/settings", icon: RiSettings4Line },
    ];
  } else if (admin) {
    menus = [
      {
        name: "Reports",
        link: "/pending",
        icon: RiFilePdfFill,
        children: [
          { name: "Pending", link: "/pending_reports" },
          { name: "Daily", link: "/daily_reports" },
          { name: "Managing", link: "/managing_reports" },
        ],
      },
      // {
      //   name: "Home",
      //   link: "/home",
      //   icon: FaHome,
      //   children: [
      //     { name: "Pending", link: "/pending" },
      //     { name: "Documents", link: "/documents" },
      //     { name: "Managing", link: "/managing" },
      //   ],
      // },
    ];
  }

  const handleAccordionToggle = (menuName) => {
    setMenuStates((prev) => ({
      ...prev,
      [menuName]: !prev[menuName],
    }));
  };

  const handleMenuIconClick = () => {
    setOpen((prev) => !prev);
    setMenuStates({});
  };

  useEffect(() => {
    if (!open) {
      setMenuStates({});
    }
  }, [open]);

  return (
    <div
      className={`bg-[#003EAA] text-[#fff] ${
        open ? "w-64" : "w-20"
      } duration-500 px-4 shadow-black overflow-hidden`}
    >
      <div className={`py-3 flex text-[#ffffff] justify-end px-0`}>
        {open ? (
          <FaArrowAltCircleLeft
            size={26}
            className="cursor-pointer"
            onClick={handleMenuIconClick}
          />
        ) : (
          <div className=" w-[100%]">
            <FaArrowAltCircleRight
              size={26}
              className="cursor-pointer"
              onClick={handleMenuIconClick}
            />
          </div>
        )}
      </div>
      <div className="mt-1 flex flex-col gap-2 relative">
        {menus?.map((menu, i) => (
          <div key={i}>
            <div
              onClick={() => handleAccordionToggle(menu.name)}
              className={`${
                menu.margin && "mt-5"
              } group flex items-center text-sm  gap-2 font-medium p-1  ${
                mode
                  ? "hover:bg-[#dedede] hover:text-black"
                  : "hover:bg-[#dedede] hover:text-black"
              } rounded-md ${
                mode ? "text-[#ffffff]" : "text-[#ffffff]"
              } no-underline ${
                (location.pathname === menu.link ||
                  (menu.children &&
                    menu.children.some(
                      (child) => location.pathname === child.link
                    ))) &&
                `${
                  mode ? "bg-[#eae8e8] text-black" : "bg-[#eae8e8] text-black"
                }`
              }`}
            >
              <div>{React.createElement(menu.icon, { size: "20" })}</div>
              <div
                className={`whitespace-pre  ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu.name}
              </div>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit text-lg`}
              >
                {menu.name}
              </h2>
            </div>

            {menu.children &&
              menuStates[menu.name] &&
              menu.children.map((child, index) => (
                <Link
                  key={index}
                  to={child.link}
                  className={`group flex items-center text-sm gap-2 font-medium p-1 my-1 ml-7 ${
                    mode
                      ? "hover:bg-[#eae8e8] hover:text-black"
                      : "hover:bg-[#eae8e8] hover:text-black"
                  } rounded-md ${
                    mode ? "text-[#fff]" : "text-[#fff]"
                  } no-underline ${
                    location.pathname === child.link &&
                    "bg-[#eae8e8] text-black"
                  }`}
                >
                  <div className="pl-4">{child.name}</div>
                </Link>
              ))}
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center mt-1 text-white">
        <button
          className={` ${
            mode ? "hover:text-red-600" : "hover:text-red-600"
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
          <IoIosLogOut size={25} />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
