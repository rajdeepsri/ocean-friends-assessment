import { IoArrowBack } from "react-icons/io5";
import Statement from "./Statement";
import { useState } from "react";

const CardDetails = ({ card, clearCardSelection }) => {
  const [isBackSide, setIsBackSide] = useState(false);

  const toggleBackSide = () => setIsBackSide((prev) => !prev);

  return (
    <div className="py-4 px-2">
      <div className="layout-container mt-10">
        <button
          className="bg-transparent hover:bg-neutral-400/50 py-2 mb-4 w-9 flex justify-center items-center rounded-full transition-all duration-200"
          onClick={clearCardSelection}
        >
          <IoArrowBack fontSize={20} />
        </button>
      </div>
      <div className="pl-4">
        <div className="vstack items-start h-full gap-4">
          <h1 className="text-[32px] self-start font-bold leading-[41px] tracking-tight">
            Salary <br /> Card
          </h1>
          <img
            src={!isBackSide ? card.rotatedImg : card.backImg}
            alt="card"
            className="w-[20rem] shadow-md"
            onClick={toggleBackSide}
          />
          <div>
            <h2 className="text-slate-400 text-base font-bold leading-relaxed tracking-tight">
              Balance
            </h2>
            <p className="text-white text-[26px] font-bold leading-relaxed tracking-tight">
              $2,748.00
            </p>
          </div>
          <Statement />
        </div>
      </div>
    </div>
  );
};
export default CardDetails;
