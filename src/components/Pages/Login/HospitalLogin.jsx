// import { LiaStethoscopeSolid } from "react-icons/lia";
// import { FiKey } from "react-icons/fi";
// import { MdOutlineRemoveRedEye } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
// import { AiFillStar } from "react-icons/ai";
import "./login.css";
import { FaHospitalUser } from "react-icons/fa6";
import { RiLockPasswordFill } from "react-icons/ri";
import backgroundImg from "../../../assets/loginbg.png";
import { RiHospitalFill } from "react-icons/ri";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const HospitalLogin = ({ loginHandler }) => {
  const navigate = useNavigate();

  const [login, setLogin] = useState({
    username: "",
    password: "",
    hospital: "",
    role: "user",
  });
  // for show password
  const [showPass, setShowPass] = useState(false);
  // state for hospitaldata
  const [hospitalData, setHospitalData] = useState([]);

  useEffect(() => {
    fetch("http://172.21.10.68:4000/display_data")
      .then((response) => response.json())
      .then((data) => {
        setHospitalData(data.data);
      })
      .catch((error) => console.error("Error fetching hospital data:", error));
  }, []);

  const formSubmitHandler = async (e) => {
    e.preventDefault();

    const { username, password, hospital, role } = login;

    if (!username || !password || !hospital || !role) {
      console.error("All fields are required. Please fill out all the fields.");
      return;
    }

    let apiUrl;
    let requestData;

    if (role === "user") {
      apiUrl = "http://172.21.10.68:4000/hospital_user_login";
      requestData = {
        hospital_name: hospital,
        hospital_user: username,
        user_password: password,
      };
    } else if (role === "admin") {
      apiUrl = "http://172.21.10.68:4000/hospital_admin_login";
      requestData = {
        hospital_name: hospital,
        username: username,
        password: password,
      };
    }

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      const data = await response.json();
      console.log("API Response:", data);

      if (data.token) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("role", data.role);
        localStorage.setItem("hospital_name", hospital);
        localStorage.setItem("logged", true);
      }

      setLogin({
        username: "",
        password: "",
        hospital: "",
        role: "user",
      });
      loginHandler(true);

      const role = data.role;
      const billing = role === "Billing";
      const frontDesk = role === "Front_Desk";
      const admin = role === "Admin";

      billing && navigate("/pre_auth");
      frontDesk && navigate("/register");
      admin && navigate("/home");
    } catch (error) {
      console.error("Error during API call:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin((prevLogin) => ({
      ...prevLogin,
      [name]: value,
    }));
  };

  const handleTogglePassword = () => {
    setShowPass(!showPass);
  };

  return (
    <div
      className="bg-slate-500  min-h-screen text-white flex justify-between overflow-hidden h-screen w-screen bg-cover"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div className="w-[40%] flex justify-center items-center">
        <div className="container">
          <div className="form-box">
            <form
              className="rounded-lg w-[100%] my-auto"
              onSubmit={formSubmitHandler}
            >
              <div className="flex items-center flex-col ">
                <h1 className="flex justify-center border-b-[1px] py-2 w-[100%]">
                  Log In
                </h1>
                <div className="flex justify-center mt-2 w-[100%] text-[16px]">
                  <label className="mr-7">
                    <input
                      type="radio"
                      name="role"
                      value="user"
                      checked={login.role === "user"}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    User
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="role"
                      value="admin"
                      checked={login.role === "admin"}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    Admin
                  </label>
                </div>

                <div className="w-[100%]">
                  <label className="flex justify-center mt-2 w-[100%] text-[16px]">
                    Select Hospital
                  </label>
                  <div className="flex justify-center fl mt-2 w-[100%] relative">
                    <span className="absolute left-3 top-1">
                      {/* You can replace this with the icon for hospital */}
                      <RiHospitalFill size={24} />
                    </span>
                    <select
                      className="w-full h-9 bg-slate-700 pl-12"
                      name="hospital"
                      value={login.hospital}
                      onChange={handleChange}
                    >
                      <option value="">Select Hospital</option>
                      {hospitalData.map((hospital) => (
                        <option
                          key={hospital.hospital_id}
                          value={hospital.hospital_name}
                        >
                          {hospital.hospital_name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="w-[100%] h-full">
                  <label className="flex justify-center mt-2 w-[100%] text-[16px]">
                    Username
                  </label>
                  <div className="flex justify-center fl mt-2 w-[100%] relative">
                    <span className="absolute left-3 top-1">
                      <FaHospitalUser size={24} />
                    </span>
                    <input
                      type="text"
                      className="w-full h-9 pl-12 bg-slate-700"
                      name="username"
                      value={login.username}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="w-[100%]">
                  <label className="flex justify-center mt-2 w-[100%] text-[16px]">
                    Password
                  </label>
                  <div className="flex justify-center fl mt-2 w-[100%] relative">
                    <span className="absolute left-3 top-1">
                      <RiLockPasswordFill size={24} />
                    </span>
                    <input
                      type={showPass ? "text" : "password"}
                      className="w-full h-9 pl-12 bg-slate-700"
                      name="password"
                      value={login.password}
                      onChange={handleChange}
                    />
                    <span
                      className="absolute right-3 top-1 cursor-pointer"
                      onClick={handleTogglePassword}
                    >
                      {showPass ? (
                        <FaEyeSlash size={24} />
                      ) : (
                        <FaEye size={24} />
                      )}
                    </span>
                  </div>
                </div>

                <div className="mt-7 w-[60%] flex justify-center mx-auto">
                  <button
                    className="bg-sky-600 min-w-full py-2 hover:bg-sky-400 rounded-md text-[17px]"
                    type="submit"
                  >
                    Login
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

HospitalLogin.propTypes = {
  loginHandler: PropTypes.func.isRequired,
};

export default HospitalLogin;
