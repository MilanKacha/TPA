import { useLocation, useNavigate } from "react-router-dom";
import "./Form.css";
import React, { useEffect, useRef } from "react";
import insuranceCompanies from "../../assets/constants";
import {
  hospitalData,
  hospitalDeclaration,
  patientDeclaration,
} from "../../assets/constants";

const PreAuthTpaPdf = ({ theme }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const companyName = location.state.tpaName;

  const hospitalName = useRef();
  const hospitalAddress = useRef();
  const hospitalRohiniID = useRef();
  const hospitalEmailID = useRef();
  const patientName = useRef();
  const patientGenderMale = useRef();
  const patientGenderFemale = useRef();
  const patientGenderThird = useRef();
  const patientYears = useRef();
  const patientMonths = useRef();
  const patientDOB = useRef();
  const patientContact = useRef();
  const patientRelativeContact = useRef();
  const patientInsuedID = useRef();
  const policyNumber = useRef();
  const empID = useRef();
  const otherMedclaimYes = useRef();
  const otherMedclaimNo = useRef();
  const otherMedclaimName = useRef();
  const otherMedclaimDetails = useRef();
  const familyPhysicianYes = useRef();
  const familyPhysicianNo = useRef();
  const familyPhysicianName = useRef();
  const familyPhysicianContact = useRef();
  const patientAddress = useRef();
  const patientOccupation = useRef();
  const treatingDoctor = useRef();
  const doctorContact = useRef();
  const illnessName = useRef();
  const relevantFindings = useRef();
  const ailmentDuration = useRef();
  const firstConsultation = useRef();
  const pastAilment = useRef();
  const provisionalDiagnosis = useRef();
  const icdCode = useRef();
  const medicalManagement = useRef();
  const surgicalManagement = useRef();
  const intensiveCare = useRef();
  const investigation = useRef();
  const nonAllopathicTreatment = useRef();
  const investigationMedicalManagement = useRef();
  const drugAdministration = useRef();
  const surgeryName = useRef();
  const icdPCSCode = useRef();
  const otherTreatment = useRef();
  const injuryOccur = useRef();
  const isRTAYes = useRef();
  const isRTANo = useRef();
  const injuryDate = useRef();
  const policeReportedYes = useRef();
  const policeReportedNo = useRef();
  const firNo = useRef();
  const injuryAbuseAlcoholYes = useRef();
  const injuryAbuseAlcoholNo = useRef();
  const alcoholTestConductedYes = useRef();
  const alcoholTestConductedNo = useRef();
  const maternityTypeG = useRef();
  const maternityTypeP = useRef();
  const maternityTypeL = useRef();
  const maternityTypeA = useRef();
  const deliveryDate = useRef();
  const admissionDate = useRef();
  const admissionTime = useRef();
  const hospitalizationEventEmergency = useRef();
  const hospitalizationEventPlanned = useRef();
  const diabetes = useRef();
  const heartDisease = useRef();
  const hypertension = useRef();
  const hyperlipidemias = useRef();
  const osteoarthritis = useRef();
  const astmaCOPDBronchitis = useRef();
  const cancer = useRef();
  const alcoholDrugAbuse = useRef();
  const hivSTDRetatenate = useRef();
  const otherAilment = useRef();
  const expectedDays = useRef();
  const icuDays = useRef();
  const roomType = useRef();
  const rentNursingServiceDiet = useRef();
  const investigationCostDiagnostic = useRef();
  const icuCharges = useRef();
  const otCharges = useRef();
  const surgeonAnesthetistConsultation = useRef();
  const medicinesConsumableImplantCost = useRef();
  const otherCharges = useRef();
  const allInclusiveCharges = useRef();
  const expectedTotalCharges = useRef();
  const doctorQualification = useRef();
  const doctorRegNumber = useRef();
  const date = useRef();

  const backendData = () => {
    hospitalName.current.value = hospitalData.hospitalName;
    hospitalAddress.current.value = hospitalData.hospitalAddress;
    hospitalRohiniID.current.value = hospitalData.hospitalRohiniID;
    hospitalName.current.value = hospitalData.hospitalName;
    hospitalAddress.current.value = hospitalData.hospitalAddress;
    hospitalRohiniID.current.value = hospitalData.hospitalRohiniID;
    hospitalEmailID.current.value = hospitalData.hospitalEmailID;
    patientName.current.value = hospitalData.patientName;

    if (hospitalData.patientGender === "male") {
      patientGenderMale.current.checked = hospitalData.patientGender;
    } else if (hospitalData.patientGender === "female") {
      patientGenderFemale.current.checked = hospitalData.patientGender;
    } else {
      patientGenderThird.current.checked =
        hospitalData.patientGender || "other";
    }

    patientDOB.current.value = hospitalData.patientDOB;
    patientContact.current.value = hospitalData.patientContact;
    patientRelativeContact.current.value = hospitalData.patientRelativeContact;
    patientInsuedID.current.value = hospitalData.patientInsuedID;
    policyNumber.current.value = hospitalData.policyNumber;
    empID.current.value = hospitalData.empID;

    if (hospitalData.otherMedclaim === "yes") {
      otherMedclaimYes.current.checked = hospitalData.otherMedclaim;
    } else {
      otherMedclaimNo.current.checked = hospitalData.otherMedclaim;
    }

    otherMedclaimName.current.value = hospitalData.otherMedclaimName;
    otherMedclaimDetails.current.value = hospitalData.otherMedclaimDetails;

    if (hospitalData.otherMedclaim === "yes") {
      otherMedclaimYes.current.checked = hospitalData.otherMedclaim;
    } else {
      otherMedclaimNo.current.checked = hospitalData.otherMedclaim;
    }

    // familyPhysician.current.value = hospitalData.familyPhysician;
    familyPhysicianName.current.value = hospitalData.familyPhysicianName;
    familyPhysicianContact.current.value = hospitalData.familyPhysicianContact;
    patientAddress.current.value = hospitalData.patientAddress;
    patientOccupation.current.value = hospitalData.patientOccupation;
    treatingDoctor.current.value = hospitalData.treatingDoctor;
    doctorContact.current.value = hospitalData.doctorContact;
    illnessName.current.value = hospitalData.illnessName;
    relevantFindings.current.value = hospitalData.relevantFindings;
    ailmentDuration.current.value = hospitalData.ailmentDuration;
    firstConsultation.current.value = hospitalData.firstConsultation;
    pastAilment.current.value = hospitalData.pastAilment;
    provisionalDiagnosis.current.value = hospitalData.provisionalDiagnosis;
    icdCode.current.value = hospitalData.icdCode;
    medicalManagement.current.value = hospitalData.medicalManagement;
    surgicalManagement.current.value = hospitalData.surgicalManagement;
    intensiveCare.current.value = hospitalData.intensiveCare;
    investigation.current.value = hospitalData.investigation;
    nonAllopathicTreatment.current.value = hospitalData.nonAllopathicTreatment;
    investigationMedicalManagement.current.value =
      hospitalData.investigationMedicalManagement;
    drugAdministration.current.value = hospitalData.drugAdministration;
    surgeryName.current.value = hospitalData.surgeryName;
    icdPCSCode.current.value = hospitalData.icdPCSCode;
    otherTreatment.current.value = hospitalData.otherTreatment;
    injuryOccur.current.value = hospitalData.injuryOccur;
    // isRTA.current.value = hospitalData.isRTA;
    injuryDate.current.value = hospitalData.injuryDate;
    // policeReported.current.value = hospitalData.policeReported;
    firNo.current.value = hospitalData.firNo;
    // injuryAbuseAlcohol.current.value = hospitalData.injuryAbuseAlcohol;
    // alcoholTestConducted.current.value = hospitalData.alcoholTestConducted;
    // maternityType.current.value = hospitalData.maternityType;
    deliveryDate.current.value = hospitalData.deliveryDate;
    admissionDate.current.value = hospitalData.admissionDate;
    // hospitalizationEvent.current.value = hospitalData.hospitalizationEvent;
    diabetes.current.value = hospitalData.diabetes;
    heartDisease.current.value = hospitalData.heartDisease;
    hypertension.current.value = hospitalData.hypertension;
    hyperlipidemias.current.value = hospitalData.hyperlipidemias;
    osteoarthritis.current.value = hospitalData.osteoarthritis;
    astmaCOPDBronchitis.current.value = hospitalData.astmaCOPDBronchitis;
    cancer.current.value = hospitalData.cancer;
    alcoholDrugAbuse.current.value = hospitalData.alcoholDrugAbuse;
    hivSTDRetatenate.current.value = hospitalData.hivSTDRetatenate;
    otherAilment.current.value = hospitalData.otherAilment;
    expectedDays.current.value = hospitalData.expectedDays;
    icuDays.current.value = hospitalData.icuDays;
    roomType.current.value = hospitalData.roomType;
    rentNursingServiceDiet.current.value = hospitalData.rentNursingServiceDiet;
    investigationCostDiagnostic.current.value =
      hospitalData.investigationCostDiagnostic;
    icuCharges.current.value = hospitalData.icuCharges;
    otCharges.current.value = hospitalData.otCharges;
    surgeonAnesthetistConsultation.current.value =
      hospitalData.surgeonAnesthetistConsultation;
    medicinesConsumableImplantCost.current.value =
      hospitalData.medicinesConsumableImplantCost;
    otherCharges.current.value = hospitalData.otherCharges;
    allInclusiveCharges.current.value = hospitalData.allInclusiveCharges;
    expectedTotalCharges.current.value = hospitalData.expectedTotalCharges;
    doctorQualification.current.value = hospitalData.doctorQualification;
    doctorRegNumber.current.value = hospitalData.doctorRegNumber;
  };

  useEffect(() => {
    setTimeout(() => {
      backendData();
    }, 3000);
  }, []);

  const formHandler = (e) => {
    e.preventDefault();

    const formData = {
      hospitalName: hospitalName.current.value.trim(),
      hospitalAddress: hospitalAddress.current.value.trim(),
      hospitalRohiniID: hospitalRohiniID.current.value.trim(),
    };
    console.log(formData);
  };

  const filteredLogo = insuranceCompanies.filter((item) =>
    item.insuranceCompany.includes(companyName)
  );

  return (
    <div className={`bg-[]`}>
      <div className="h-[79vh] bg-white mx-3 mt-3 overflow-y-auto border">
        <form onSubmit={formHandler}>
          <div className="flex justify-start m-2"></div>
          <div className="m-5 border border-black ">
            <div className="flex justify-center font-semibold">
              REQUEST FOR CASHLESS HOSPITALISATION FOR HEALTH INSURANCE POLICY
            </div>
            <div className="w-full">
              <div className="flex justify-between w-[60%]">
                <img
                  className="mx-[1%] h-[50px] w-[120px]"
                  src={filteredLogo[0].logo}
                  alt="aditya logo"
                />
                <div>(TO BE FILLED IN BLOCK LETTERS)</div>
              </div>
            </div>
            <div className="flex justify-center font-semibold underline">
              DETAILS OF THE THIRD PARTY ADMINISTRATOR/INSURER/HOSPITAL:
            </div>
            <div className="w-full mx-[1%] mt-[0.5%]">
              a. Name of TPA/Insurance company:{" "}
              <span className="font-semibold">
                PARAMOUNT HEALTH SERVICES & INSURANCE TPA PVT.LTD.
              </span>
              <div className="flex justify-end w-[90%]">
                (IRDA LICENCE No .006)
              </div>
            </div>
            <div className="ml-[2%] text-[#0D6EFD] font-semibold">
              Cashless Request E-mail Id:{" "}
              <a
                href="mailto:al.request@paramounttpa.com"
                className=" decoration-transparent">
                al.request@paramounttpa.com
              </a>
            </div>
            <div className="mx-[1%] mt-[0.5%]">
              b. Toll free phone number: 1800-22-66 55
            </div>
            <div className="mx-[1%] mt-[0.5%]">
              c. Toll free fax: 022-66444754/66444755/66444709
            </div>
            <div className="m-[1%] mt-[0.5%] flex justify-between">
              d. Name of the Hospital:
              <input
                type="text"
                className="border-black border-b-2 w-[80%]"
                ref={hospitalName}
              />
            </div>
            <div className="mr-[1%] ml-[3%] mt-[0.5%] flex justify-between">
              i. Address
              <input
                type="text"
                className="border-black border-b-2 w-[90%]"
                ref={hospitalAddress}
              />
            </div>
            <div className="mr-[1%] ml-[3%] mt-[0.5%] flex justify-between">
              ii. Rohini ID:
              <input
                type="text"
                className="border-black border-b-2 w-[90%]"
                ref={hospitalRohiniID}
              />
            </div>
            <div className="ml-[3%] mr-[1%] mt-[0.5%] flex justify-between">
              iii. E-mail ID:
              <input
                type="text"
                className="border-black border-b-2 w-[90%]"
                ref={hospitalEmailID}
              />
            </div>
            <div className="mt-[0.5%] flex justify-center font-semibold underline">
              TO BE FILLED BY INSURED/PATIENT:
            </div>
            <div className="mx-[1%] mt-[0.5%] flex justify-between">
              A. Name of the Patient:
              <input
                type="text"
                className="border-black border-b-2 w-[80%]"
                ref={patientName}
              />
            </div>
            <div className="w-[80%] mx-[1%] mt-[1%] flex justify-between items-center ">
              B. Gender:
              <div className="flex">
                <input
                  type="radio"
                  className="w-5 mr-1"
                  name="gender"
                  value="male"
                  ref={patientGenderMale}
                />
                <div>Male</div>
              </div>
              <div className="flex">
                <input
                  type="radio"
                  className="w-5 mr-1"
                  name="gender"
                  value="female"
                  ref={patientGenderFemale}
                />
                <div>Female</div>
              </div>
              <div className="flex">
                <input
                  type="radio"
                  className="w-5 mr-1"
                  name="gender"
                  value="third"
                  ref={patientGenderThird}
                />
                <div>Third Gender</div>
              </div>
            </div>
            <div className="w-[80%] mx-[1%] mt-[1%] flex justify-between items-center ">
              C. Age:
              <div className="flex">
                <input
                  type="number"
                  className="border-b-2 border-black mr-1"
                  maxLength={3}
                  ref={patientYears}
                />
                <div>Years</div>
              </div>
              <div className="flex">
                <input
                  type="number"
                  className="border-b-2 border-black mr-1"
                  maxLength={2}
                  ref={patientMonths}
                />
                <div>Months</div>
              </div>
            </div>
            <div className="mx-[1%] mt-[1%] flex  items-center ">
              D. Date of Birth:
              <div className="flex">
                <input
                  type="text"
                  className="ml-[4%] mr-1 pl-[40%]"
                  placeholder="DD/MM/YYYY"
                  maxLength={10}
                  ref={patientDOB}
                />
              </div>
            </div>

            <div className="mx-[1%] mt-[0.5%] flex justify-between">
              E. Contact number:
              <input
                type="text"
                className="border-black border-b-2 w-[85%]"
                ref={patientContact}
              />
            </div>
            <div className="mx-[1%] mt-[0.5%] flex justify-between">
              F. Contact number of attending Relative:
              <input
                type="text"
                className="border-black border-b-2 w-[75%]"
                ref={patientRelativeContact}
              />
            </div>
            <div className="mx-[1%] mt-[0.5%] flex justify-between">
              G. Insured Card ID number:
              <input
                type="text"
                className="border-black border-b-2 w-[75%]"
                ref={patientInsuedID}
              />
            </div>
            <div className="mx-[1%] mt-[0.5%] flex justify-between">
              H. Policy number/Name of Corporate:
              <input
                type="text"
                className="border-black border-b-2 w-[75%]"
                ref={policyNumber}
              />
            </div>
            <div className="mx-[1%] mt-[0.5%] flex justify-between">
              I. Employee ID:
              <input
                type="text"
                className="border-black border-b-2 w-[85%]"
                ref={empID}
              />
            </div>
            <div className="w-[80%] mx-[1%] mt-[1%] flex justify-between items-center ">
              J. Currently do you have any other mediclaim/health insurance:
              <div className="flex">
                <input
                  type="radio"
                  className="w-5 mr-1"
                  name="mediclaim"
                  value="yes"
                  ref={otherMedclaimYes}
                />
                <div>Yes</div>
              </div>
              <div className="flex">
                <input
                  type="radio"
                  className="w-5 mr-1"
                  name="mediclaim"
                  value="no"
                  ref={otherMedclaimNo}
                />
                <div>No</div>
              </div>
            </div>
            <div className="ml-[3%] mr-[1%] mt-[0.5%] flex justify-between">
              i. Company Name:
              <input
                type="text"
                className="border-black border-b-2 w-[87%]"
                ref={otherMedclaimName}
              />
            </div>
            <div className="ml-[3%] mr-[1%] mt-[0.5%] flex justify-between">
              i. Give Details:
              <input
                type="text"
                className="border-black border-b-2 w-[87%]"
                ref={otherMedclaimDetails}
              />
            </div>
            <div className="w-[80%] mx-[1%] mt-[1%] flex justify-between items-center ">
              K. Do you have a family Physician:
              <div className="flex">
                <input
                  type="radio"
                  className="w-5 mr-1"
                  name="familyPhysician"
                  value="yes"
                  ref={familyPhysicianYes}
                />
                <div>Yes</div>
              </div>
              <div className="flex">
                <input
                  type="radio"
                  className="w-5 mr-1"
                  name="familyPhysician"
                  value="no"
                  ref={familyPhysicianNo}
                />
                <div>No</div>
              </div>
            </div>
            <div className="mx-[1%] mt-[0.5%] flex justify-between">
              L. Name of the Family Physician:
              <input
                type="text"
                className="border-black border-b-2 w-[75%]"
                ref={familyPhysicianName}
              />
            </div>
            <div className="mx-[1%] mt-[0.5%] flex justify-between">
              M. Contact number, if any:
              <input
                type="text"
                className="border-black border-b-2 w-[75%]"
                ref={familyPhysicianContact}
              />
            </div>
            <div className="mx-[1%] mt-[0.5%] flex justify-between">
              N. Current Address of Insured Patient:
              <input
                type="text"
                className="border-black border-b-2 w-[75%]"
                ref={patientAddress}
              />
            </div>
            <div className="mx-[1%] mt-[0.5%] flex justify-between">
              O. Occupation of Insured Patient:
              <input
                type="text"
                className="border-black border-b-2 w-[75%]"
                ref={patientOccupation}
              />
            </div>
            <div className="flex justify-center font-semibold">
              (PLEASE COMPLETE DECLARATION OF THIS FORM)
            </div>
          </div>
          <div className="m-5 border border-black ">
            <div className="mt-[0.5%] flex justify-center font-semibold underline">
              TO BE FILLED BY TREATING DOCTOR /HOSPITAL:
            </div>
            <div className="mx-[1%] mt-[0.5%] flex justify-between">
              A. Name of the treating Doctor:
              <input
                type="text"
                className="border-black border-b-2 w-[75%]"
                ref={treatingDoctor}
              />
            </div>
            <div className="mx-[1%] mt-[0.5%] flex justify-between">
              B. Contact Number:
              <input
                type="text"
                className="border-black border-b-2 w-[75%]"
                ref={doctorContact}
              />
            </div>
            <div className="mx-[1%] mt-[0.5%] flex justify-between">
              C. Nature of Illness / Disease with presenting complaint:
              <input
                type="text"
                className="border-black border-b-2 w-[60%]"
                ref={illnessName}
              />
            </div>
            <div className="mx-[1%] mt-[0.5%] flex justify-between">
              D. Relevant Critical Findings:
              <input
                type="text"
                className="border-black border-b-2 w-[75%]"
                ref={relevantFindings}
              />
            </div>
            <div className="mx-[1%] mt-[0.5%] flex justify-between">
              E. Duration of present ailment:
              <div className="mr-[30%]">
                <input
                  type="text"
                  className="border-black border-b-2"
                  ref={ailmentDuration}
                />
                Days
              </div>
            </div>
            <div className="ml-[3%] mr-[1%] mt-[0.5%] flex justify-between">
              i. Date of First consultation:
              <input
                type="text"
                className="border-black border-b-2 w-[76.5%]"
                ref={firstConsultation}
              />
            </div>
            <div className="ml-[3%] mr-[1%] mt-[0.5%] flex justify-between">
              ii. Past history of present ailment, if any:
              <input
                type="text"
                className="border-black border-b-2 w-[76.5%]"
                ref={pastAilment}
              />
            </div>
            <div className="mx-[1%] mt-[0.5%] flex justify-between">
              F. Provisional Diagnosis:
              <input
                type="text"
                className="border-black border-b-2 w-[85%]"
                ref={provisionalDiagnosis}
              />
            </div>
            <div className="ml-[3%] mr-[1%] mt-[0.5%] flex justify-between">
              i. ICD 10 code:
              <input
                type="text"
                className="border-black border-b-2 w-[87%]"
                ref={icdCode}
              />
            </div>
            <div className="mx-[1%] mt-[0.5%] flex justify-between">
              G. Proposed line of treatment:
            </div>
            <div className="w-[30%] ml-[3%] mt-[1%] flex justify-between items-center ">
              i. Medical Management
              <div className="flex justify-start">
                <input
                  type="checkbox"
                  className="  border-black border-b-2"
                  name="Medical Management"
                  ref={medicalManagement}
                />
              </div>
            </div>
            <div className="w-[30%] ml-[3%] mt-[1%] flex justify-between items-center ">
              ii. Surgical Management
              <div className="flex justify-start">
                <input
                  type="checkbox"
                  className="  border-black border-b-2"
                  name="Surgical Management"
                  ref={surgicalManagement}
                />
              </div>
            </div>
            <div className="w-[30%] ml-[3%] mt-[1%] flex justify-between items-center ">
              iii. Intensive care
              <div className="flex justify-start">
                <input
                  type="checkbox"
                  className="  border-black border-b-2"
                  name="Intensive care"
                  ref={intensiveCare}
                />
              </div>
            </div>
            <div className="w-[30%] ml-[3%] mt-[1%] flex justify-between items-center ">
              iv. Investigation
              <div className="flex justify-start">
                <input
                  type="checkbox"
                  className="  border-black border-b-2"
                  name="Investigation"
                  ref={investigation}
                />
              </div>
            </div>
            <div className="w-[30%] ml-[3%] mt-[1%] flex justify-between items-center ">
              v. Non-allopathic treatment
              <div className="flex justify-start">
                <input
                  type="checkbox"
                  className="  border-black border-b-2"
                  name="Non-allopathic treatment"
                  ref={nonAllopathicTreatment}
                />
              </div>
            </div>
            <div className="mx-[1%] mt-[0.5%] flex justify-between">
              H. If Investigation and / or Medical Management, provide details:
              <input
                type="text"
                className="border-black border-b-2 w-[60%]"
                ref={investigationMedicalManagement}
              />
            </div>
            <div className="ml-[3%] mr-[1%] mt-[0.5%] flex justify-between">
              i. Route of Drug Administration:
              <input
                type="text"
                className="border-black border-b-2 w-[75%]"
                ref={drugAdministration}
              />
            </div>
            <div className="mx-[1%] mt-[0.5%] flex justify-between">
              I. If surgical, name of surgery:
              <input
                type="text"
                className="border-black border-b-2 w-[73.5%]"
                ref={surgeryName}
              />
            </div>
            <div className="ml-[3%] mr-[1%] mt-[0.5%] flex justify-between">
              i. ICD 10 PCS code:
              <input
                type="text"
                className="border-black border-b-2 w-[75%]"
                ref={icdPCSCode}
              />
            </div>
            <div className="mx-[1%] mt-[0.5%] flex justify-between">
              J. If other treatment, provide details:
              <input
                type="text"
                className="border-black border-b-2 w-[73.5%]"
                ref={otherTreatment}
              />
            </div>
            <div className="mx-[1%] mt-[0.5%] flex justify-between">
              K. How did injury occur:
              <input
                type="text"
                className="border-black border-b-2 w-[73.5%]"
                ref={injuryOccur}
              />
            </div>
            <div className="mx-[1%] mt-[0.5%] flex justify-between">
              L. In case of accident:
            </div>
            <div className="w-[80%] ml-[3%] mt-[1%] flex justify-between items-center">
              i. Is it RTA:
              <div className="flex">
                <input
                  type="radio"
                  className="w-5 mr-1"
                  name="RTA"
                  value="yes"
                  ref={isRTAYes}
                />
                <div>Yes</div>
              </div>
              <div className="flex">
                <input
                  type="radio"
                  className="w-5 mr-1"
                  name="RTA"
                  value="no"
                  ref={isRTANo}
                />
                <div>No</div>
              </div>
            </div>
            <div className="w-[60%] ml-[3%] mt-[1%] flex justify-between items-center ">
              ii. Date of Injury:
              <div className="flex">
                <input
                  type="text"
                  className=" mr-1 pl-[40%]"
                  placeholder="DD/MM/YYYY"
                  maxLength={10}
                  ref={injuryDate}
                />
              </div>
            </div>
            <div className="w-[80%] ml-[3%] mt-[1%] flex justify-between items-center ">
              iii. Report to Police:
              <div className="flex">
                <input
                  type="radio"
                  className="w-5 mr-1"
                  name="Police"
                  value="yes"
                  ref={policeReportedYes}
                />
                <div>Yes</div>
              </div>
              <div className="flex">
                <input
                  type="radio"
                  className="w-5 mr-1 ml-[50px]"
                  name="Police"
                  value="no"
                  ref={policeReportedNo}
                />
                <div>No</div>
              </div>
            </div>
            <div className="w-[80%] ml-[3%] mt-[1%] flex justify-between items-center ">
              iv. FIR No.
              <input
                type="text"
                className=" mr-1 pl-[40%] border-b-slate-400"
                maxLength={10}
                ref={firNo}
              />
            </div>
            <div className="w-[80%] ml-[3%] mt-[1%] flex justify-between items-center ">
              v. Injury / Disease caused due to substance abuse/alcohol
              consumption:
              <div className="flex">
                <input
                  type="radio"
                  className="w-5 mr-1"
                  name="alcohol"
                  value="yes"
                  ref={injuryAbuseAlcoholYes}
                />
                <div>Yes</div>
              </div>
              <div className="flex">
                <input
                  type="radio"
                  className="w-5 mr-1 ml-[375px]"
                  name="alcohol"
                  value="no"
                  ref={injuryAbuseAlcoholNo}
                />
                <div>No</div>
              </div>
            </div>
            <div className="w-[80%] ml-[3%] mt-[1%] flex justify-between items-center ">
              vi. Test conducted to establish this (if yes, attach report):
              <div className="flex">
                <input
                  type="radio"
                  className="w-5 mr-1"
                  name="Test"
                  value="yes"
                  ref={alcoholTestConductedYes}
                />
                <div>Yes</div>
              </div>
              <div className="flex">
                <input
                  type="radio"
                  className="w-5 mr-1 ml-[282px]"
                  name="Test"
                  value="no"
                  ref={alcoholTestConductedNo}
                />
                <div>No</div>
              </div>
            </div>
            <div className="ml-[1%] mr-[4%] mt-[0.5%] flex justify-between">
              M. In case of Maternity:
              <div className="flex">
                <input
                  type="radio"
                  className="w-5 mr-1"
                  name="Maternity"
                  value="G"
                  ref={maternityTypeG}
                />
                <div>G</div>
              </div>
              <div className="flex">
                <input
                  type="radio"
                  className="w-5 mr-1"
                  name="Maternity"
                  value="P"
                  ref={maternityTypeP}
                />
                <div>P</div>
              </div>
              <div className="flex">
                <input
                  type="radio"
                  className="w-5 mr-1"
                  name="Maternity"
                  value="L"
                  ref={maternityTypeL}
                />
                <div>L</div>
              </div>
              <div className="flex">
                <input
                  type="radio"
                  className="w-5 mr-1"
                  name="Maternity"
                  value="A"
                  ref={maternityTypeA}
                />
                <div>A</div>
              </div>
            </div>
            <div className="w-[60%] ml-[3%] mt-[1%] flex justify-between items-center ">
              i. Expected date of Delivery:
              <div className="flex">
                <input
                  type="text"
                  className=" mr-1 pl-[40%]"
                  placeholder="DD/MM/YYYY"
                  maxLength={10}
                  ref={deliveryDate}
                />
              </div>
            </div>
          </div>
          <div className="m-5 border border-black ">
            <div className="mt-[0.5%] flex justify-center font-semibold underline">
              DETAILS OF PATIENT ADMITIED
            </div>
            <div className="w-[60%] mx-[1%] mt-[1%] flex justify-between items-center ">
              A. Date of admission:
              <div className="flex">
                <input
                  type="text"
                  className=" mr-1 pl-[40%]"
                  placeholder="DD/MM/YYYY"
                  maxLength={10}
                  ref={admissionDate}
                />
              </div>
            </div>
            <div className="w-[60%] mx-[1%] mt-[1%] flex justify-between items-center ">
              B. Time of admission:
              <div className="flex">
                <input
                  type="text"
                  className=" mr-1 pl-[50%]"
                  placeholder="(HH:MM)"
                  maxLength={7}
                  ref={admissionTime}
                />
              </div>
            </div>
            <div className="w-[80%] mx-[1%] mt-[1%] flex justify-between items-center ">
              C. Is this an emergency/planned hospitalization event:
              <div className="flex">
                <div>Emergency</div>
                <input
                  type="radio"
                  className="w-5 ml-1"
                  name="event"
                  value="Emergency"
                  ref={hospitalizationEventEmergency}
                />
              </div>
              <div className="flex">
                <div>Planned</div>
                <input
                  type="radio"
                  className="w-5 ml-1 "
                  name="event"
                  value="Planned"
                  ref={hospitalizationEventPlanned}
                />
              </div>
            </div>
            <div className=" mx-[1%] mt-[0.5%] w-[72%] flex justify-between">
              D. Mandatory Past History of any chronic illness
              <div>If yes (Since month/year)</div>
            </div>
            <div className="ml-[3%] mr-[1%] mt-[0.5%] flex justify-between">
              i. Diabetes:
              <input
                type="text"
                className="border-black border-b-2 w-[75%]"
                ref={diabetes}
              />
            </div>
            <div className="ml-[3%] mr-[1%] mt-[0.5%] flex justify-between">
              ii. Heart disease:
              <input
                type="text"
                className="border-black border-b-2 w-[75%]"
                ref={heartDisease}
              />
            </div>
            <div className="ml-[3%] mr-[1%] mt-[0.5%] flex justify-between">
              iii. Hypertension:
              <input
                type="text"
                className="border-black border-b-2 w-[75%]"
                ref={hypertension}
              />
            </div>
            <div className="ml-[3%] mr-[1%] mt-[0.5%] flex justify-between">
              iv. Hyperlipidemias:
              <input
                type="text"
                className="border-black border-b-2 w-[75%]"
                ref={hyperlipidemias}
              />
            </div>
            <div className="ml-[3%] mr-[1%] mt-[0.5%] flex justify-between">
              v. Osteoarthritis:
              <input
                type="text"
                className="border-black border-b-2 w-[75%]"
                ref={osteoarthritis}
              />
            </div>
            <div className="ml-[3%] mr-[1%] mt-[0.5%] flex justify-between">
              vi. Astma / COPD / Bronchitis:
              <input
                type="text"
                className="border-black border-b-2 w-[75%]"
                ref={astmaCOPDBronchitis}
              />
            </div>
            <div className="ml-[3%] mr-[1%] mt-[0.5%] flex justify-between">
              vii. Cancer:
              <input
                type="text"
                className="border-black border-b-2 w-[75%]"
                ref={cancer}
              />
            </div>
            <div className="ml-[3%] mr-[1%] mt-[0.5%] flex justify-between">
              viii. Alcohol / Drug abuse:
              <input
                type="text"
                className="border-black border-b-2 w-[75%]"
                ref={alcoholDrugAbuse}
              />
            </div>
            <div className="ml-[3%] mr-[1%] mt-[0.5%] flex justify-between">
              ix. Any HIV or STD Retatenate:
              <input
                type="text"
                className="border-black border-b-2 w-[75%]"
                ref={hivSTDRetatenate}
              />
            </div>
            <div className="ml-[3%] mr-[1%] mt-[0.5%] flex justify-between">
              x. Any other ailment, give details:
              <input
                type="text"
                className="border-black border-b-2 w-[75%]"
                ref={otherAilment}
              />
            </div>
            <div className="mx-[1%] mt-[0.5%] w-[75%] flex justify-between">
              E. Expected number of Days /stay in hospital
              <div>
                <input
                  type="text"
                  className="border-black border-b-2 "
                  ref={expectedDays}
                />
                Days
              </div>
            </div>
            <div className="mx-[1%] mt-[0.5%] w-[75%] flex justify-between">
              F. Days in ICU
              <div>
                <input
                  type="text"
                  className="border-black border-b-2 "
                  ref={icuDays}
                />
                Days
              </div>
            </div>
            <div className="mx-[1%] mt-[0.5%] w-[72.5%] flex justify-between">
              G. Room Type
              <div>
                <input
                  type="text"
                  className="border-black border-b-2"
                  ref={roomType}
                />
              </div>
            </div>
            <div className="mx-[1%] mt-[0.5%] flex justify-between">
              H. Per day room rent + nursing and service charges + patients diet
              <input
                type="text"
                className="border-black border-b-2 w-[41.7%]"
                ref={rentNursingServiceDiet}
              />
            </div>
            <div className="mx-[1%] mt-[0.5%] flex justify-between">
              I. Expected cost of investigation + diagnostic
              <input
                type="text"
                className="border-black border-b-2 w-[41.7%]"
                ref={investigationCostDiagnostic}
              />
            </div>
            <div className="mx-[1%] mt-[0.5%] flex justify-between">
              J. ICU charges
              <input
                type="text"
                className="border-black border-b-2 w-[41.7%]"
                ref={icuCharges}
              />
            </div>
            <div className="mx-[1%] mt-[0.5%] flex justify-between">
              K. OT charges
              <input
                type="text"
                className="border-black border-b-2 w-[41.7%]"
                ref={otCharges}
              />
            </div>
            <div className="mx-[1%] mt-[0.5%] flex justify-between">
              L. Professional fees Surgeon + Anesthetist Fees + Consultation
              Charges
              <input
                type="text"
                className="border-black border-b-2 w-[41.7%]"
                ref={surgeonAnesthetistConsultation}
              />
            </div>
            <div className="mx-[1%] mt-[0.5%] flex justify-between">
              M. Medicines + Consumables + Cost of Implants of applicable please
              specify
              <input
                type="text"
                className="border-black border-b-2 w-[41.7%]"
                ref={medicinesConsumableImplantCost}
              />
            </div>
            <div className="mx-[1%] mt-[0.5%] flex justify-between">
              N. Other hospital expenses if any
              <input
                type="text"
                className="border-black border-b-2 w-[41.7%]"
                ref={otherCharges}
              />
            </div>
            <div className="mx-[1%] mt-[0.5%] flex justify-between">
              O. All - inclusive package charges if any applicable
              <input
                type="text"
                className="border-black border-b-2 w-[41.7%]"
                ref={allInclusiveCharges}
              />
            </div>
            <div className="mx-[1%] mt-[0.5%] mb-[1%] flex justify-between">
              P. Sum Total expected cost of hospitalization
              <input
                type="text"
                className="border-black border-b-2 w-[41.7%]"
                ref={expectedTotalCharges}
              />
            </div>
          </div>
          <div className="m-5 border border-black h-[500px]">
            <div className="mt-[0.5%] flex justify-center font-semibold">
              DECLARATION
            </div>
            <div className=" flex justify-center font-semibold">
              (Please read very carefully)
            </div>
            <div className="mx-[1%] mt-[0.5%]">
              We confirm having read understood and agreed to the Declarations
              of this form
            </div>
            <div className="mx-[1%] mt-[0.5%] flex justify-between">
              a. Name of the treating doctor:
              <input
                type="text"
                className="border-black border-b-2 w-[75%]"
                ref={treatingDoctor}
              />
            </div>
            <div className="mx-[1%] mt-[0.5%] flex justify-between">
              b. Qualification:
              <input
                type="text"
                className="border-black border-b-2 w-[75%]"
                ref={doctorQualification}
              />
            </div>
            <div className="mx-[1%] mt-[0.5%] flex justify-between">
              c. Registration number with State code:
              <input
                type="text"
                className="border-black border-b-2 w-[75%]"
                ref={doctorRegNumber}
              />
            </div>
            <div className="mx-[1%] mt-[4%] flex justify-evenly">
              <div className="flex flex-col">
                <input
                  type="text"
                  className="border border-black w-[300px] h-[90px]"
                  readOnly
                />
                <div className="flex justify-center">Hostipal Seal</div>
                <div className="flex justify-center">
                  (Must include Hospital ID)
                </div>
              </div>
              <div>
                <input
                  type="text"
                  className="border border-black w-[300px] h-[90px]"
                  readOnly
                />
                <div className="flex justify-center mt-6">
                  Patient/Insured Name and Sign
                </div>
              </div>
            </div>
          </div>
          <div className="mx-5 mt-5 border border-black ">
            <div className="mt-[0.5%] flex justify-center font-semibold underline">
              DECLARATION BY THE PATIENT / REPRESENTATIVE
            </div>
            {patientDeclaration.map((list) => (
              <div className="mx-[1%] mt-[0.5%] flex" key={list.heading}>
                {list.heading}
                <div className="mx-[1%]">{list.body}</div>
              </div>
            ))}
            <div className="ml-[3%] mt-[0.5%] flex justify-between w-[35%]">
              a) Patient's / Insured's Name:
              <div>
                <input type="text" placeholder="Patient's Name" maxLength={7} />
              </div>
            </div>
            <div className="ml-[3%] mt-[0.5%] flex justify-between w-[75%]">
              <div className="flex">
                b) Contact number:
                <div>
                  <input
                    type="text"
                    className="ml-[70%]"
                    placeholder="Contact Number"
                    maxLength={7}
                  />
                </div>
              </div>
              <div className="flex">
                c) e-mail Id (optional):
                <div>
                  <input
                    type="email"
                    className="ml-[70%]"
                    placeholder="E-mail"
                    maxLength={7}
                  />
                </div>
              </div>
            </div>
            <div className="ml-[3%] mt-[0.5%] flex justify-between w-[35%]">
              d) Patient's / Insured's Signature:
              <div>
                <input type="text" maxLength={7} />
              </div>
            </div>
            <div className="mt-[0.5%] flex justify-center font-semibold underline">
              HOSPITAL DECLARATION
            </div>
            {hospitalDeclaration.map((list) => (
              <div className="mx-[1%] mt-[0.5%] flex" key={list.heading}>
                {list.heading}
                <div className="mx-[1%]">{list.body}</div>
              </div>
            ))}
            <div className="mt-[0.5%] mx-[1%] w-[55%] flex justify-between">
              <div>Hospital Seal:</div>
              <div className="flex justify-end">Doctor's Signature:</div>
            </div>
            <div className="my-[0.5%] mx-[1%] w-[70.2%] flex justify-between">
              <div className="flex">
                Date:{" "}
                <input
                  type="text"
                  className=" mr-1 pl-[40%]"
                  placeholder="DD/MM/YYYY"
                  maxLength={10}
                  ref={date}
                />
              </div>
              <div className="flex">
                Time:{" "}
                <input
                  type="text"
                  className=" mr-1 pl-[40%]"
                  placeholder="HH:MM"
                  maxLength={10}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center font-semibold">
            Registered office Plot No.A-442. Road no.28.M.L.D.C.Industrial Area,
            Wagle Estate, Thane(w), Thane-Maharashtra-400604.
          </div>
          <div className="flex justify-center font-semibold">
            Tel-66620808,Fax-66444754/55, E-mail-contact.phs@paramounttpa.com
          </div>
          <a
            href="www.paramounttpa.com"
            className="flex justify-center font-semibold">
            www.paramounttpa.com
          </a>
        </form>
      </div>
      <div className="flex justify-center mx-3 mt-2">
        <button
          className={`border px-2 py-1 text-white bg-[${theme.header}] rounded font-medium mr-2`}
          onClick={() => {
            navigate("/pre_auth_form/:id");
          }}>
          {"BACK"}
        </button>
        <button
          className={`border px-2 py-1 text-white bg-[${theme.header}] rounded font-medium`}
          onClick={() => {}}>
          {"PRINT"}
        </button>
      </div>
    </div>
  );
};

export default PreAuthTpaPdf;
