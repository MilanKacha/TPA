import React, { useState } from "react";
import { motion, useScroll } from "framer-motion";
import { FaPenToSquare } from "react-icons/fa6";
import CommonModal from "../../Modal/CommonModal";
import UpdateForm from "./UpdateForm";

const TPAstatusTable = ({ mode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openModalData, setOpenModalData] = useState(null);
  const openModalByid = (data) => {
    setIsOpen(true);
    setOpenModalData(data);
  };
  const closeModal = () => {
    setIsOpen(false);
    setOpenModalData(null)
  };
  const data = [
    {
      Sl_no: 1,
      Customer_name: "Bajaj Allianz",
      TPA_portal_access: "Yes",
      Automation_status: "Done",
      URL: "https://ecare.bajajallianz.com",
      User_Name: "ambani@hat.co.in",
      Password: "ambani@12848",
    },
    {
      Sl_no: 2,
      Customer_name: "Ericson Insurance TPA Pvt. Ltd.",
      TPA_portal_access: "Yes",
      Automation_status: "Done",
      URL: "http://www.ericsontpa.com/",
      User_Name: "10344",
      Password: "I8I7VS",
    },
    {
      Sl_no: 3,
      Customer_name: "Family Health",
      TPA_portal_access: "Yes",
      Automation_status: "Done",
      URL: "www.fhpl.net",
      User_Name: "4619",
      Password: "fhko5144al",
    },
    {
      Sl_no: 4,
      Customer_name: "Good Health",
      TPA_portal_access: "Yes",
      Automation_status: "Done",
      URL: "https://webace.goodhealthtpa.in/Provider/ProviderLogin.aspx",
      User_Name: "133457",
      Password: "GH20#133457",
    },
    {
      Sl_no: 5,
      Customer_name: "HDFC Ergo",
      TPA_portal_access: "NO",
      Automation_status: "NA",
      URL: "No Web Portal",
    },
    {
      Sl_no: 6,
      Customer_name: "Health India",
      TPA_portal_access: "Yes",
      Automation_status: "Done",
      URL: "https://www.healthindiatpa.com/Logins/LoginProvider.aspx",
      User_Name: "7507",
      Password: "7507",
    },
    {
      Sl_no: 7,
      Customer_name: "ICICI LOMBARD GENERAL INS",
      TPA_portal_access: "Yes",
      Automation_status: "Done",
      URL: "https://ilhc.icicilombard.com/home/login",
      User_Name: "ILHC1032586",
      Password: "icicilombard1234",
    },
    {
      Sl_no: 8,
      Customer_name: "Max Bupa",
      TPA_portal_access: "NO",
      Automation_status: "NA",
      URL: "No Web Portal",
    },
    {
      Sl_no: 9,
      Customer_name: "MD India",
      TPA_portal_access: "Yes",
      Automation_status: "Done",
      URL: "https://mdindiaonline.com/LoginPage.aspx?l=pr",
      User_Name: "150014895",
    },
    {
      Sl_no: 10,
      Customer_name: "MEDI ASSIST INDIA PVT LTD",
      TPA_portal_access: "Yes",
      Automation_status: "Done",
      URL: "https://providerab.ihx.in/",
      User_Name: "viren",
      Password: "finance123456",
    },
    {
      Sl_no: 11,
      Customer_name: "MED SAVE HELTH TPA LTD",
      TPA_portal_access: "Yes",
      Automation_status: "Done",
      URL: "https://www.medsave.in/",
      User_Name: "C001B005C0536",
      Password: "C001B005C0536",
    },
    {
      Sl_no: 12,
      Customer_name: "Paramount Health Services Pvt. Ltd.",
      TPA_portal_access: "Yes",
      Automation_status: "Done",
      URL: "https://www.paramounttpa.com/",
      User_Name: "NONNW45704",
      Password: "MENINBLUE",
    },
    {
      Sl_no: 13,
      Customer_name: "Park Mediclaim TPA Pvt Ltd",
      TPA_portal_access: "Yes",
      Automation_status: "Done",
      URL: "WWW.PARKMEDICLAIM.CO.IN",
      User_Name: "4526",
      Password: "123456",
    },
    {
      Sl_no: 14,
      Customer_name: "Raksha TPA Pvt. Ltd.,",
      TPA_portal_access: "Yes",
      Automation_status: "Done",
      URL: "https://www.rakshatpa.com",
      User_Name: "HOSP_61953",
      Password: "Raksha@2026",
    },
    {
      Sl_no: 15,
      Customer_name: "Reliance General Insurance Co. Ltd.",
      TPA_portal_access: "Yes",
      Automation_status: "Done - issue in captcha",
      URL: "https://provider.reliancegeneral.co.in/",
      User_Name: "accounts@kokilabenhospitals.com",
      Password: "Kh@123457",
    },
    {
      Sl_no: 16,
      Customer_name: "Religare",
      TPA_portal_access: "Yes",
      Automation_status: "Done",
      URL: "https://healthconnect.careinsurance.com",
      User_Name: "50000151",
      Password: "Xyz@1234",
    },
    {
      Sl_no: 17,
      Customer_name: "Safeway",
      TPA_portal_access: "Yes",
      Automation_status: "Done",
      URL: "https://www.safewaytpa.in/Logins.aspx",
      User_Name: "admin",
      Password: "HOSP5778",
    },
    {
      Sl_no: 18,
      Customer_name: "Vidal Health TPA (TTK HealthCare)",
      TPA_portal_access: "Yes",
      Automation_status: "Done",
      URL: "https://www.vidalhealthtpa.com",
      User_Name: "ACCOUNTSKDAH",
      Password: "Prince@123",
    },
    {
      Sl_no: 19,
      Customer_name: "Star Health Ins Co",
      TPA_portal_access: "Temperory Down",
      Automation_status: "Done",
      URL: "https://portal.starhealth.in/hospital/",
      User_Name: "Hos-4536",
      Password: "Hos-4536",
    },
    {
      Sl_no: 20,
      Customer_name: "SBI GIC L",
      TPA_portal_access: "NO",
      Automation_status: "Not done",
      URL: "https://portal.starhealth.in/hospital/",
      User_Name: "Hos-4536",
      Password: "Hos-4536",
    },
  ];
  return (
    <div>
      <motion.div
        className="h-[62vh] overflow-y-auto overflow-hidden mt-3"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <table className="w-full">
          <thead
            className={`${mode ? "text-black" : "text-[#fff]"} sticky top-0`}
          >
            <tr
              className={`text-[0.9rem] ${
                mode ? "bg-[#dee4ff]" : "bg-[#29295e]"
              } `}
            >
              <th
                className="p-1 text-center whitespace-nowrap px-[20px]"
                // onClick={() => handleSort("Sl_no")}
              >
                Sl_no
              </th>
              <th
                className="p-1 text-center whitespace-nowrap px-[20px]"
                // onClick={() => handleSort("Customer_Name")}
              >
                Customer_Name
              </th>

              <th
                className="p-1 text-center whitespace-nowrap px-[20px]"
                // onClick={() => handleSort("Amount")}
              >
                <div className="flex flex-row justify-center items-center">
                  <span>TPA_portal_access</span>
                </div>
              </th>
              <th
                className="p-1 text-center whitespace-nowrap px-[20px]"
                // onClick={() => handleSort("Amount")}
              >
                <div className="flex flex-row justify-center items-center">
                  <span>Automation_status</span>
                </div>
              </th>

              <th
                className="p-1 text-center whitespace-nowrap px-[20px]"
                // onClick={() => handleSort("Amount")}
              >
                <div className="flex flex-row justify-center items-center">
                  <span>User_Name</span>
                </div>
              </th>
              <th
                className="p-1 text-center whitespace-nowrap px-[20px]"
                // onClick={() => handleSort("Amount")}
              >
                <div className="flex flex-row justify-center items-center">
                  <span>URL</span>
                </div>
              </th>
              <th
                className="p-1 text-center whitespace-nowrap px-[20px]"
                // onClick={() => handleSort("Amount")}
              >
                <div className="flex flex-row justify-center items-center">
                  <span>Action</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((tpa, index) => (
              <tr
                key={index}
                className={`text-center text-[0.8rem] ${
                  mode
                    ? index % 2 !== 0
                      ? "bg-blue-100"
                      : "bg-white"
                    : index % 2 !== 0
                    ? "bg-[#303053]"
                    : "bg-[#303053]"
                } ${mode ? "text-black" : "text-white"}`}
              >
                <td
                  className={` border-x-0 py-1 ${
                    mode ? "border-y-slate-300" : "border-gray-300"
                  } whitespace-nowrap`}
                >
                  {index + 1}
                </td>
                <td
                  className={` border-x-0 py-1 ${
                    mode ? "border-y-slate-300" : "border-gray-300"
                  } whitespace-nowrap`}
                >
                  {tpa?.Customer_name}
                </td>
                <td
                  className={` border-x-0 py-1 ${
                    mode ? "border-y-slate-300" : "border-gray-300"
                  } whitespace-nowrap`}
                >
                  {tpa?.TPA_portal_access}
                </td>
                <td
                  className={` border-x-0 py-1 ${
                    mode ? "border-y-slate-300" : "border-gray-300"
                  } whitespace-nowrap`}
                >
                  {tpa?.Automation_status}
                </td>

                <td
                  className={` border-x-0 py-1 ${
                    mode ? "border-y-slate-300" : "border-gray-300"
                  } whitespace-nowrap`}
                >
                  {tpa?.User_Name}
                </td>
                <td
                  className={` border-x-0 py-1 ${
                    mode ? "border-y-slate-300" : "border-gray-300"
                  } whitespace-nowrap`}
                >
                  {tpa?.URL?.substring(0, 40)}...
                </td>
                <td
                  className={` border-x-0 py-1 ${
                    mode ? "border-y-slate-300" : "border-gray-300"
                  } whitespace-nowrap`}
                >
                  <div className="flex justify-center">
                    <FaPenToSquare onClick={() => openModalByid(tpa)} />
                  </div>
                </td>
              </tr>
            ))}
            {isOpen && (
              <CommonModal isOpen={isOpen} onClose={closeModal}>
                <UpdateForm onClose={closeModal} data={openModalData} />
              </CommonModal>
            )}
          </tbody>
        </table>
      </motion.div>
    </div>
  );
};

export default TPAstatusTable;
