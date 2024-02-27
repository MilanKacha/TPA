import React, { useState } from "react";

const tableData = [
  {
    slNo: 1,
    name: "John Doe",
    email: "johndoe@gmail.com",
    pid: "MANBI00001",
  },
  {
    slNo: 2,
    name: "Sanjay G",
    email: "sanjay@gmail.com",
    pid: "MANBI00002",
  },
  {
    slNo: 3,
    name: "Abhinav R Patil",
    email: "abhinav@gmail.com",
    pid: "MANBI00003",
  },
  {
    slNo: 4,
    name: "Santosh Jena",
    email: "santosh@gmail.com",
    pid: "MANBI00004",
  },
  {
    slNo: 5,
    name: "Milan",
    email: "milan@gmail.com",
    pid: "MANBI00005",
  },
  {
    slNo: 6,
    name: "Sainath Patro",
    email: "sainath@gmail.com",
    pid: "MANBI00006",
  },
  {
    slNo: 7,
    name: "Pratyush Kumar",
    email: "pratyush@gmail.com",
    pid: "MANBI00007",
  },
  {
    slNo: 8,
    name: "Pritam",
    email: "pritam@gmail.com",
    pid: "MANBI00008",
  },
  {
    slNo: 9,
    name: "Rajesh",
    email: "rajesh@gmail.com",
    pid: "MANBI00009",
  },
  {
    slNo: 10,
    name: "Aquib",
    email: "aquib@gmail.com",
    pid: "MANBI00010",
  },
  {
    slNo: 11,
    name: "John Doe",
    email: "johndoe@gmail.com",
    pid: "MANBI00011",
  },
  {
    slNo: 12,
    name: "John Doe",
    email: "johndoe@gmail.com",
    pid: "MANBI00012",
  },
  {
    slNo: 13,
    name: "John Doe",
    email: "johndoe@gmail.com",
    pid: "MANBI00013",
  },
  {
    slNo: 14,
    name: "John Doe",
    email: "johndoe@gmail.com",
    pid: "MANBI00014",
  },
  {
    slNo: 15,
    name: "John Doe",
    email: "johndoe@gmail.com",
    pid: 987654321,
  },
  {
    slNo: 16,
    name: "John Doe",
    email: "johndoe@gmail.com",
    pid: 987654321,
  },
  {
    slNo: 17,
    name: "John Doe",
    email: "johndoe@gmail.com",
    pid: 987654321,
  },
  {
    slNo: 18,
    name: "John Doe",
    email: "johndoe@gmail.com",
    pid: 987654321,
  },
  {
    slNo: 19,
    name: "John Doe",
    email: "johndoe@gmail.com",
    pid: 987654321,
  },
  {
    slNo: 20,
    name: "John Doe",
    email: "johndoe@gmail.com",
    pid: 987654321,
  },
  {
    slNo: 21,
    name: "John Doe",
    email: "johndoe@gmail.com",
    pid: 987654321,
  },
  {
    slNo: 22,
    name: "John Doe",
    email: "johndoe@gmail.com",
    pid: 987654321,
  },
  {
    slNo: 23,
    name: "John Doe",
    email: "johndoe@gmail.com",
    pid: 987654321,
  },
  {
    slNo: 24,
    name: "John Doe",
    email: "johndoe@gmail.com",
    pid: 987654321,
  },
  {
    slNo: 25,
    name: "John Doe",
    email: "johndoe@gmail.com",
    pid: 987654321,
  },
  {
    slNo: 26,
    name: "John Doe",
    email: "johndoe@gmail.com",
    pid: 987654321,
  },
];

const PatientsRegistered = ({ theme }) => {
  const [search, setSearch] = useState(null);

  //   const searchData = tableData[0];
  //   for (const data in searchData) {
  //     console.log(data);
  //   }

  const filteredData = tableData.filter((item) => {
    if (search) {
      return (
        item.slNo
          .toString()
          .toLowerCase()
          .includes(search.trim().toLowerCase()) ||
        item.name
          .toString()
          .toLowerCase()
          .includes(search.trim().toLowerCase()) ||
        item.email
          .toString()
          .toLowerCase()
          .includes(search.trim().toLowerCase()) ||
        item.pid.toString().toLowerCase().includes(search.trim().toLowerCase())
      );
    }
    return item;
  });

  const light = theme.mode === "light";
  return (
    <div className={`m-4 text-[${theme.text}]`}>
      <div className="flex justify-between mb-3">
        <h5 className="">Patients Registered</h5>
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
      {filteredData.length === 0 && (
        <div className={`flex justify-center h-[70vh] items-center rounded-lg`}>
          No Data Found
        </div>
      )}
      <div className="h-[76vh] overflow-y-auto rounded-lg overflow-hidden">
        {filteredData.length > 0 && (
          <table className={`w-[100%] bg-[${theme.header}] `}>
            <thead
              className={`${
                light && "border-black"
              } text-sm sticky top-0 border-b z-50 bg-[${theme.header}]`}>
              <tr className="">
                <th className="text-center p-2">SL No.</th>
                <th className="text-center p-2">PID</th>
                <th className="text-center p-2">Registered By</th>
                <th className="text-center p-2">Patient Name</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item, i) => (
                <tr key={item.slNo} className={`z-0 text-xs`}>
                  <td className="text-center p-2">{i + 1}</td>
                  <td className="text-center p-2">{item.pid}</td>
                  <td className="text-center p-2">{item.email}</td>
                  <td className="text-center p-2">{item.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default PatientsRegistered;
