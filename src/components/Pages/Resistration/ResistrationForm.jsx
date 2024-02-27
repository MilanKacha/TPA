import { useState, useRef, useEffect } from "react";
import "./resistration.css";
import "react-datepicker/dist/react-datepicker.css";
import Modal from "react-modal";
import { Country, State } from "country-state-city";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ResistrationForm = () => {
  // for reset data
  const fileInputRef = useRef(null);

  // for upload pan card
  const panCardFileInputRef = useRef(null);
  const aadharCardFileInputRef = useRef(null);
  const storedResponseDataString = localStorage.getItem("storedResponseData");

  // const [storedFile, setStoredFile] = useState(
  //   localStorage.getItem("storedFile")
  // );

  // Parse the stored response data string to convert it into a JavaScript object
  const storedResponseData = JSON.parse(storedResponseDataString);

  // Access the 'Name' property from the stored response data
  const name = storedResponseData ? storedResponseData.Name : null;

  // Now 'name' contains the value you stored
  console.log("Name:", name);

  const convertToInputDate = (dateString) => {
    if (!dateString) {
      return "";
    }

    const [month, day, year] = dateString.split("/");
    return `${year}-${month?.padStart(2, "0")}-${day?.padStart(2, "0")}`;
  };

  const [formData, setFormData] = useState({
    hospital_name: localStorage.getItem("hospital_name"),
    first_name: storedResponseData?.Name || "",
    last_name: "",
    gender: storedResponseData?.Gender || "",
    dob: convertToInputDate(storedResponseData?.Dob) || "",
    contact: "",
    alternateNumber: "",
    emailAddress: "",
    maritalStatus: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    patientGuardianName: "",
    relation: "",
    emergencyPhoneNumber: "",
    panCardNumber: "",
    aadharCardNumber: storedResponseData?.Aadhaar_No || "",
    fileUploadPanCard: localStorage.getItem("fileuplodedPancard") || null,
    fileUploadAdharCard: localStorage.getItem("fileuplodedAdharcard") || null,
    reasonForRegistration: "",
    additionalNotes: "",
  });

  const [errors, setErrors] = useState({});

  const [isPanCardModalOpen, setIsPanCardModalOpen] = useState(false);
  const [panCardSelectedFile, setPanCardSelectedFile] = useState(null);
  const [panCardPdfPreview, setPanCardPdfPreview] = useState("");
  const [panCardModalLoading, setPanCardModalLoading] = useState(false);
  // State for show pancard name
  const [isPanCardConfirmed, setIsPanCardConfirmed] = useState(false);

  const [isAdharCardConfirmed, setIsAdharCardConfirmed] = useState(false);

  const [isAadharCardModalOpen, setIsAadharCardModalOpen] = useState(false);
  const [aadharCardSelectedFile, setAadharCardSelectedFile] = useState(null);
  const [aadharCardPdfPreview, setAadharCardPdfPreview] = useState("");
  const [aadharCardModalLoading, setAadharCardModalLoading] = useState(false);

  // for Modal
  useEffect(() => {
    Modal.setAppElement("#root");
  }, []);

  // for change data
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePanCardButtonClick = (e) => {
    e.preventDefault();
    if (!isPanCardModalOpen && panCardFileInputRef.current) {
      panCardFileInputRef.current.click();
    }
  };

  const handleAadharCardButtonClick = (e) => {
    e.preventDefault();

    if (!isAadharCardModalOpen && aadharCardFileInputRef.current) {
      aadharCardFileInputRef.current.click();
    }
  };

  const handlePanCardFileChange = (e) => {
    const file = e.target.files[0];

    if (file && file.type === "application/pdf") {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPanCardPdfPreview(reader.result);
        setPanCardSelectedFile(file);
        setIsPanCardModalOpen(true);
      };
      reader.readAsDataURL(file);
    } else {
      setPanCardPdfPreview("");
    }
  };

  const handleAadharCardFileChange = (e) => {
    const file = e.target.files[0];

    if (file && file.type === "application/pdf") {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAadharCardPdfPreview(reader.result);
        setAadharCardSelectedFile(file);
        setIsAadharCardModalOpen(true);
      };
      reader.readAsDataURL(file);
    } else {
      setAadharCardPdfPreview("");
    }
  };

  const handlePanCardConfirm = () => {
    setFormData((prevData) => ({
      ...prevData,
      fileUploadPanCard: panCardSelectedFile,
    }));
    setIsPanCardConfirmed(true);
    setIsPanCardModalOpen(false);
  };

  const handlePanCardCancel = () => {
    setPanCardSelectedFile(null);
    setIsPanCardConfirmed(false);
    setIsPanCardModalOpen(false);
    setFormData((prevData) => ({
      ...prevData,
      fileUploadPanCard: null,
    }));
  };

  const handleAadharCardConfirm = () => {
    // Set the fileUploadAdharCard in formData
    setFormData((prevData) => ({
      ...prevData,
      fileUploadAdharCard: aadharCardSelectedFile,
    }));

    setIsAdharCardConfirmed(true);
    setIsAadharCardModalOpen(false);
  };

  const handleAadharCardCancel = () => {
    setAadharCardSelectedFile(null);
    setAadharCardSelectedFile(false);
    setIsAadharCardModalOpen(false);
    setFormData((prevData) => ({
      ...prevData,
      fileUploadAdharCard: null,
    }));
  };

  // const handleInputChangeState = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });

  //   if (name === "country") {
  //     // Filter states based on the selected country
  //     const selectedCountry = countries.find(
  //       (country) => country.name === value
  //     );
  //     const filteredStates = states.filter(
  //       (state) => state.countryCode === selectedCountry.isoCode
  //     );
  //     setStatesForSelectedCountry(filteredStates);
  //   }
  // };

  const validateForm = () => {
    const newErrors = {};

    // Example validation rules (customize as needed)
    if (formData.first_name === "") {
      newErrors.first_name = "First Name is required";
    }

    if (formData.last_name.trim() === "") {
      newErrors.last_name = "Last Name is required";
    }

    const gender = formData.gender;
    if (!gender) {
      newErrors.gender = "Gender is required";
    }

    const maritalStatus = formData.maritalStatus;
    if (!maritalStatus) {
      newErrors.maritalStatus = "MaritalStatus is required";
    }

    if (formData.dob === "") {
      newErrors.dob = "Date of Birth is required";
    }

    const contact = formData.contact.trim();
    if (contact === "") {
      newErrors.contact = "Phone Number is required";
    } else if (!/^\d{10}$/.test(contact)) {
      newErrors.contact = "Phone Number must be 10 digits";
    }

    const emergencyPhoneNumber = formData.emergencyPhoneNumber.trim();
    if (emergencyPhoneNumber === "") {
      newErrors.emergencyPhoneNumber = "Emergency Phone Number is required";
    } else if (!/^\d{10}$/.test(emergencyPhoneNumber)) {
      newErrors.emergencyPhoneNumber =
        "Emergency Phone Number must be 10 digits";
    }

    if (formData.emailAddress.trim() === "") {
      newErrors.emailAddress = "Email Address is required";
    } else if (!isValidEmail(formData.emailAddress)) {
      newErrors.emailAddress = "Invalid email address";
    }

    if (formData.address.trim() === "") {
      newErrors.address = "Address is required";
    }

    if (formData.city.trim() === "") {
      newErrors.city = "City is required";
    }

    if (formData.state.trim() === "") {
      newErrors.state = "State is required";
    }

    if (formData.zip.trim() === "") {
      newErrors.zip = "ZIP Code is required";
    }
    if (formData.patientGuardianName.trim() === "") {
      newErrors.patientGuardianName = "Patient/Guardian Name is required";
    }

    if (formData.relation.trim() === "") {
      newErrors.relation = "Relation is required";
    }

    if (formData.panCardNumber.trim() !== "") {
      if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(formData.panCardNumber.trim())) {
        newErrors.panCardNumber = "Invalid PAN Card Number format";
      }
    }

    const aadharNumber = formData.aadharCardNumber.trim();
    if (aadharNumber !== "") {
      if (!/^[0-9a-zA-Z]+$/.test(aadharNumber)) {
        newErrors.aadharCardNumber =
          "Aadhar Card Number must only contain alphanumeric characters";
      } else if (aadharNumber.length !== 12) {
        newErrors.aadharCardNumber = "Aadhar Card Number must be 12 characters";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const isValidEmail = (email) => {
    // Simple email validation (customize as needed)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(formData);

    if (validateForm()) {
      try {
        const token = localStorage.getItem("token");

        const formDataToSend = new FormData();

        // Append each field from the state to the FormData object
        for (const key in formData) {
          formDataToSend.append(key, formData[key]);
        }

        const response = await fetch(
          "http://172.21.10.68:4000/insertdata_patient",
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
            },
            body: formDataToSend,
          }
        );

        if (response.ok) {
          console.log("Form data submitted successfully", formData);
          toast.success("Form data submitted successfully");
          handleReset();
        } else {
          console.error("Form submission failed. Please check the errors.");
          toast.error("Form submission failed. Please check the errors.");
        }
      } catch (error) {
        console.error("Error during form submission:", error);
        console.log("Response object:", error.response);
        toast.error("Error during form submission. Please try again later.");
      }
    } else {
      console.error("Form submission failed. Please check the errors.");
      toast.error("Form submission failed. Please check the errors.");
    }
  };

  const handleReset = () => {
    setFormData({
      first_name: "",
      last_name: "",
      gender: "",
      dob: "",
      contact: "",
      alternateNumber: "",
      emailAddress: "",
      maritalStatus: "single",
      address: "",
      city: "",
      state: "",
      zip: "",
      patientGuardianName: "",
      relation: "",
      emergencyPhoneNumber: "",
      panCardNumber: "",
      aadharCardNumber: "",
      fileUploadPanCard: null,
      fileUploadAdharCard: null,
      reasonForRegistration: "",
      additionalNotes: "",
    });

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const country = Country.getAllCountries();
  const states = State.getAllStates();
  // console.log(states);
  // console.log(country);

  return (
    <>
      <div className="px-4 bg-gray-200 h-full overflow-scroll">
        <div className=" bg-gray-600 py-2 text-white uppercase font-semibold rounded-[5px] text-center mb-3 mt-1">
          Patient registration Form
        </div>
        <form onSubmit={handleSubmit}>
          <div className=" bg-white rounded-[5px] px-4 pt-2 pb-4 mb-3">
            <div className="text-center flex flex-col uppercase font-semibold  bg-gray-500 rounded-[5px] py-2 mb-2 text-white">
              <span>Patient Details</span>
            </div>
            <div className="form-row w-full md:px-2 flex flex-col md:flex-row pb-2">
              <div className="w-full md:w-2/3 md:px-2 mb-2 md:mb-0">
                <label className="text-blue-600 font-medium">
                  Patient Name:
                  <span className="text-red-600 pl-1">*</span>
                </label>
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-1/2 mb-2 md:mb-0 md:mr-2">
                    <input
                      className="w-full"
                      type="text"
                      name="first_name"
                      placeholder="First Name"
                      value={formData.first_name}
                      onChange={handleInputChange}
                    />
                    <br />
                    {errors.first_name && (
                      <span className="text-red-500 font-normal">
                        {errors.first_name}
                      </span>
                    )}
                  </div>
                  <div className="w-full md:w-1/2 md:px-2">
                    <input
                      className="w-full"
                      name="last_name"
                      placeholder="Last Name"
                      value={formData.last_name}
                      onChange={handleInputChange}
                    />
                    <br />
                    {errors.last_name && (
                      <span className="text-red-500 font-normal">
                        {errors.last_name}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="md:px-2 w-full md:w-1/3">
                <label className="text-blue-600 font-medium" htmlFor="gender">
                  Select Gender:
                </label>
                <span className="text-red-600 pl-1">*</span>
                <select
                  className="w-full"
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                >
                  <option className="text-sm" value="">
                    Select Your Gender
                  </option>
                  <option className="text-sm" value="male">
                    Male
                  </option>
                  <option className="text-sm" value="female">
                    Female
                  </option>
                  <option className="text-sm" value="other">
                    Other
                  </option>
                </select>
                <br />
                {errors.gender && (
                  <span className="text-red-500 font-normal">
                    {errors.gender}
                  </span>
                )}
              </div>
            </div>

            <div className="w-full md:px-2 flex flex-col md:flex-row pb-2">
              <div className="w-full md:w-[33.33%] md:px-2 mb-2 md:mb-0">
                <label className="text-blue-600 font-medium">
                  Date of Birth:
                  <span className="text-red-600 pl-1">*</span>
                </label>
                <input
                  className="w-full"
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleInputChange}
                />
                {/* <DatePicker
                  className="w-full"
                  selected={formData.dob}
                  onChange={(date) =>
                    setFormData((prevData) => ({ ...prevData, dob: date }))
                  }
                  dateFormat="dd/MM/yyyy"
                  placeholderText="dd/mm/yyyy"
                  showYearDropdown
                  scrollableYearDropdown
                  showTimeSelect={false}
                /> */}
                <br />
                {errors.dob && (
                  <span className="text-red-500 font-normal">{errors.dob}</span>
                )}
              </div>
              <div className="w-full md:w-[33.33%] md:px-2 mb-2 md:mb-0">
                <label className="text-blue-600 font-medium">
                  Contact Number
                  <span className="text-red-600 pl-1">*</span>
                </label>
                <div className="w-full">
                  <input
                    className="w-full"
                    type="number"
                    name="contact"
                    placeholder="Phone Number"
                    value={formData.contact}
                    onChange={handleInputChange}
                  />
                  <br />
                  {errors.contact && (
                    <span className="text-red-500 font-normal">
                      {errors.contact}
                    </span>
                  )}
                </div>
              </div>
              <div className="w-full md:w-[33.33%] md:px-2">
                <label className="text-blue-600 font-medium">
                  AlternateNumber
                </label>
                <br />
                <input
                  className="w-full"
                  type="number"
                  name="alternateNumber"
                  placeholder="Alternate Number"
                  value={formData.alternateNumber}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="w-full md:px-2 flex flex-col md:flex-row pb-2">
              <div className="md:px-2 w-full md:w-2/3">
                <label className="text-blue-600 font-medium" htmlFor="gender">
                  Email Address:
                  <span className="text-red-600 pl-1">*</span>
                </label>
                <br />
                <input
                  className="w-full"
                  type="email"
                  name="emailAddress"
                  placeholder="name@example.com"
                  value={formData.emailAddress}
                  onChange={handleInputChange}
                />
                <br />
                {errors.emailAddress && (
                  <span className="text-red-500 font-normal">
                    {errors.emailAddress}
                  </span>
                )}
              </div>
              <div className="md:px-2 w-full md:w-1/3">
                <label className="text-blue-600 font-medium" htmlFor="gender">
                  Marital Status:
                  <span className="text-red-600 pl-1">*</span>
                </label>
                <select
                  className="w-full"
                  name="maritalStatus"
                  value={formData.maritalStatus}
                  onChange={handleInputChange}
                >
                  <option className="text-sm" value="">
                    Select Your Marital Status
                  </option>
                  <option className="text-sm" value="Married">
                    Married
                  </option>
                  <option className="text-sm" value="Single">
                    Single
                  </option>
                  <option className="text-sm" value="Divorced">
                    Divorced
                  </option>
                  <option className="text-sm" value="Widowed">
                    Widowed
                  </option>
                </select>
                <br />
                {errors.maritalStatus && (
                  <span className="text-red-500 font-normal">
                    {errors.maritalStatus}
                  </span>
                )}
              </div>
            </div>
            <div className="w-full md:px-2 flex flex-col md:flex-row pb-2">
              <div className="w-full md:px-2">
                <label className="text-blue-600 font-medium">
                  Home Address:<span className="text-red-600 pl-1">*</span>
                </label>
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-[55%] md:pr-2 mb-2 md:mb-0 sm:pr-0 sm:mb-0">
                    <input
                      className="w-full"
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="Address"
                    />
                    {errors.address && (
                      <span className="text-red-500 font-normal">
                        {errors.address}
                      </span>
                    )}
                  </div>
                  <div className="w-full md:w-[15%] md:px-2 mb-2 md:mb-0 sm:px-0 sm:mb-0">
                    <input
                      className="w-full"
                      type="text"
                      name="city"
                      placeholder="City"
                      value={formData.city}
                      onChange={handleInputChange}
                    />
                    {errors.city && (
                      <span className="text-red-500 font-normal">
                        {errors.city}
                      </span>
                    )}

                    {/* <select
                      className="w-full"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                    >
                      <option className="text-sm" value="">
                        Select City
                      </option>
                      {country.map((e, i) => (
                        <option className="text-sm" value={e.name}>
                          {e.name}
                        </option>
                      ))}
                    </select>
                    <br />
                    {errors.city && (
                      <span className="text-red-500 font-normal">
                        {errors.city}
                      </span>
                    )} */}
                  </div>
                  <div className="w-full md:w-[15%] md:px-2 mb-2 md:mb-0 sm:px-0 sm:mb-0">
                    <input
                      className="w-full"
                      type="text"
                      name="state"
                      placeholder="State"
                      value={formData.state}
                      onChange={handleInputChange}
                    />
                    {errors.state && (
                      <span className="text-red-500 font-normal">
                        {errors.state}
                      </span>
                    )}
                    {/* <select
                      className="w-full"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                    >
                      <option className="text-sm" value="">
                        Select State
                      </option>
                      {states.map((e, i) => (
                        <option className="text-sm" value={e.name}>
                          {e.name}
                        </option>
                      ))}
                    </select>
                    <br />
                    {errors.state && (
                      <span className="text-red-500 font-normal">
                        {errors.state}
                      </span>
                    )} */}
                  </div>
                  <div className="w-full md:w-[15%] md:pl-2 sm:pl-0">
                    <input
                      className="w-full"
                      type="number"
                      name="zip"
                      placeholder="Zip"
                      value={formData.zip}
                      onChange={handleInputChange}
                    />
                    {errors.zip && (
                      <span className="text-red-500 font-normal">
                        {errors.zip}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-[5px] px-4 pt-2 pb-4 mb-3">
            <div className="text-center flex flex-col uppercase font-semibold  bg-gray-500 rounded-[5px] py-2 mb-2 text-white">
              <span>Emergency Contact</span>
            </div>
            <div className="w-full md:px-2 flex flex-col md:flex-row pb-2">
              <div className="w-full md:w-[33.33%]">
                <label className="text-blue-600 font-medium md:px-2">
                  Patient/Guardian Name:
                  <span className="text-red-600 pl-1">*</span>
                </label>
                <div className="flex flex-row">
                  <div className="md:px-2 w-full">
                    <input
                      className="w-full"
                      type="text"
                      name="patientGuardianName"
                      value={formData.patientGuardianName}
                      onChange={handleInputChange}
                      placeholder="Patient/Guardian name"
                    />
                    <br />
                    {errors.patientGuardianName && (
                      <span className="text-red-500 font-normal">
                        {errors.patientGuardianName}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className="w-full md:w-[33.33%]">
                <label className="text-blue-600 font-medium md:px-2">
                  Relation:
                  <span className="text-red-600 pl-1">*</span>
                </label>
                <div className="flex flex-row">
                  <div className="md:px-2 w-full">
                    <input
                      className="w-full"
                      type="text"
                      name="relation"
                      value={formData.relation}
                      onChange={handleInputChange}
                      placeholder="Relation with Patient"
                    />
                    <br />
                    {errors.relation && (
                      <span className="text-red-500 font-normal">
                        {errors.relation}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className="w-full md:w-[33.33%]">
                <label className="text-blue-600 font-medium md:px-2">
                  Emergency Phone Number:
                  <span className="text-red-600 pl-1">*</span>
                </label>
                <div className="flex flex-row">
                  <div className="md:px-2 w-full">
                    <input
                      className="w-full"
                      type="number"
                      name="emergencyPhoneNumber"
                      placeholder="Emergency Number"
                      value={formData.emergencyPhoneNumber}
                      onChange={handleInputChange}
                    />
                    <br />
                    {errors.emergencyPhoneNumber && (
                      <span className="text-red-500 font-normal">
                        {errors.emergencyPhoneNumber}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-[5px] px-4 pt-2 pb-4 mb-3">
            <div className="text-center flex flex-col uppercase font-semibold  bg-gray-500 rounded-[5px] py-2 mb-2 text-white">
              <span>Documents</span>
            </div>
            <div className="w-full md:px-2 flex flex-col md:flex-row pb-2">
              <div className="w-full md:w-[50%]">
                <label className="text-blue-600 font-medium md:px-2">
                  Pan Card:
                </label>
                <div className="flex flex-row w-full">
                  <div className="md:px-2 w-full">
                    <input
                      className="w-full"
                      type="text"
                      name="panCardNumber"
                      placeholder="Pan Number"
                      value={formData.panCardNumber}
                      onChange={handleInputChange}
                      maxLength="10"
                    />
                    <br />
                    {errors.panCardNumber && (
                      <span className="text-red-500 font-normal">
                        {errors.panCardNumber}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className="w-full md:w-[50%]">
                <label className="text-blue-600 font-medium md:px-2">
                  Please Upload your Pan card:
                </label>
                <div className="md:px-2 w-full md:w-[100%] md:ml-auto flex justify-start md:justify-start ">
                  <input
                    className="w-full border-none"
                    type="file"
                    name="fileUploadPanCard"
                    id="fileUploadPanCard"
                    style={{ display: "none" }}
                    ref={panCardFileInputRef}
                    onChange={handlePanCardFileChange}
                  />
                  <label htmlFor="fileUploadPanCard">
                    {localStorage.getItem("fileuplodedPancard") ? (
                      // <button
                      //   className="button bg-gray-400"
                      //   onClick={handleAadharCardButtonClick}
                      // >
                      //   File Uploaded
                      // </button>
                      <div className="text-black-600">
                        File already uploaded
                      </div>
                    ) : (
                      <button
                        className="button bg-gray-400"
                        onClick={handlePanCardButtonClick}
                      >
                        Upload
                      </button>
                    )}
                    {isPanCardConfirmed && panCardSelectedFile && (
                      <span className="text-blue-600 font-normal pl-2">
                        {panCardSelectedFile.name}
                      </span>
                    )}
                    <br />
                    {errors.fileUploadPanCard && (
                      <span className="text-red-500 font-normal">
                        {errors.fileUploadPanCard}
                      </span>
                    )}
                  </label>
                </div>

                <Modal
                  style={{
                    position: "fixed",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    backgroundColor: "#351414",
                    padding: "20px",
                    borderRadius: "8px",
                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                    zIndex: "1000",
                  }}
                  isOpen={isPanCardModalOpen}
                >
                  {/* Pan Card PDF Preview */}
                  {panCardModalLoading ? (
                    <p>Loading...</p>
                  ) : (
                    panCardPdfPreview && (
                      <div>
                        <iframe
                          title="Pan Card PDF Preview"
                          src={panCardPdfPreview}
                          width="100%"
                          style={{
                            marginTop: "10px",
                            borderRadius: "5px",
                            height: "73vh",
                            border: "1px solid gray",
                          }}
                        ></iframe>
                        <div className="flex justify-center">
                          <button
                            className="button text-white"
                            style={{
                              background: "green",
                              marginTop: "10px",
                            }}
                            onClick={handlePanCardConfirm}
                          >
                            Confirm
                          </button>
                          <button
                            className="button text-white"
                            style={{
                              marginLeft: "10px",
                              marginTop: "10px",
                            }}
                            onClick={handlePanCardCancel}
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    )
                  )}
                </Modal>
              </div>
            </div>
            <div className="w-full md:px-2 flex flex-col md:flex-row pb-2">
              <div className="w-full md:w-[50%]">
                <label className="text-blue-600 font-medium md:px-2">
                  Aadhar Card:
                </label>
                <div className="flex flex-row w-full">
                  <div className="md:px-2 w-full">
                    <input
                      className="w-full"
                      type="text"
                      name="aadharCardNumber"
                      placeholder="Pan Number"
                      value={formData.aadharCardNumber}
                      onChange={handleInputChange}
                      maxLength="16"
                    />
                    <br />
                    {errors.aadharCardNumber && (
                      <span className="text-red-500 font-normal">
                        {errors.aadharCardNumber}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className="w-full md:w-[50%]">
                {/* Aadhar Card Section */}
                <label className="text-blue-600 font-medium md:px-2 ">
                  Please Upload your Aadhar card:
                </label>
                <div className="md:px-2 w-full md:w-[100%] md:ml-auto flex justify-start md:justify-start ">
                  <input
                    className="w-full border-none"
                    type="file"
                    name="fileUploadAdharCard"
                    id="fileUploadAdharCard"
                    style={{ display: "none" }}
                    ref={aadharCardFileInputRef}
                    onChange={handleAadharCardFileChange}
                  />
                  <label htmlFor="fileUploadAdharCard">
                    {localStorage.getItem("fileuplodedAdharcard") ? (
                      // <button
                      //   className="button bg-gray-400"
                      //   onClick={handleAadharCardButtonClick}
                      // >
                      //   File Uploaded
                      // </button>
                      <div className="text-black-600">
                        File already uploaded
                      </div>
                    ) : (
                      <button
                        className="button bg-gray-400"
                        onClick={handleAadharCardButtonClick}
                      >
                        Upload
                      </button>
                    )}
                    {isAdharCardConfirmed && aadharCardSelectedFile && (
                      <span className="text-blue-600 font-normal pl-2">
                        {aadharCardSelectedFile.name
                          ? aadharCardSelectedFile.name
                          : `${storedResponseData?.Name}.pdf`}
                      </span>
                    )}
                    <br />
                    {errors.fileUploadAdharcard && (
                      <span className="text-red-500 font-normal">
                        {errors.fileUploadAdharcard}
                      </span>
                    )}
                  </label>
                </div>
                <Modal isOpen={isAadharCardModalOpen}>
                  {/* Aadhar Card PDF Preview */}
                  {aadharCardModalLoading ? (
                    <p>Loading...</p>
                  ) : (
                    aadharCardPdfPreview && (
                      <div>
                        <iframe
                          title="Aadhar Card PDF Preview"
                          src={aadharCardPdfPreview}
                          width="100%"
                          style={{
                            marginTop: "10px",
                            borderRadius: "5px",
                            height: "73vh",
                            border: "1px solid gray",
                          }}
                        ></iframe>
                        <div className="flex justify-center">
                          <div>
                            <button
                              className="button text-white"
                              style={{
                                background: "green",
                                marginTop: "10px",
                              }}
                              onClick={handleAadharCardConfirm}
                            >
                              Confirm
                            </button>
                          </div>
                          <div>
                            <button
                              className="button text-white"
                              style={{
                                marginLeft: "10px",
                                marginTop: "10px",
                              }}
                              onClick={handleAadharCardCancel}
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      </div>
                    )
                  )}
                </Modal>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-[5px] px-4 pt-2 pb-4 mb-3">
            <div className="text-center flex flex-col uppercase font-semibold  bg-gray-500 rounded-[5px] py-2 mb-2 text-white">
              <span>Medical History</span>
            </div>
            <div className="w-full md:px-2 flex flex-col md:flex-row pb-2">
              <div className="w-full md:w-[50%]">
                <label className="text-blue-600 font-medium md:px-2">
                  Reason for Registration :
                </label>
                <div className="flex flex-row w-full">
                  <div className="md:px-2 w-full">
                    <input
                      className="w-full"
                      type="text"
                      name="reasonForRegistration"
                      value={formData.reasonForRegistration}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
              <div className="w-full md:w-[50%] md:mt-0">
                <label className="text-blue-600 font-medium md:px-2">
                  Additional Notes:
                </label>
                <div className="flex flex-row w-full">
                  <div className="md:px-2 w-full">
                    <input
                      className="w-full"
                      name="additionalNotes"
                      value={formData.additionalNotes}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center flex-row pt-4">
            <button
              className="border px-3 py-2 mr-2 text-white bg-gray-600 rounded font-medium"
              onClick={handleSubmit}
            >
              Submit
            </button>
            <button
              className="border px-3 py-2 mr-2 text-white bg-gray-600 rounded font-medium"
              //   onClick={handleSubmitAllForms}
            >
              Cancel
            </button>
            <button
              className="border px-3 py-2 mr-2 text-white bg-gray-600 rounded font-medium"
              onClick={handleReset}
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ResistrationForm;
