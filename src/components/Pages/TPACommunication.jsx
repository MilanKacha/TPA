import React, { useState, useEffect } from "react";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";
import { TbEdit } from "react-icons/tb";
import CustomisedModal from "./CustomModal";
import { IoClose } from "react-icons/io5";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// const tpaList = [
//   {
//     insuranceCompanyName: "Aditya Birla Health Insurance Company",
//   },
//   {
//     insuranceCompanyName: "Apollo DKV",
//   },
//   {
//     insuranceCompanyName: "Bajaj Allianz",
//   },
//   {
//     insuranceCompanyName: "Birla Sun Life",
//   },
//   {
//     insuranceCompanyName: "Care Health Insurance Limited",
//   },
//   {
//     insuranceCompanyName: "CHOLAMANDALAM MS GENERAL INSURANCE COMPANY LIMITED",
//   },
//   {
//     insuranceCompanyName: "Edelweiss General Insurance Company Limited",
//   },
//   {
//     insuranceCompanyName: "Future Generali India Insurance Company Limited",
//   },
//   {
//     insuranceCompanyName: "HDFC ERGO General Insurance Co.",
//   },
//   {
//     insuranceCompanyName: "ICICI Lombard General Insurance Company",
//   },
//   {
//     insuranceCompanyName: "IFFCO-TOKIO GENERAL INSURANCE CO. LTD.",
//   },
//   {
//     insuranceCompanyName: "L&T General Insurance  Company Ltd",
//   },
//   {
//     insuranceCompanyName: "Liberty Videocon General Insurance Company Ltd.",
//   },
//   {
//     insuranceCompanyName: "Magma HDI General Insurance Company Ltd.",
//   },
//   {
//     insuranceCompanyName: "ManipalCigna Health Insurance Company Limited",
//   },
//   {
//     insuranceCompanyName: "Max Bupa Health Insurance Company Ltd.",
//   },
//   {
//     insuranceCompanyName: "MAX LIFE INSURANCE COMPANY LIMITED",
//   },
//   {
//     insuranceCompanyName: "National Insurance Company Limited",
//   },
//   {
//     insuranceCompanyName: "NIVA BUPA HEALTH INSURANCE COMPANY LIMITED",
//   },
//   {
//     insuranceCompanyName: "Prestige Assurance PLC",
//   },
//   {
//     insuranceCompanyName: "Reliance General Insurance",
//   },
//   {
//     insuranceCompanyName: "Royal Sundaram Alliance Insurance Company Limited",
//   },
//   {
//     insuranceCompanyName: "SBI General Insurance Company Ltd",
//   },
//   {
//     insuranceCompanyName: "Tata AIG General Insurance Company Limited",
//   },
//   {
//     insuranceCompanyName: "The New India Assurance Company Limited",
//   },
//   {
//     insuranceCompanyName: "The Oriental Insurance Company Ltd",
//   },
//   {
//     insuranceCompanyName: "United India Insurance Company Limited",
//   },
//   {
//     insuranceCompanyName: "Universal Sompo General Insurance Co. Ltd.",
//   },
//   {
//     insuranceCompanyName: "Zuno General Insurance Limited",
//   },
//   {
//     insuranceCompanyName: "Life Insurance Corporation of India",
//   },
// ];

