import React from "react";
import { funkyNinjaGallery } from "../../assets/images/images";
import "../../assets/css/popup.css";

function FunkyPopup(props) {
  const { setPopupOpen } = props;
  const handleClose = () => {
    setPopupOpen(false);
  };
  return (
    <>
      <div className="popup-backdrop">
        <div className="popup pb-6 ">
          <div className="popup-content">
            <div className="bg-[#337A83] rounded-2xl mx-auto md:flex md:items-stretch md:space-x-10 md:w-[700px]">
              <div className="md:w-5/12 flex justify-center md:py-auto items-stretch">
                <img
                  src={funkyNinjaGallery}
                  alt="Funkies"
                  className="md:w-full rounded-2xl"
                />
              </div>
              <div className="md:w-7/12 bg-[#34A0AE] rounded-2xl p-6 flex-col space-y-10 funky-info-div">
                <div className="section-topic text-center">Ninja Bear 1</div>
                <div className="funky-info grid grid-cols-2 gap-4">
                  <div className="col-span-4 col-start-1">
                    <div className="funky-info-title">Character Type</div>
                    <div>Bear</div>
                  </div>
                  <div className="col-span-3 col-start-5">
                    <div className="funky-info-title">Eyes</div>
                    <div>Warm</div>
                  </div>
                  <div className="col-span-4 col-start-1">
                    <div className="funky-info-title">Background</div>
                    <div>Brown</div>
                  </div>
                  <div className="col-span-3 col-start-5">
                    <div className="funky-info-title">Skin tone</div>
                    <div>Brown</div>
                  </div>
                  <div className="col-span-4 col-start-1">
                    <div className="funky-info-title">Dress</div>
                    <div>Black Ninja Suit </div>
                  </div>
                  <div className="col-span-3 col-start-5">
                    <div className="funky-info-title">Gang</div>
                    <div>Ninja Gang</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <button
                className="connect-btn flex justify-center px-16"
                onClick={handleClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FunkyPopup;
