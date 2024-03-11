import { Routes, Route, useLocation } from "react-router-dom";
// import Login from "./components/Pages/Login";

import Sidebar from "./components/Pages/Sidebar";
import Header from "./components/Pages/Header";
import { useState } from "react";

import Home from "./components/Pages/Home";

import HospitalLogin from "./components/Pages/Login/HospitalLogin";
import DailyReports from "./components/Report/DailyReports/DailyReports";


import Toaster from "./components/Utils/Toaster";


// import { theme } from "./assets/theme";

const App = () => {
  const [logged, setLogged] = useState(!!localStorage.getItem("logged"));
  const [mode, setMode] = useState(false);
  const location = useLocation();
  const [apiResponseData, setApiResponseData] = useState(null);

  // const role = localStorage.getItem("role");
  // const billing = role === "Billing";
  // const frontDesk = role === "Front_Desk";
  // const admin = role === "Admin";

  const loginHandler = (logged) => {
    setLogged(logged);
  };

  const modeHandler = (mode) => {
    setMode(mode);
  };

  const theme = mode
    ? {
        mode: "light",
        pageBg: "#fff",
        header: "#9f9fa0",
        text: "#000",
        tableHead: "#c8c8f6",
      }
    : {
        mode: "dark",
        pageBg: "#ffffff",
        header: "#161a30",
        text: "#fff",
        tableHead: "#6565bc",
      };

  // const show = location.pathname === "/Manipal";

  return (
    <div className="h-[100vh]">
      <Toaster />
      {logged && (
        <Header
          loginHandler={loginHandler}
          modeHandler={modeHandler}
          // theme={theme}
        />
      )}
      <section className={`flex h-[94vh]  border-red-500 overflow-hidden`}>
        {logged && <Sidebar mode={mode} loginHandler={loginHandler} />}
        {/* <div className="h-full w-full bg-[#E3EDFF]  "> */}

        
        {/* <div className={`h-full w-full  ${mode ? "bg-[#E3EDFF]" : "bg-gradient-to-r from-[#25253f] to-[#252535]"}`}> */}
        <div className={`h-full w-full ${mode ? "bg-[#E3EDFF]" : "bg-[#24243d]"}`}>
  {/* Content goes here */}
          {!logged && (
            <Routes>
              <Route
                path="/"
                element={<HospitalLogin loginHandler={loginHandler} />}
              />
            </Routes>
          )}

          {/* All Pages go here */}

          {logged && (
            <Routes>
              <Route path="/pending_reports" element={<Home mode={mode} />} />
              <Route
                path="/daily_reports"
                element={<DailyReports mode={mode} />}
              />
              <Route path="/managing_reports" element={<Home mode={mode} />} />
            </Routes>
          )}
        </div>
      </section>
    </div>
  );
};

export default App;
