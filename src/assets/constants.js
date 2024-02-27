import adityaBirla from "./logos/Aditya-Birla-logo.jpg";
import bajajAllianz from "./logos/Bajaj-Allianz-logo.jpg";
import cholamandalam from "./logos/cholamandalam-logo.jpg";
import hdfcErgo from "./logos/HDFC_ergo-logo.jpg";
import iciciLombard from "./logos/ICICI-Lombard-logo.jpg";
import iffcoTokio from "./logos/IFFCO-Tokio-logo.jpg";
import liberty from "./logos/liberty-general-insurance-logo.jpg";
import reliance from "./logos/liberty-general-insurance-logo.jpg";
import care from "./logos/Care-Health-Insurance-logo.jpg";
import royalSundaram from "./logos/RoyalSundaram-logo.jpeg";
import sbi from "./logos/SBI-General-logo.jpg";
import tataAig from "./logos/tata-aig-general-insurance-logo.jpg";
import universalSompo from "./logos/universal-sompo-logo.jpg";
import manipalCiga from "./logos/ManipalCigna-logo.jpg";
import zuno from "./logos/zuno-logo.jpg";
import magmaHdi from "./logos/magma-hdi.jpg";
import kotakMahindra from "./logos/Kotak-logo.jpg";
import goDigit from "./logos/digit-logo.jpg";
import aegon from "./logos/Aegon-Life-Insurance-logo.jpg";
import hdfcLife from "./logos/HDFC-lifeInsurance-logo.jpg";
import max from "./logos/Max_Life_Insurance_logo.jpg";
import unitedIndia from "./logos/United_Insurance-logo.jpg";
import newIndia from "./logos/New-India_Insirance-logo.jpg";
import national from "./logos/National_Insurance-logo.jpg";
import oriental from "./logos/Oriental_Insurance-logo.jpeg";

const insuranceCompanies = [
  {
    id: "00",
    insuranceCompany: `Aditya Birla Health Insurance Co. Ltd.`,
    logo: adityaBirla,
    insuranceType: "Private Sector Insurance Company",
  },
  {
    id: "01",
    insuranceCompany: `Bajaj Allianz Life Insurance Co. Ltd.`,
    logo: bajajAllianz,
    insuranceType: "Private Sector Insurance Company",
  },
  {
    id: "02",
    insuranceCompany: `Cholamandalam General Insurance Co. Ltd.`,
    logo: cholamandalam,
    insuranceType: "Private Sector Insurance Company",
  },
  {
    id: "03",
    insuranceCompany: `HDFC Ergo General Insurance Co. Ltd.`,
    logo: hdfcErgo,
    insuranceType: "Private Sector Insurance Company",
  },
  {
    id: "04",
    insuranceCompany: `ICICI Lombard`,
    logo: iciciLombard,
    insuranceType: "Private Sector Insurance Company",
  },
  {
    insuranceCompany: `IFFCO Tokio General Insurance Co. Ltd.`,
    logo: iffcoTokio,
    insuranceType: "Private Sector Insurance Company",
  },
  {
    id: "05",
    insuranceCompany: `Liberty General Insurance Co. Ltd.`,
    logo: liberty,
    insuranceType: "Private Sector Insurance Company",
  },
  {
    id: "06",
    insuranceCompany: `Reliance General Insurance Co. Ltd.`,
    logo: reliance,
    insuranceType: "Private Sector Insurance Company",
  },
  {
    id: "07",
    insuranceCompany: `Care Health Insurance Co. Ltd.`,
    logo: care,
    insuranceType: "Private Sector Insurance Company",
  },
  {
    id: "08",
    insuranceCompany: `Royal Sundaram General Insurance Co. Ltd.`,
    logo: royalSundaram,
    insuranceType: "Private Sector Insurance Company",
  },
  {
    id: "10",
    insuranceCompany: `SBI General Insurance Co. Ltd.`,
    logo: sbi,
    insuranceType: "Private Sector Insurance Company",
  },
  {
    id: "11",
    insuranceCompany: `Tata AIG General Insurance Co. Ltd.`,
    logo: tataAig,
    insuranceType: "Private Sector Insurance Company",
  },
  {
    id: "12",
    insuranceCompany: `Universal Sompo General Insurance Co. Ltd.`,
    logo: universalSompo,
    insuranceType: "Private Sector Insurance Company",
  },
  {
    id: "13",
    insuranceCompany: `Manipal Cigna Health Insurance Co. Ltd.`,
    logo: manipalCiga,
    insuranceType: "Private Sector Insurance Company",
  },
  {
    id: "14",
    insuranceCompany: `Zuno General Insurance Co. Ltd.`,
    logo: zuno,
    insuranceType: "Private Sector Insurance Company",
  },
  {
    id: "15",
    insuranceCompany: `Magma HDI General Insurance Co. Ltd.`,
    logo: magmaHdi,
    insuranceType: "Private Sector Insurance Company",
  },
  {
    id: "16",
    insuranceCompany: `Kotak Mahindra General Insurance Co. Ltd.`,
    logo: kotakMahindra,
    insuranceType: "Private Sector Insurance Company",
  },
  {
    id: "17",
    insuranceCompany: `Go Digit General Insurance Ltd.`,
    logo: goDigit,
    insuranceType: "Private Sector Insurance Company",
  },
  {
    id: "18",
    insuranceCompany: `Aegon Life Insurance Co. Ltd.`,
    logo: aegon,
    insuranceType: "Private Sector Life Insurance Company",
  },
  {
    id: "19",
    insuranceCompany: `HDFC Life Insurance Co. Ltd.`,
    logo: hdfcLife,
    insuranceType: "Private Sector Life Insurance Company",
  },
  {
    id: "20",
    insuranceCompany: `Max Life Insurance Co. Ltd.`,
    logo: max,
    insuranceType: "Private Sector Life Insurance Company",
  },
  {
    id: "21",
    insuranceCompany: `United India Insurance Co. Ltd.`,
    logo: unitedIndia,
    insuranceType: "Public Sector Insurance Company",
  },
  {
    id: "22",
    insuranceCompany: `New India Assurance Co. Ltd.`,
    logo: newIndia,
    insuranceType: "Public Sector Insurance Company",
  },
  {
    id: "23",
    insuranceCompany: `National Insurance Co. Ltd.`,
    logo: national,
    insuranceType: "Public Sector Insurance Company",
  },
  {
    id: "24",
    insuranceCompany: `The Oriental Insurance Co. Ltd.`,
    logo: oriental,
    insuranceType: "Public Sector Insurance Company",
  },
];

