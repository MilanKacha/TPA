import { IoToggle } from "react-icons/io5";
import { MdDeleteForever } from "react-icons/md";

import { TbEdit } from "react-icons/tb";
import { IoClose } from "react-icons/io5";

import { url } from "../config";
import { useCallback, useEffect, useState } from "react";
import CustomisedModal from "./CustomModal";

const tableData = [
  {
    slNo: 1,
    name: "John Doe",
    email: "johndoe@gmail.com",
    registeredNo: 987654321,
    role: "Front Desk",
  },
  {
    slNo: 2,
    name: "John Doe",
    email: "johndoe@gmail.com",
    registeredNo: 987654321,
    role: "Front Desk",
  },
  {
    slNo: 3,
    name: "John Doe",
    email: "johndoe@gmail.com",
    registeredNo: 987654321,
    role: "Front Desk",
  },
  {
    slNo: 4,
    name: "John Doe",
    email: "johndoe@gmail.com",
    registeredNo: 987654321,
    role: "Front Desk",
  },
  {
    slNo: 5,
    name: "John Doe",
    email: "johndoe@gmail.com",
    registeredNo: 987654321,
    role: "Front Desk",
  },
  {
    slNo: 6,
    name: "John Doe",
    email: "johndoe@gmail.com",
    registeredNo: 987654321,
    role: "Front Desk",
  },
  {
    slNo: 7,
    name: "John Doe",
    email: "johndoe@gmail.com",
    registeredNo: 987654321,
    role: "Front Desk",
  },
  {
    slNo: 8,
    name: "John Doe",
    email: "johndoe@gmail.com",
    registeredNo: 987654321,
    role: "Front Desk",
  },
  {
    slNo: 9,
    name: "John Doe",
    email: "johndoe@gmail.com",
    registeredNo: 987654321,
    role: "Front Desk",
  },
  {
    slNo: 10,
    name: "John Doe",
    email: "johndoe@gmail.com",
    registeredNo: 987654321,
    role: "Front Desk",
  },
  {
    slNo: 11,
    name: "John Doe",
    email: "johndoe@gmail.com",
    registeredNo: 987654321,
    role: "Front Desk",
  },
  {
    slNo: 12,
    name: "John Doe",
    email: "johndoe@gmail.com",
    registeredNo: 987654321,
    role: "Front Desk",
  },
  {
    slNo: 13,
    name: "John Doe",
    email: "johndoe@gmail.com",
    registeredNo: 987654321,
    role: "Front Desk",
  },
  {
    slNo: 14,
    name: "John Doe",
    email: "johndoe@gmail.com",
    registeredNo: 987654321,
    role: "Front Desk",
  },
  {
    slNo: 15,
    name: "John Doe",
    email: "johndoe@gmail.com",
    registeredNo: 987654321,
    role: "Front Desk",
  },
  {
    slNo: 16,
    name: "John Doe",
    email: "johndoe@gmail.com",
    registeredNo: 987654321,
    role: "Front Desk",
  },
  {
    slNo: 17,
    name: "John Doe",
    email: "johndoe@gmail.com",
    registeredNo: 987654321,
    role: "Front Desk",
  },
  {
    slNo: 18,
    name: "John Doe",
    email: "johndoe@gmail.com",
    registeredNo: 987654321,
    role: "Front Desk",
  },
  {
    slNo: 19,
    name: "John Doe",
    email: "johndoe@gmail.com",
    registeredNo: 987654321,
    role: "Front Desk",
  },
  {
    slNo: 20,
    name: "John Doe",
    email: "johndoe@gmail.com",
    registeredNo: 987654321,
    role: "Front Desk",
  },
  {
    slNo: 21,
    name: "John Doe",
    email: "johndoe@gmail.com",
    registeredNo: 987654321,
    role: "Front Desk",
  },
  {
    slNo: 22,
    name: "John Doe",
    email: "johndoe@gmail.com",
    registeredNo: 987654321,
    role: "Front Desk",
  },
  {
    slNo: 23,
    name: "John Doe",
    email: "johndoe@gmail.com",
    registeredNo: 987654321,
    role: "Front Desk",
  },
  {
    slNo: 24,
    name: "John Doe",
    email: "johndoe@gmail.com",
    registeredNo: 987654321,
    role: "Front Desk",
  },
  {
    slNo: 25,
    name: "John Doe",
    email: "johndoe@gmail.com",
    registeredNo: 987654321,
    role: "Front Desk",
  },
  {
    slNo: 26,
    name: "John Doe",
    email: "johndoe@gmail.com",
    registeredNo: 987654321,
    role: "Front Desk",
  },
];

