import FlipCard from "./FlipCard";
import { theme } from "../../assets/theme";
import PropTypes from "prop-types";

const Cards = ({ mode }) => {
  const cardData = [
    {
      img: "src\\assets\\forms-logo.png",
      title: "Registration Form",
      details: "Patient can register using manual form",
      button: "Fill Form",
      path: "/form",
    },
    {
      img: "src\\assets\\qr-logo.jpg",
      title: "Scan QR Code",
      details: "Please scan here",
      button: "Open QR",
      path: "/register",
    },
    {
      img: "src\\assets\\doc-logo.png",
      title: "Upload Documents",
      details: "Upload documents to autofill form",
      button: "Upload",
      path: "/register",
    },
  ];


  return (
    <div className="">
      <h3 className={`text-[${theme[mode].text}] pt-3 pl-3 mb-[10%]`}>
        Registration Form
      </h3>
      <div className="flex justify-evenly">
        {cardData?.map((item) => (
          <FlipCard
            key={item.title}
            img={item.img}
            title={item.title}
            details={item.details}
            button={item.button}
            path={item.path}
          />
        ))}
      </div>
    </div>
  );
};

Cards.propTypes = {
  mode: PropTypes.bool.isRequired,
};

export default Cards;
