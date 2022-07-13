import React from "react";
import "../../assets/css/popup.css";
import FadeLoader from "react-spinners/FadeLoader";
import { Link } from "react-router-dom";
import "../../assets/css/connect-btn.css";

function MintLoading(props) {
  const { minting, setMinting } = props;
  const handleClose = () => {
    setMinting(false);
  };
  return (
    <>
      <div className="popup-backdrop">
        <div className="popup ">
          <div className="popup-content  md:max-w-lg">
            <div className="section-topic text-center">
              Please wait your NFT is being minted
            </div>
            <FadeLoader height={20} margin={10} />
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

export default MintLoading;