const TPACommunication = ({ theme }) => {
  const [tpalist, setTpaList] = useState([]);
  // const [dataforselect, setDataforselect] = useState(null);
  // console.log(tpalist);
  const hospitalName = localStorage.getItem("hospital_name");
  const token = localStorage.getItem("token");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "http://172.21.10.68:4000/view_tpa_details",
          { hospital_name: hospitalName },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setTpaList(response?.data);
        // console.log(response?.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [hospitalName]);

  const data = tpalist?.filter((item) => {
    return item.tpa_email === null || item.tpa_email === "";
  });

  const Tabledata = tpalist?.filter((item) => {
    return item.tpa_email !== null && item.tpa_email !== "";
  });
  // console.log(Tabledata);

  console.log(data);

  const initialState = {
    tpa_name: "",
    tpa_email: "",
    email2: "",
  };

  const [search, setSearch] = useState(null);
  const [showEmail, setShowEmail] = useState(false);
  const [formData, setFormData] = useState(initialState);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedItemselect, setSelectedItemselect] = useState(null);

  const toggleModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen((prev) => !prev);
  };

  const filteredData = Tabledata.filter((item) => {
    if (search) {
      return (
        item?.tpa_name
          .toString()
          .toLowerCase()
          .includes(search?.trim().toLowerCase()) ||
        item?.tpa_email
          .toString()
          .toLowerCase()
          .includes(search?.trim().toLowerCase()) ||
        item?.email2
          .toString()
          .toLowerCase()
          .includes(search?.trim().toLowerCase())
      );
    }
    return item;
  });

  const toggleEmail = () => {
    setShowEmail((prev) => !prev);
  };

  const fetchUpdate = async () => {
    try {
      const response = await axios.post(
        "http://172.21.10.68:4000/view_tpa_details",
        { hospital_name: hospitalName },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setTpaList(response?.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    // console.log(formData);

    if (!selectedItemselect) {
      console.error("No item selected.");
      return;
    }

    try {
      await axios.put(
        "http://172.21.10.68:4000/tpa_update",
        {
          hospital_name: hospitalName,
          id: selectedItemselect._id,
          update_data: {
            $set: formData,
          },
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      toast.success("Document Updated Successfully");
      setFormData(initialState);
      fetchUpdate();
      console.log(formData);
    } catch (error) {
      console.error("Error updating data:", error);
      toast.error("Something Went Wrong");
    }
  };

  // console.log(Tabledata);

  const light = theme.mode === "light";

  const formUpdateHandler = async (e) => {
    e.preventDefault();

    const tpaName = e.target.elements.name.value;
    const tpaEmail = e.target.elements.email.value;
    const email2 = e.target.elements.user_id.value;

    try {
      await axios.put(
        "http://172.21.10.68:4000/tpa_update",
        {
          hospital_name: hospitalName,
          id: selectedItem._id,
          update_data: {
            $set: {
              tpa_name: tpaName,
              tpa_email: tpaEmail,
              email2: email2,
            },
          },
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      toast.success("Document successfully updated");
      toggleModal();
      fetchUpdate();
    } catch (error) {
      toast.error("Something Went Wrong");
    }
  };
  const handelDeleteTpa = async (index) => {
    const rowData = Tabledata[index];
    // console.log(rowData);
    try {
      await axios.delete("http://172.21.10.68:4000/tpa_delete", {
        data: {
          hospital_name: hospitalName,
          id: rowData._id,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("TPA Deleted Successfully");
      fetchUpdate();
    } catch (error) {
      toast.error("Something Went Wrong");
      console.log(error);
    }
  };
  return (
    <div className={`m-4 text-[${theme.text}]`}>
      <div className="flex justify-between mb-3">
        <h5 className="">TPA Communications</h5>
        <input
          type="text"
          name="search"
          placeholder="Search..."
          className={`pl-2 w-[50%] bg-[${
            theme.header
          }] border-none rounded-lg ${light && "placeholder:text-[#000]"}`}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
      {/* {filteredData.length === 0 && (
        <div className={`flex justify-center h-[70vh] items-center rounded-lg`}>
          No Data Found
        </div>
      )} */}

      <div className={`bg-[${theme.header}] rounded-lg mb-2 p-2`}>
        <marquee behavior="" direction="" className="">
          Add TPA here
        </marquee>
        <form className="flex justify-evenly" onSubmit={formSubmitHandler}>
          <div className="flex">
            <label htmlFor="tpa" className="mr-2 flex items-center">
              Select TPA:
            </label>
            <select
              name="tpa"
              className={`text-[${theme.text}] bg-[${theme.pageBg}] border-none rounded-md text-sm py-1 w-56`}
              value={formData.tpa_name}
              onChange={(e) => {
                const value = e.target.value;
                const selectedIndex = e.target.selectedIndex;
                setSelectedItemselect(data[selectedIndex - 1]);
                setFormData((prev) => ({
                  ...prev,
                  tpa_name: value,
                }));
              }}
            >
              <option value={``} className={`text-[${theme.text}] text-xs p-2`}>
                -- Select TPA --
              </option>
              {data?.map((item, index) => (
                <option
                  key={index}
                  value={`${item.tpa_name}`}
                  className={`text-[${theme.text}] text-xs p-2`}
                >
                  {item.tpa_name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex">
            <label htmlFor="tpa" className="mr-2 flex items-center">
              Email:
            </label>
            <input
              type="email"
              className={`text-[${theme.text}] bg-[${theme.pageBg}] border-none rounded-md text-sm pl-2 w-56 mr-1`}
              placeholder="Email"
              value={formData.tpa_email}
              required
              onChange={(e) => {
                setFormData((prev) => {
                  return { ...prev, tpa_email: e.target.value };
                });
              }}
            />
            {!showEmail && (
              <div onClick={toggleEmail} className="flex">
                <CiCirclePlus size="28px" />
              </div>
            )}
            {showEmail && (
              <input
                type="email"
                className={`text-[${theme.text}] bg-[${theme.pageBg}] border-none rounded-md text-sm pl-2 w-56`}
                placeholder="Email"
                value={formData.email2}
                onChange={(e) => {
                  setFormData((prev) => {
                    return { ...prev, email2: e.target.value };
                  });
                }}
              />
            )}
            {showEmail && (
              <div onClick={toggleEmail} className="flex">
                <CiCircleMinus size="28px" />
              </div>
            )}
          </div>

          <button
            type="submit"
            className="bg-[rgba(52,249,105,0.54)] hover:bg-[rgba(52,249,105,0.99)] px-3 rounded-md py-[0.35rem] text-xs"
          >
            Add
          </button>
        </form>
      </div>

      <div className="h-[62vh] overflow-y-auto overflow-hidden rounded-lg ">
        {filteredData.length > 0 && (
          <table className={`w-[100%] bg-[${theme.header}] `}>
            <thead className={`text-sm sticky top-0 bg-[${theme.tableHead}]`}>
              <tr className="">
                <th className="text-center p-2">SL No.</th>
                <th className="text-center p-2">TPA Insurance Company</th>
                <th className="text-center p-2">Email ID</th>
                <th className="text-center p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item, i) => (
                <tr key={i} className={`text-xs`}>
                  <td className="text-center p-2">{i + 1}</td>
                  <td className="text-center p-2">{item.tpa_name}</td>
                  <td className="text-center p-2">
                    {item.tpa_email}, {item.email2}
                  </td>
                  <td className="text-center p-2 flex justify-evenly">
                    <div>
                      <TbEdit
                        className="text-blue-600 hover:cursor-pointer"
                        size="15px"
                        onClick={() => toggleModal(item)}
                      />
                      <CustomisedModal
                        isOpen={isModalOpen}
                        onRequestClose={toggleModal}
                        height="55%"
                        overlayColor="rgba(0, 0, 0, 0.15)"
                        contentLabel="Example Modal"
                      >
                        <div className="mt-[-10px] flex justify-between font-bold z-50">
                          <div>Edit Email</div>
                          <button onClick={toggleModal} className="">
                            <IoClose size="20px" />
                          </button>
                        </div>
                        <div className="bg-black mx-[-20px] my-[-10px]">
                          <hr />
                        </div>
                        <div className="text-xs font-semibold text-red-600">
                          {"All the ( * ) are compulsory"}
                        </div>
                        <form
                          className="mt-2 flex flex-col gap-3 font-bold text-sm"
                          onSubmit={formUpdateHandler}
                        >
                          <div className="flex flex-col">
                            <label htmlFor="name">TPA Name</label>
                            <input
                              type="text"
                              name="name"
                              className="border border-black rounded-md pl-2 py-1 font-semibold hover:cursor-not-allowed"
                              defaultValue={selectedItem?.tpa_name}
                              readOnly
                            />
                          </div>
                          <div className="flex flex-col">
                            <label htmlFor="email">
                              Email Id<span className="text-red-600">*</span>
                            </label>
                            <input
                              type="text"
                              name="email"
                              className="border border-black rounded-md pl-2 py-1 font-semibold"
                              defaultValue={selectedItem?.tpa_email}
                            />
                          </div>
                          <div className="flex flex-col">
                            <label htmlFor="user_id">Email Id</label>
                            <input
                              type="text"
                              name="user_id"
                              className="border border-black rounded-md pl-2 py-1 font-semibold"
                              defaultValue={selectedItem?.email2}
                            />
                          </div>
                          <div className="flex justify-end relative top-2">
                            <button
                              className=" bg-green-600 px-2 py-1 rounded-md text-white font-light"
                              type="submit"
                            >
                              Submit
                            </button>
                          </div>
                        </form>
                      </CustomisedModal>
                    </div>
                    <button onClick={() => handelDeleteTpa(i)}>
                      <MdDeleteForever className="text-red-600" size="15px" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default TPACommunication;
