import { LiaStethoscopeSolid } from "react-icons/lia";
import { FiKey } from "react-icons/fi";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const Login = ({ loginHandler }) => {
  const navigate = useNavigate();
  const formSubmitHandler = (e) => {
    e.preventDefault();

    loginHandler(true);
    localStorage.setItem("logged", true);
    navigate("/home");
  };
  return (
    <div className="bg-slate-500 w-full min-h-screen text-white flex justify-between">
      <div className="w-1/2 m-10 mt-28">
        <img src="../src/assets/login-bg.svg" alt="" />
      </div>
      <div className="w-1/2 flex justify-center items-center">
        <form className="p-4 rounded-lg" onSubmit={formSubmitHandler}>
          <h1 className="flex justify-center ml-6">Welcome Back User!</h1>
          <div className="flex justify-center ml-6">
            {"Let's get you logged in"}
          </div>
          <div className="flex justify-center mt-2">
            <span className="relative top-1 left-9">
              <LiaStethoscopeSolid size={30} />
            </span>
            <input type="text" className="w-full h-9 bg-[#3C3658] pl-16" />
          </div>
          <div className="flex justify-center mt-2 pl-2.5 mb-3">
            <span className="relative top-2 left-7">
              <FiKey size={20} />
            </span>
            <input type="password" className="w-full h-9 bg-[#3C3658] pl-16" />
            <span className="fixed top-[53%] right-[9%]">
              <MdOutlineRemoveRedEye size={20} />
            </span>
          </div>
          <div className="flex justify-between mt-2 ml-[7.8%] mb-3">
            <div className="text-lg flex">
              <input type="checkbox" name="stay" id="stay" />
              <span className=" text-xs ml-1">Remember Me !</span>
            </div>
            <div className="text-lg flex">
              <a href="/login" className="text-xs text-sky-300">
                Need Help?
              </a>
            </div>
          </div>
          <div className="mt-2 ml-8">
            <button
              className="bg-[#9D9CB5] min-w-full py-1 hover:bg-[#b2b1ce] rounded-sm"
              type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

Login.propTypes = {
  loginHandler: PropTypes.func.isRequired,
};

export default Login;
