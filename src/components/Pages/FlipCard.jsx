import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useState } from "react";
import CustomUploadModal from "./CustomUploadModal";

const FlipCard = ({ img, title, details, button, path }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center">
      <div className="group h-[14rem] w-[13rem]">
        <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          <div className="absolute inset-0 ">
            <img
              className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
              src={img}
              alt=""
            />
          </div>
          <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <div className="flex min-h-full flex-col items-center justify-center">
              <h5 className="text-2xl font-bold">{title}</h5>
              {/* <p className="text-lg">Patient</p> */}
              <p className="text-base">{details}</p>
              <button
                className="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900"
                onClick={(e) => {
                  e.preventDefault();
                  navigate(path);
                  if (button === "Open QR") {
                    // toggleModal();
                  }
                  if (button === "Upload") {
                    toggleModal();
                  }
                }}>
                {button}
              </button>
              <CustomUploadModal
                isOpen={isModalOpen}
                onClose={toggleModal}
                bgColor={"black"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FlipCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
  button: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default FlipCard;