export const patientDeclaration = [
  {
    heading: "a.",
    body: `I agree to allow the hospital to submit all original documents pertaining to hospitalization to the Insurer / T.P.A after the discharge. I agree to sign on the Final Bill & the Discharge Summary, before my discharge.`,
  },
  {
    heading: "b.",
    body: `Payment to hospital is governed by the terms and conditions of the policy. In case the Insurer / TPA is not liable to settle the hospital bill, I undertake to settle the bill as per the terms and conditions of the policy.`,
  },
  {
    heading: "c.",
    body: `All non-medical expenses and expenses not relevant to current hospitalization and the amounts over & above the limit authorized by the Insurer / T.P.A not governed by the terms and conditions of the policy will be paid by me.`,
  },
  {
    heading: "d.",
    body: `I hereby declare to abide by the terms and conditions of the policy and if at any time the facts disclosed by me are found to be false or incorrect I forfeit my claim and agree to indemnify the insurer/T.P.A`,
  },
  {
    heading: "e.",
    body: `I agree and understand that T.P.A is in no way warranting the service of the hospital & that the Insurer / TPA is in no way guaranteeing that the services provided by the hospital will be of a particular quality or standard.`,
  },
  {
    heading: "f.",
    body: `I hereby warrant the truth of the forgoing particulars in every respect and I agree that if I have made or shall make any false or untrue statement, suppression or concealment with respect to the claim, my right to claim reimbursement of the said expenses shall be absolutelv forfened.`,
  },
  {
    heading: "g.",
    body: `I agree to indemnify the hospital against all expenses incurred on my behalf, which are not reimbursed by the insurer / TPA`,
  },
  {
    heading: "h.",
    body: `"I / We authorize Insurance Company / TPA to contact me/us through mobile/email for any update on this claim"`,
  },
];

