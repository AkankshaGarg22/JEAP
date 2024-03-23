import React from "react";
import { PopUpState } from "@/interfaces/timeline";

const Modal: React.FC<{ setPopUp: React.Dispatch<React.SetStateAction<PopUpState>>; popUp: PopUpState }> = ({ setPopUp, popUp }) => {
  return (
    <div className="bg-black/50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 h-full items-center justify-center flex">
      <div className="relative w-full max-w-md h-full md:h-auto ">
        <div className="relative bg-gradient-to-br from-[#00205C] to-[#348F41] shadow h-full">
          <button
            type="button"
            className="absolute top-3 right-2.5 text-white bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center popup-close"
            onClick={()=> setPopUp({isOpen :false, item : null})}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>

            <span className="sr-only">Close popup</span>
          </button>

          <div className="flex items-center justify-center h-full px-4">
            <div className="flex flex-col h-3/4 gap-4 text-start text-white">
              <p className="text-5xl font-bold leading-1 ">{popUp.item && popUp?.item.year}</p>
              <p className="text-xl font-bold leading-4">{popUp.item && popUp.item.cardTitle}</p>
              <p className="text-lg font-bold">{popUp.item && popUp.item.cardSubtitle}</p>
              <p className="leading-[2]">{popUp.item && popUp.item.cardDetailedText}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
