import React, { useState, useEffect } from "react";
import { MdPendingActions } from "react-icons/md";
import moment from "moment";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import HorizontalBarChartTOP from "../Charts/Chartpendingtop";
import HorizontalBarChartBottom from "../Charts/Chartpendingbottom";
import { motion } from "framer-motion";
import ExcleFileUplodeModal from "../Modal/ExcleFileUplodeModal";
import * as XLSX from "xlsx";

const Home = ({ mode }) => {
  const [selectedCustomerName, setSelectedCustomerName] = useState("All");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedDateCount, setSelectedDateCount] = useState("");

  // console.log(selectedDateCount);
  const [pendingAmount, setPendingAmount] = useState("");
  const [count, setCount] = useState("");
  const [dateCount, setDateCount] = useState("");
  // console.log(dateCount);
  const [filteredData, setFilteredData] = useState([]);
  // console.log(dateCount);

  const [tpaData, setTpaData] = useState(null);
  console.log(tpaData);

  const [countData, setCountData] = useState(null);
  const [currentPageCusAmount, setCurrentPageCusAmount] = useState(1);
  const [sortConfig, setSortConfig] = useState({
    key: "Amount",
    direction: "asc",
  });

  // console.log(countData);

  const [top, setTop] = useState(null);

  // console.log(top);
  const [bottom, setBottom] = useState(null);

  const [error, setError] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  

  const onCloseModal = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "http://172.21.10.11:4890/kbh/DashboardData"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setTpaData(data.M2);
        setCountData(data.M1);
        setTop(data.Top5);
        setBottom(data.Low5);
        setDateCount(data.DWReport);
        setFilteredData(data.DWReport);
        const allData = data.M1.find((item) => item.CustName === "All");
        if (allData) {
          setPendingAmount(allData.Amount);
          setCount(allData.Count);
        }

        // console.log(data);
      } catch (error) {
        setError(error);
      }
    }

    fetchData();
  }, []);

  const convertDateFormat = (inputDate) => {
    const inputDateFormat = moment(inputDate, "YYYY-MM-DD", true);
    if (!inputDateFormat.isValid()) {
      return "Invalid date";
    }
    return inputDateFormat.format("DD-MM-YYYY");
  };

  const handleChange = (event) => {
    const selectedCustomer = event.target.value;
    setSelectedCustomerName(selectedCustomer);

    const selectedData = countData.find(
      (item) => item.CustName === selectedCustomer
    );
    if (selectedData) {
      setPendingAmount(selectedData.Amount);
      setCount(selectedData.Count);
    } else {
      setPendingAmount("");
      setCount("");
    }
  };

  function convertToAspNetDate(dateString) {
    const date = new Date(dateString);
    date.setHours(0, 0, 0, 0);
    const milliseconds = date.getTime();
    const aspNetDate = `/Date(${milliseconds})/`;
    return aspNetDate;
  }

 

  const filteredTpaData =
    tpaData && tpaData.length > 0
      ? tpaData.filter((tpa) => {
          if (
            selectedCustomerName !== "All" &&
            tpa.CustomerName !== selectedCustomerName
          ) {
            return false;
          }

          if (
            selectedDate &&
            tpa.ProcessedDate !== convertToAspNetDate(selectedDate)
          ) {
            return false;
          }
          return true;
        })
      : [];

  const handleDateChangeCountDate = (event) => {
    setSelectedDateCount(event.target.value);
  };


  const filterData = () => {
    if (!selectedDateCount) {
      setFilteredData(dateCount); 
      return;
    }

    const filteredData =
      dateCount &&
      (selectedDateCount
        ? dateCount.filter((el) => {
            return el.Date == convertDateFormat(selectedDateCount);
          })
        : dateCount);
    setFilteredData(filteredData);
  };

  // pagination
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 30;
  const totalPages = Math.ceil(filteredTpaData?.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredTpaData?.slice(startIndex, endIndex);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // pagination for Date Count
  const [currentPageDateCount, setCurrentPageDateCount] = useState(1);

  const itemsPerPageDateCount = 15;
  const totalPagesDateCount = Math.ceil(
    filteredData?.length / itemsPerPageDateCount
  );

  const startIndexDateCount =
    (currentPageDateCount - 1) * itemsPerPageDateCount;
  const endIndexDateCount = startIndexDateCount + itemsPerPageDateCount;
  const currentItemsDateCount = filteredData?.slice(
    startIndexDateCount,
    endIndexDateCount
  );

  const handleNextPageDateCount = () => {
    if (currentPageDateCount < totalPagesDateCount) {
      setCurrentPageDateCount(currentPageDateCount + 1);
    }
  };

  const handlePrevPageDateCount = () => {
    if (currentPageDateCount > 1) {
      setCurrentPageDateCount(currentPageDateCount - 1);
    }
  };

  // pagination Custemer amount pending sort

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key) {
      direction = sortConfig.direction === "asc" ? "desc" : "asc";
    }
    setSortConfig({ key, direction });
  };

  const sortedItems = countData
    ? [...countData].sort((a, b) => {
        if (sortConfig.key && a[sortConfig.key] && b[sortConfig.key]) {
          if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === "asc" ? -1 : 1;
          }
          if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === "asc" ? 1 : -1;
          }
        }
        return 0;
      })
    : [];

  const itemsPerPageCusAmount = 15;
  const totalPagesCusAmount = Math.ceil(
    sortedItems?.length / itemsPerPageCusAmount
  );

  const startIndexCusAmount =
    (currentPageCusAmount - 1) * itemsPerPageCusAmount;
  const endIndexCusAmount = startIndexCusAmount + itemsPerPageCusAmount;
  let currentItemsCusAmount = sortedItems?.slice(
    startIndexCusAmount,
    endIndexCusAmount
  );
  const handleNextPageCusAmount = () => {
    if (currentPageCusAmount < totalPagesCusAmount) {
      setCurrentPageCusAmount(currentPageCusAmount + 1);
    }
  };

  const handlePrevPageCusAmount = () => {
    if (currentPageCusAmount > 1) {
      setCurrentPageCusAmount(currentPageCusAmount - 1);
    }
  };

 
  const filterDataExport = () => {
    const filtered = selectedDateCount
      ? tpaData.filter(
          (item) => item.ProcessedDate == convertDateFormat(selectedDateCount)
        )
      : tpaData;
    exportToExcel(filtered);
    // console.log(selectedDateCount);
  };

  const exportToExcel = (tableData) => {
    if (!tableData || tableData.length === 0) {
      console.error("No data available to export.");
      return;
    }

    const fileName = "table_data.xlsx";
    const ws = XLSX.utils.json_to_sheet(tableData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    XLSX.writeFile(wb, fileName);
  };

  return (
    <>
      <div className={`overflow-auto h-[100vh] mx-auto ${mode ? "text-[#000]" : "text-[#c2c2c2]"}`} >
        <motion.h3
          className={"flex justify-start pl-6 items-center bg-transparent h-[8vh] w-full  z-50"}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div>Pending Reports</div>
          
          <div className="ml-4">
            <button
              className="text-white text-[15px] bg-gradient-to-r from-[#4747d7] to-[#00d7ff] py-[10px] px-4 rounded-[40px] transition duration-300 ease-in-out transform hover:scale-105 hover:from-[#00d7ff] hover:to-[#4747d7]"
              onClick={() => setModalIsOpen(true)}
            >
              Upload file
            </button>
          </div>
        </motion.h3>
        <ExcleFileUplodeModal isOpen={modalIsOpen} onClose={onCloseModal} />

        <div className="flex justify-evenly h-[6rem] mt-[4vh]">
          <button className={`font-medium rounded-xl w-[14rem] `}>
            <span className= {`${mode ? "text-[#000]" : "text-[#c2c2c2]"} text-[2rem]`}>Pending</span>
            <br />
            {/* <span className="text-blue-600">{Math.abs(pendingAmount)}</span> */}
            <span className="text-blue-600 text-[2rem]">₹85,78,88,981.3</span>
          </button>
          <button className={`font-medium rounded-xl w-[14rem]`}>
          <span className= {`${mode ? "text-[#000]" : "text-[#c2c2c2]"} text-[2rem]`}>Count</span>
            <br />
            {/* <span className="text-green-600"> {count}</span> */}
            <span className="text-green-600 text-[30px]">4040</span>
          </button>
          <button className={`font-medium rounded-xl w-[14rem]`}>
          <span className= {`${mode ? "text-[#000]" : "text-[#c2c2c2]"} text-[2rem]`}>Processed
</span>
            <br />
            <span className="text-red-600 text-[30px]">3000</span>
          </button>
          <button className={`font-medium rounded-xl w-[14rem] `}>
          <span className= {`${mode ? "text-[#000]" : "text-[#c2c2c2]"} text-[2rem]`}>UnProcessed</span>
            <br />
            <span className="text-[#e707dc] text-[30px]">1000</span>
          </button>
          <button className={`font-medium rounded-xl w-[14rem] `}>
          <span className= {`${mode ? "text-[#000]" : "text-[#c2c2c2]"} text-[2rem]`}>Exception</span>
            <br />
            <span className="text-[#A855F7] text-[30px]">40</span>
          </button>
        </div>

        <motion.div
          className="flex flex-col md:flex-row mt-[4vh] w-[80vw] mx-auto"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="pr-2 flex items-center text-[15px] w-[70%]">
            <div className="w-[80%]">
              <select
                className={`rounded-[2px] px-3 py-1 focus:outline-none focus:border-blue-500 mr-2 w-full ${mode ? 'bg-[#ffffff]' : 'bg-[#303053]'}`}
                value={selectedCustomerName}
                onChange={handleChange}
              >
                {countData?.map((item, index) => (
                  <option
                    key={index}
                    value={item?.CustName}
                    className={`${mode ? 'bg-gradient-to-r from-[#4747d7] to-[#00d7ff]' : 'bg-[#303053]'}`}
                  >
                    {item?.CustName}
                  </option>
                ))}
              </select>
            </div>
        
            <div
              className="text-white text-[15px] bg-gradient-to-r from-[#4747d7] to-[#00d7ff] py-[5px] px-4 rounded-[5px] transition duration-300 ease-in-out transform hover:scale-100 ml-2 hover:from-[#00d7ff] hover:to-[#4747d7]"
              onClick={() => exportToExcel(filteredTpaData)}
            >
              Export DATA
            </div>
          </div>
          {/* <div className="grid grid-cols-2 gap-2 w-[30%]">
            <motion.div
              className={`flex gap-2 justify-center items-center ${
                mode ? "bg-[#ffffff]" : "bg-[#ffffff]"
              } py-[2px] px-[20px] border-gray-300 shadow-lg `}
            >
              <div className="flex flex-col ">
                <span className="text-black text-center font-medium text-[25px]">
                  Pending
                </span>
                <span className="text-black flex justify-center font-semibold text-[20px]">
                  {Math.abs(pendingAmount)}
                </span>
              </div>
            </motion.div>
            <div
              className={`flex gap-2 justify-center items-center  ${
                mode ? "bg-[#ffffff]" : "bg-[#ffffff]"
              } py-[2px] px-[20px] border-gray-300 shadow-lg  `}
            >
              <div className="flex flex-col ">
                <span className="text-black text-center font-medium text-[25px]">
                  Count
                </span>
                <span className="text-black flex justify-center font-semibold text-[20px]">
                  {count}
                </span>
              </div>
            </div>
          </div> */}
        </motion.div>
        <div className="flex flex-col mt-3 w-[80vw] mx-auto">
          <motion.div
            className="h-[60vh] overflow-y-auto overflow-hidden"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <table className="w-full ">
              <thead className={`${mode ? "text-black" : "text-[#fff]"} sticky top-0`}>
                <tr
                  className={`text-[0.9rem] ${
                    mode ? "bg-[#dee4ff]" : "bg-[#29295e]"
                  } `}
                >
                  <th className="p-1 text-center px-[20px]">Sl No</th>
                  <th className="p-1 text-center">Customer_Name</th>
                  <th className="p-1 text-center">Reference</th>
                  <th className="p-1 text-center">Assignment</th>
                  <th className="p-1 text-center">Document No</th>
                  <th className="p-1 text-center">Amount(₹)</th>
                  <th className="p-1 text-center">Doc.Date</th>
                  <th className="p-1 text-center">Pro.Date</th>
                  <th className="p-1 text-center">Text</th>
                </tr>
              </thead>
              <tbody className="bg-[#fff]">
                {currentItems?.map((tpa, index) => (
                  <tr
                    key={index}
                    className={`text-center text-[0.8rem] ${ mode ?
                      index % 2 !== 0 ? "bg-blue-100" : "bg-white" :  index % 2 !== 0 ? "bg-[#303053]" : "bg-[#303053]" 
                    } ${mode ? "text-black" : "text-white"}`}
                  >
                    <td
                      className={` border-x-0 py-1 ${
                        mode ? "border-y-slate-300" : "border-gray-300"
                      }`}
                    >
                      {`${
                        currentPage * itemsPerPage - itemsPerPage + (index + 1)
                      }`}
                    </td>
                    <td
                      className={` border-x-0 py-1 ${
                        mode ? "border-y-slate-300" : "border-gray-300  "
                      }`}
                    >
                      {tpa?.CustomerName > 30
                        ? tpa.CustomerName.substring(0, 50) + "..."
                        : tpa.CustomerName}
                    </td>
                    <td
                      className={` border-x-0 py-1 ${
                        mode ? "border-y-slate-300" : "border-gray-300  "
                      }`}
                    >
                      {tpa?.RefN}
                    </td>
                    <td
                      className={` border-x-0 py-1 ${
                        mode ? "border-y-slate-300" : "border-gray-300  "
                      }`}
                    >
                      {tpa?.Assignment}
                    </td>
                    <td
                      className={` border-x-0 py-1 ${
                        mode ? "border-y-slate-300" : "border-gray-300  "
                      }`}
                    >
                      {tpa?.DocName}
                    </td>
                    <td
                      className={` border-x-0 py-1 ${
                        mode ? "border-y-slate-300" : "border-gray-300  "
                      }`}
                    >
                      {`${Math.abs(tpa?.Amount)}`}
                    </td>
                    <td
                      className={` border-x-0 py-1 ${
                        mode ? "border-y-slate-300" : "border-gray-300  "
                      }`}
                    >
                      {tpa?.DocDate}
                    </td>
                    <td
                      className={` border-x-0 py-1 ${
                        mode ? "border-y-slate-300" : "border-gray-300  "
                      }`}
                    >
                      {tpa?.ProcessedDate}
                    </td>
                    <td
                      className={` border-x-0 py-1 ${
                        mode ? "border-y-slate-300" : "border-gray-300  "
                      }`}
                    >
                      {tpa?.Text.substring(0, 30)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          <motion.div
            className="flex justify-center mt-2 text-black mb-2 pb-2 text-[15px]"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
          >
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="mr-2 bg-[#bcc2c4] text-black px-[5px] py-[1px] rounded"
            >
              &lt;
            </button>
            {currentPage > 1 && (
              <button
                onClick={() => setCurrentPage(1)}
                className="mr-2  bg-[#bcc2c4] text-black px-[5px] py-[1px] rounded"
              >
                1
              </button>
            )}
            {currentPage > 3 && <span className="mr-2">...</span>}
            {currentPage > 2 && (
              <button
                onClick={() => setCurrentPage(currentPage - 1)}
                className="mr-2 bg-[#bcc2c4] text-black px-[5px] py-[1px] rounded"
              >
                {currentPage - 1}
              </button>
            )}
            <button
              disabled
              className="mr-2 bg-blue-300 text-gray-800 px-[5px] py-[1px] rounded"
            >
              {currentPage}
            </button>
            {currentPage < totalPages && (
              <button
                onClick={() => setCurrentPage(currentPage + 1)}
                className="mr-2 bg-[#bcc2c4] text-black px-[5px] py-[1px] rounded"
              >
                {currentPage + 1}
              </button>
            )}
            {currentPage < totalPages - 2 && <span className="mr-2">...</span>}
            {currentPage < totalPages - 1 && (
              <button
                onClick={() => setCurrentPage(totalPages)}
                className="mr-2 bg-[#bcc2c4] text-black px-[5px] py-[1px] rounded"
              >
                {totalPages}
              </button>
            )}
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="mr-2 bg-[#bcc2c4] text-black px-[5px] py-[2px] rounded"
            >
              &gt;
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="mb-1 flex justify-end ">
              <input
                type="date"
                className={`rounded-[2px] px-3 py-1 focus:outline-none focus:border-blue-500 ${
                  mode ? "bg-[#dee4ff]" : "bg-[#303053]"
                }`}
                value={selectedDateCount}
                onChange={handleDateChangeCountDate}
              />
              <button
                className="text-white text-[15px] bg-gradient-to-r from-[#4747d7] to-[#00d7ff] py-[5px] px-4 rounded-[5px] transition duration-300 ease-in-out transform hover:scale-100 ml-2 hover:from-[#00d7ff] hover:to-[#4747d7]"
                onClick={filterData}
              >
                Filter Data
              </button>
              <div
                className="text-white text-[15px] bg-gradient-to-r from-[#4747d7] to-[#00d7ff] py-[5px] px-4 rounded-[5px] transition duration-300 ease-in-out transform hover:scale-100 ml-2 hover:from-[#00d7ff] hover:to-[#4747d7]"
                onClick={() => filterDataExport()}
              >
                Export DATA
              </div>
            </div>
            <motion.div
              className={`h-[60vh] overflow-y-auto overflow-hidden mt-1 ${
                mode ? "bg-[#fff]" : "bg-[#303053]"
              }`}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <table className="w-full ">
              <thead className={`${mode ? "text-black" : "text-[#fff]"} sticky top-0`}>
                <tr
                  className={`text-[0.9rem] ${
                    mode ? "bg-[#dee4ff]" : "bg-[#29295e]"
                  } `}
                >
                    <th className="p-1 text-center">Sl No</th>
                    <th className="p-1 text-center">Pro.Date</th>
                    <th className="p-1 text-center">Count</th>
                    <th className="p-1 text-center">Amount(₹)</th>
                  </tr>
                </thead>
                <tbody>
                  {currentItemsDateCount &&
                    currentItemsDateCount?.map((tpa, index) => (
                      <tr
                        key={index}
                        className={`text-center text-[0.8rem] ${ mode ?
                          index % 2 !== 0 ? "bg-blue-100" : "bg-white" :  index % 2 !== 0 ? "bg-[#303053]" : "bg-[#303053]" 
                        } ${mode ? "text-black" : "text-white"}`}
                      >
                        <td
                          className={` border-x-0 py-1 ${
                            mode ? "border-y-slate-300" : "border-gray-300"
                          }`}
                        >
                          {index + 1}
                        </td>
                        <td
                          className={` border-x-0 py-1 ${
                            mode ? "border-y-slate-300" : "border-gray-300  "
                          }`}
                        >
                          {tpa?.Date}
                        </td>
                        <td
                          className={` border-x-0 py-1 ${
                            mode ? "border-y-slate-300" : "border-gray-300  "
                          }`}
                        >
                          {tpa?.Count}
                        </td>
                        <td
                          className={` border-x-0 py-1 ${
                            mode ? "border-y-slate-300" : "border-gray-300  "
                          }`}
                        >
                          {Math.abs(tpa?.Amount)}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </motion.div>
            <motion.div
              className="flex justify-center mt-2 text-black mb-2 pb-2"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5 }}
            >
              <button
                onClick={handlePrevPageDateCount}
                disabled={currentPageDateCount === 1}
                className="mr-2 bg-[#bcc2c4] text-black px-[5px] py-[1px] rounded"
              >
                &lt;
              </button>
              {currentPageDateCount > 1 && (
                <button
                  onClick={() => setCurrentPageDateCount(1)}
                  className="mr-2 bg-[#bcc2c4] text-black px-[5px] py-[1px] rounded"
                >
                  1
                </button>
              )}
              {currentPageDateCount > 3 && <span className="mr-2">...</span>}
              {currentPageDateCount > 2 && (
                <button
                  onClick={() =>
                    setCurrentPageDateCount(currentPageDateCount - 1)
                  }
                  className="mr-2 bg-[#bcc2c4] text-black px-[5px] py-[1px] rounded"
                >
                  {currentPageDateCount - 1}
                </button>
              )}
              <button
                disabled
                className="mr-2 bg-blue-300 text-gray-800 px-2 py-1 rounded"
              >
                {currentPageDateCount}
              </button>
              {currentPageDateCount < totalPagesDateCount && (
                <button
                  onClick={() =>
                    setCurrentPageDateCount(currentPageDateCount + 1)
                  }
                  className="mr-2 bg-[#bcc2c4] text-black px-[5px] py-[1px] rounded"
                >
                  {currentPageDateCount + 1}
                </button>
              )}
              {currentPageDateCount < totalPagesDateCount - 2 && (
                <span className="mr-2">...</span>
              )}
              {currentPageDateCount < totalPagesDateCount - 1 && (
                <button
                  onClick={() => setCurrentPageDateCount(totalPagesDateCount)}
                  className="mr-2 bg-[#bcc2c4] text-black px-[5px] py-[1px] rounded"
                >
                  {totalPagesDateCount}
                </button>
              )}
              <button
                onClick={handleNextPageDateCount}
                disabled={currentPageDateCount === totalPagesDateCount}
                className="mr-2 bg-[#bcc2c4] text-black px-[5px] py-[1px] rounded"
              >
                &gt;
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-3  grid grid-cols-2"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
          >
            <div className={`px-1 py-2 mr-2 rounded-lg ${
                    mode ? "bg-[#fff]" : "bg-[#303053]"
                  } `}>
              <HorizontalBarChartTOP top5={top} mode={mode} />
            </div>
            <div className={`px-1 py-2 rounded-lg ${
                    mode ? "bg-[#fff]" : "bg-[#303053]"
                  }`}>
              <HorizontalBarChartBottom bottom5={bottom} mode={mode}  />
             
            </div>
          </motion.div>

          <motion.div
            className="mt-4  grid grid-cols-2 "
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
          >
            <div className={`${
                    mode ? "bg-[#fff]" : "bg-[#303053]"
                  } mr-2 px-2 py-2  h-[35vh]`}>
              <h5 className="text-center">
                Top 5 Pending TPA
              </h5>
              <table className="w-full">
              <thead className={`${mode ? "text-black" : "text-[#fff]"} sticky top-0`}>
                <tr
                  className={`text-[0.9rem] ${
                    mode ? "bg-[#dee4ff]" : "bg-[#29295e]"
                  } `}
                >
                    <th className="p-1 text-center">Sl No</th>
                    <th className="p-1 text-center">Customer_Name</th>
                    <th className="p-1 text-center">Count</th>
                    <th className="p-1 text-center">Amount(₹)</th>
                  </tr>
                </thead>
                <tbody>
                  {top?.map((tpa, index) => (
                    <tr
                      key={index}
                      className={`text-center text-[0.8rem] ${ mode ?
                        index % 2 !== 0 ? "bg-blue-100" : "bg-white" :  index % 2 !== 0 ? "bg-[#303053]" : "bg-[#303053]" 
                      } ${mode ? "text-black" : "text-white"}`}
                    >
                      <td
                        className={` border-x-0 py-1 ${
                          mode ? "border-y-slate-300" : "border-gray-300"
                        }`}
                      >
                        {index + 1}
                      </td>
                      <td
                        className={` border-x-0 py-1 ${
                          mode ? "border-y-slate-300" : "border-gray-300  "
                        }`}
                      >
                        {tpa?.CustName?.length > 30
                          ? tpa?.CustName.substring(0, 200) + "..."
                          : tpa?.CustName}
                      </td>
                      <td
                        className={` border-x-0 py-1 ${
                          mode ? "border-y-slate-300" : "border-gray-300  "
                        }`}
                      >
                        {tpa?.Count}
                      </td>
                      <td
                        className={` border-x-0 py-1 ${
                          mode ? "border-y-slate-300" : "border-gray-300"
                        }`}
                      >
                        {Math.abs(tpa?.Amount)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className={`${
                    mode ? "bg-[#fff]" : "bg-[#303053]"
                  } mr-2 px-2 py-2  h-[35vh]`}>
              <h5 className="text-center ">
                Bottom 5 Pending TPA
              </h5>
              <table className="w-full">
              <thead className={`${mode ? "text-black" : "text-[#fff]"} sticky top-0`}>
                <tr
                  className={`text-[0.9rem] ${
                    mode ? "bg-[#dee4ff]" : "bg-[#29295e]"
                  } `}
                >
                    <th className="p-1 text-center">Sl No</th>
                    <th className="p-1 text-center">Customer_Name</th>
                    <th className="p-1 text-center">Count</th>
                    <th className="p-1 text-center">Amount(₹)</th>
                  </tr>
                </thead>
                <tbody>
                  {bottom?.map((tpa, index) => (
                      <tr
                      key={index}
                      className={`text-center text-[0.8rem] ${ mode ?
                        index % 2 !== 0 ? "bg-blue-100" : "bg-white" :  index % 2 !== 0 ? "bg-[#303053]" : "bg-[#303053]" 
                      } ${mode ? "text-black" : "text-white"}`}
                    >
                      <td
                        className={` border-x-0 py-1 ${
                          mode ? "border-y-slate-300" : "border-gray-300  "
                        }`}
                      >
                        {index + 1}
                      </td>
                      <td
                        className={` border-x-0 py-1 ${
                          mode ? "border-y-slate-300" : "border-gray-300  "
                        }`}
                      >
                        {tpa?.CustName?.length > 30
                          ? tpa?.CustName.substring(0, 200) + "..."
                          : tpa?.CustName}
                      </td>
                      <td
                        className={` border-x-0 py-1 ${
                          mode ? "border-y-slate-300" : "border-gray-300  "
                        }`}
                      >
                        {tpa?.Count}
                      </td>
                      <td
                        className={` border-x-0 py-1 ${
                          mode ? "border-y-slate-300" : "border-gray-300  "
                        }`}
                      >
                        {Math.abs(tpa?.Amount)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          <motion.div
            className="h-[62vh] overflow-y-auto overflow-hidden mt-3"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <table className="w-full">
            <thead className={`${mode ? "text-black" : "text-[#fff]"} sticky top-0`}>
                <tr
                  className={`text-[0.9rem] ${
                    mode ? "bg-[#dee4ff]" : "bg-[#29295e]"
                  } `}
                >
                  <th
                    className="p-1 text-center"
                    onClick={() => handleSort("Sl No")}
                  >
                    Sl No
                  </th>
                  <th
                    className="p-1 text-center"
                    onClick={() => handleSort("Customer_Name")}
                  >
                    Customer_Name
                  </th>
                  <th
                    className="py-1 text-center"
                    onClick={() => handleSort("Count")}
                  >
                    <div className="flex flex-row justify-center items-center">
                      <span>Count</span>
                      {sortConfig.key === "Count" && (
                        <span>
                          {sortConfig.direction === "asc" ? (
                            <FaArrowDown size={13} />
                          ) : (
                            <FaArrowUp size={13} />
                          )}
                        </span>
                      )}
                    </div>
                  </th>
                  <th
                    className="py-1 text-center"
                    onClick={() => handleSort("Amount")}
                  >
                    <div className="flex flex-row justify-center items-center">
                      <span>Amount(₹)</span>
                      {sortConfig.key === "Amount" && (
                        <span className="">
                          {sortConfig.direction === "asc" ? (
                            <FaArrowUp size={13} />
                          ) : (
                            <FaArrowDown size={13} />
                          )}
                        </span>
                      )}
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentItemsCusAmount.map((tpa, index) => (
                  <tr
                  key={index}
                  className={`text-center text-[0.8rem] ${ mode ?
                    index % 2 !== 0 ? "bg-blue-100" : "bg-white" :  index % 2 !== 0 ? "bg-[#303053]" : "bg-[#303053]" 
                  } ${mode ? "text-black" : "text-white"}`}
                >
                    <td
                      className={` border-x-0 py-1 ${
                        mode ? "border-y-slate-300" : "border-gray-300"
                      }`}
                    >
                      {index + 1}
                    </td>
                    <td
                      className={` border-x-0 py-1 ${
                        mode ? "border-y-slate-300" : "border-gray-300"
                      }`}
                    >
                      {tpa?.CustName}
                    </td>
                    <td
                      className={` border-x-0 py-1 ${
                        mode ? "border-y-slate-300" : "border-gray-300"
                      }`}
                    >
                      {tpa?.Count}
                    </td>
                    <td
                      className={` border-x-0 py-1 ${
                        mode ? "border-y-slate-300" : "border-gray-300"
                      }`}
                    >
                      {Math.abs(tpa?.Amount)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
          <motion.div
            className="flex justify-center mt-2 text-black mb-10 pb-2"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
          >
            <button
              onClick={handlePrevPageCusAmount}
              disabled={currentPageCusAmount === 1}
              className="mr-2 bg-[#bcc2c4] text-black px-[5px] py-[1px] rounded"
            >
              &lt;
            </button>
            {currentPageCusAmount > 1 && (
              <button
                onClick={() => setCurrentPageCusAmount(1)}
                className="mr-2 bg-[#bcc2c4] text-black px-[5px] py-[1px] rounded"
              >
                1
              </button>
            )}
            {currentPageCusAmount > 3 && <span className="mr-2">...</span>}
            {currentPageCusAmount > 2 && (
              <button
                onClick={() =>
                  setCurrentPageDateCount(currentPageCusAmount - 1)
                }
                className="mr-2 bg-[#bcc2c4] text-black px-[5px] py-[1px] rounded"
              >
                {currentPageCusAmount - 1}
              </button>
            )}
            <button
              disabled
              className="mr-2 bg-blue-300 text-gray-800 px-2 py-1 rounded"
            >
              {currentPageCusAmount}
            </button>
            {currentPageCusAmount < totalPagesCusAmount && (
              <button
                onClick={() =>
                  setCurrentPageCusAmount(currentPageCusAmount + 1)
                }
                className="mr-2 bg-[#bcc2c4] text-black px-[5px] py-[1px] rounded"
              >
                {currentPageCusAmount + 1}
              </button>
            )}
            {currentPageCusAmount < totalPagesCusAmount - 2 && (
              <span className="mr-2">...</span>
            )}
            {currentPageCusAmount < totalPagesCusAmount - 1 && (
              <button
                onClick={() => setCurrentPageCusAmount(totalPagesCusAmount)}
                className="mr-2 bg-[#bcc2c4] text-black px-[5px] py-[1px] rounded"
              >
                {totalPagesCusAmount}
              </button>
            )}
            <button
              onClick={handleNextPageCusAmount}
              disabled={currentPageCusAmount === totalPagesCusAmount}
              className="mr-2 bg-[#bcc2c4] text-black px-[5px] py-[1px] rounded"
            >
              &gt;
            </button>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Home;