const ManageUser = ({ theme }) => {
  const light = theme.mode === "light";
  const [search, setSearch] = useState(null);
  const [tableData, setTableData] = useState([]);
  const [status, setStatus] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const statusToggleHandler = () => {
    setStatus((prev) => !prev);
  };

  const filteredData = tableData.filter((item) => {
    if (search) {
      return (
        item.slNo.toString().toLowerCase().includes(search.toLowerCase()) ||
        item.hid.toString().toLowerCase().includes(search.toLowerCase()) ||
        item.email.toString().toLowerCase().includes(search.toLowerCase()) ||
        item.hospitalUser
          .toString()
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        item.role.toString().toLowerCase().includes(search.toLowerCase())
      );
    }
    return item;
  });

  const fetchUserData = useCallback(async () => {
    try {
      const response = await fetch(
        "http://172.21.10.68:4000/hospital_user_register_get",
        {
          method: "POST",
          body: JSON.stringify({
            hospital_name: "Manipal",
            hospital_user: "Bishnu6",
            user_password: "123",
            role: "Billing",
          }),
          headers: {
            "Content-Type": "application/json",
            Authorization: `bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const body = await response.json();
      let jsonData = [];
      for (let i = 0; i < body.data.length; i++) {
        jsonData.push({
          slNo: i + 1,
          hid: body.data[i].hid || "",
          hospitalName: body.data[i].hospital_name || "",
          email: `${body.data[i].hospital_user.toLowerCase()}@gmail.com` || "",
          hospitalUser: body.data[i].hospital_user || "",
          role: body.data[i].role || "",
          status: body.data[i].status || "",
          userPassword: body.data[i].user_password || "",
          id: body.data[i]._id || "",
        });
      }
      setTableData(jsonData);
      console.log(jsonData);
    } catch (error) {
      console.log("error", error);
    }
  }, []);

  useEffect(() => {
    fetchUserData();
  }, [fetchUserData]);

  return (
    <>
      <div className={`Manageuser-component text-xs text-[${theme.text}] m-3`}>
        <div
          className={`main_Manageuser transition-all ease-linear duration-300`}>
          <div className="flex justify-between mb-2">
            <h6 className={`mb-[1%]`}>MANAGE USERS</h6>
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
          <div
            className={`w-full rounded-lg bg-[${theme.header}] p-3 grid grid-cols-4 gap-2 mb-[1%]`}>
            <div
              className={`flex gap-2 justify-between items-center border ${
                light && "border-black"
              } p-2 rounded-lg`}>
              <span className="text-center text-orange-700">
                Avaliable License
              </span>
              <span className="text-orange-700">41</span>
            </div>
            {/* <div
              className={`flex gap-2 justify-between items-center border ${
                light && "border-black"
              } p-2 rounded-lg`}>
              <span>Admin</span>
              <span className="text-green-600">09</span>
            </div> */}
            <div
              className={`flex gap-2 justify-between items-center border ${
                light && "border-black"
              } p-2 rounded-lg`}>
              <span>Front Desk</span>
              <span className="text-green-600">10</span>
            </div>
            <div
              className={`flex gap-2 justify-between items-center border ${
                light && "border-black"
              } p-2 rounded-lg`}>
              <span>Billing</span>
              <span className="text-green-600">05</span>
            </div>
            <div
              className={`flex gap-2 justify-between items-center border ${
                light && "border-black"
              } p-2 rounded-lg`}>
              <span>Finance</span>
              <span className="text-green-600">20</span>
            </div>
            {/* <div
              className={`flex gap-2 justify-between items-center border ${
                light && "border-black"
              } p-2 rounded-lg`}>
              <span>B</span>
              <span className="text-green-600">02</span>
            </div> */}
          </div>

          {filteredData.length === 0 && (
            <div
              className={`flex justify-center h-[70vh] items-center rounded-lg`}>
              No Data Found
            </div>
          )}

          {
            <div className="h-[65vh] overflow-y-auto rounded-lg overflow-hidden">
              <table className={`w-[100%] bg-[${theme.header}] `}>
                <thead
                  className={` ${
                    light && "border-black"
                  } text-sm border-b sticky top-0 
                    
                   bg-[${theme.header}]`}
                  // z-50 in above class
                >
                  <tr className="">
                    <th className="text-center p-2">SL No.</th>
                    <th className="text-center p-2">Name</th>
                    <th className="text-center p-2">Email Id</th>
                    <th className="text-center p-2">User Id</th>
                    <th className="text-center p-2">Role</th>
                    <th className="text-center p-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((item) => (
                    <tr key={item.slNo} className={`z-0`}>
                      <td className="text-center p-2">{item.slNo}</td>
                      <td className="text-center p-2">{item.hospitalUser}</td>
                      <td className="text-center p-2">{item.email}</td>
                      <td className="text-center p-2">{item.hid}</td>
                      <td className="text-center p-2">{item.role}</td>
                      <td
                        className={`flex justify-evenly p-2 text-sm items-center`}>
                        <div
                          className={`border ${
                            theme.mode === "light" && "border-black"
                          } rounded-xl flex ${
                            item.status && "justify-end"
                          } w-5 h-3 items-center p-[0.1rem] hover:cursor-pointer`}
                          onClick={() => {
                            setStatus((prev) => !prev);
                          }}>
                          <div
                            className={`w-2 h-2 bg-red-500 ${
                              item.status && "bg-green-500"
                            } rounded-full `}></div>
                        </div>
                        {/* <IoToggle className="text-green-600" /> */}
                        <div>
                          <TbEdit
                            className="text-blue-600 hover:cursor-pointer"
                            size="15px"
                            onClick={toggleModal}
                          />

                          <CustomisedModal
                            height="64%"
                            isOpen={isModalOpen}
                            onRequestClose={toggleModal}
                            contentLabel="Example Modal">
                            <div className="mt-[-10px] flex justify-between font-bold">
                              <div>Edit User</div>
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
                            <form className="mt-2 flex flex-col gap-3 font-bold text-sm">
                              <div className="flex flex-col">
                                <label htmlFor="name">
                                  Name
                                  <span className="text-red-600">*</span>
                                </label>
                                <input
                                  type="text"
                                  className="border border-black rounded-md pl-2 py-1 font-semibold"
                                  defaultValue={item.hospitalUser}
                                />
                              </div>
                              <div className="flex flex-col">
                                <label htmlFor="email">Email Id</label>
                                <input
                                  type="text"
                                  className="border border-black rounded-md pl-2 py-1 hover:cursor-not-allowed font-semibold"
                                  readOnly
                                  defaultValue={item.email}
                                />
                              </div>
                              <div className="flex flex-col">
                                <label htmlFor="user_id">User Id</label>
                                <input
                                  type="text"
                                  className="border border-black rounded-md pl-2 py-1 hover:cursor-not-allowed font-semibold"
                                  readOnly
                                  defaultValue={item.hid}
                                />
                              </div>
                              <div className="flex flex-col">
                                <label htmlFor="name">
                                  Role<span className="text-red-600">*</span>
                                </label>
                                <select
                                  name=""
                                  className="border border-black rounded-md pl-2 py-1 font-semibold"
                                  defaultValue={item.role}>
                                  {/* <option defaultValue={item.role}>{item.role}</option> */}
                                  <option value="Front_Desk">Front Desk</option>
                                  <option value="Billing">Billing</option>
                                  <option value="Finance">Finance</option>
                                </select>
                              </div>
                              <div className="flex justify-end relative top-2">
                                <button
                                  className=" bg-green-600 px-2 py-1 rounded-md text-white font-light"
                                  type="submit">
                                  Submit
                                </button>
                              </div>
                            </form>
                          </CustomisedModal>
                        </div>
                        <button>
                          <MdDeleteForever
                            className="text-red-600"
                            size="15px"
                          />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          }
        </div>
      </div>
    </>
  );
};

export default ManageUser;