export const hospitalDeclaration = [
  {
    heading: "a.",
    body: `We have no objection to any authorized TPA/Insurance Company official verifying documents pertaining to hospitalization.`,
  },
  {
    heading: "b.",
    body: `All valid onginal documents duly countersigned by the insured/patient as per the checklist below will be sent to TPA/Insurance Company within 7 days of the patient's discharge.`,
  },
  {
    heading: "c.",
    body: `We agree that TPA/Insurance Company will not be liable to make the payment in the event of any discrepancy between the facts in this form and discharge summary or other documents.`,
  },
  {
    heading: "d.",
    body: `The patient declaration has been signed by the patient or by his representative in our presence.`,
  },
  {
    heading: "e.",
    body: `We agree to provide clarifications for the queries raised regarding this hospitalization and we take the sole responsibility for any delay in offering clarifications.`,
  },
  {
    heading: "f.",
    body: `We will abide by the terms and conditions agreed in the MOU.`,
  },
  {
    heading: "g.",
    body: `We confirm that no additional amount would be collected from the insured in excess of Agreed Package Rates except costs towards non-admissible amounts (including additional charges due to opting higher room rent than eligibility/choosing separate line of treatment which is not envisaged/considered in package).`,
  },
  {
    heading: "h.",
    body: `We confirm that no recoveries would be made from the deposit amount collected from the Insured except for costs towards non- admissible amounts (including additional charges due to opting higher room rent than eligibility/choosing separate line of treatment which is not envisaged/considered in package).`,
  },
  {
    heading: "i.",
    body: `In the event of unauthorized recovery of any additional amount from the Insured in excess of Agreed Package Rates the authorized TPA/Insurance Company reserves the right to recover the same from us (the Network Provider) and for take recessary action, as provided under the MOU or applicable laws.`,
  },
];

export const hospitalData = {
  hospitalName: "MANIPAL MULTI-SPECIALITY HOSPITAL",
  hospitalAddress:
    "ITPL Main Rd, opposite PRESTIGE SHANTINIKETAN, Whitefield, KIADB Export Promotion Industrial Area, Hoodi, Bengaluru, Karnataka 560066",
  hospitalRohiniID: "8900080118089",
  hospitalEmailID: "info@manipalhospitals.com",
  patientName: "Rajini Kanth",
  patientGender: "male",
  patientDOB: "12/12/1950",
  patientContact: "9876543210",
  patientRelativeContact: "4321098765",
  patientInsuedID: "5220-2628-0267",
  policyNumber: "080-22221111",
  empID: "EMP91892363",
  otherMedclaim: "yes",
  otherMedclaimName: " MDIndia Healthcare Services (TPA) Pvt. Ltd.",
  otherMedclaimDetails: `MDIndia Healthcare Services (TPA) Pvt. Ltd. was founded in November 2000, with exclusive focus on healthcare insurance and aim of providing TPA (Third Party Administration) services to Indian Health Insurance Sector`,
  familyPhysician: "yes",
  familyPhysicianName: "Dr. Sitara",
  familyPhysicianContact: "9827367613",
  patientAddress:
    "ITPL Main Rd, opposite PRESTIGE SHANTINIKETAN, Whitefield, KIADB Export Promotion Industrial Area, Hoodi, Bengaluru, Karnataka 560066",
  patientOccupation: "Farmer",
  treatingDoctor: "Dr. Kamal Raj",
  doctorContact: "8273676513",
  illnessName: "Jaundice",
  relevantFindings: "NA",
  ailmentDuration: "115",
  firstConsultation: "29/03/2022",
  pastAilment: "NA",
  provisionalDiagnosis:
    "Under the Diagnostic and Statistical Manual of Mental Disorders (DSM-5)",
  icdCode: "WD8929JDND",
  medicalManagement: "yes",
  surgicalManagement: "yes",
  intensiveCare: "no",
  investigation: "no",
  nonAllopathicTreatment: "yes",
  investigationMedicalManagement: "Diagnostic and Statistical Manual",
  drugAdministration: "Mental Disorders",
  surgeryName: "Gastrectomy",
  icdPCSCode: "WD8929JDND",
  otherTreatment: "NA",
  injuryOccur: "Accident",
  isRTA: "yes",
  injuryDate: "19/12/2023",
  policeReported: "yes",
  firNo: "98YGJ779",
  injuryAbuseAlcohol: "yes",
  alcoholTestConducted: "no",
  maternityType: "L",
  deliveryDate: "30/12/2023",
  admissionDate: "10/12/2023",
  hospitalizationEvent: "Planned",
  diabetes: "Yes 2yrs",
  heartDisease: "Yes 3yrs",
  hypertension: "Yes 2yrs",
  hyperlipidemias: "No",
  osteoarthritis: "No",
  astmaCOPDBronchitis: "No",
  cancer: "No",
  alcoholDrugAbuse: "No",
  hivSTDRetatenate: "No",
  otherAilment: "No",
  expectedDays: "12",
  icuDays: "3",
  roomType: "Ward",
  rentNursingServiceDiet: "10000",
  investigationCostDiagnostic: "2000",
  icuCharges: "15000",
  otCharges: "6000",
  surgeonAnesthetistConsultation: "5000",
  medicinesConsumableImplantCost: "2000",
  otherCharges: "6000",
  allInclusiveCharges: "8000",
  expectedTotalCharges: "54000",
  doctorQualification: "MBBS MD(PATHOLOGY)",
  doctorRegNumber: "MM86876876",
  date: new Date(),
};

export default insuranceCompanies;
