import React, { useEffect, useState } from "react";
import { funkyNinjaGallery } from "../../assets/images/images";
import FunkyPopup from "./FunkyPopup";
import { useWallet } from "../../hooks/useWallet";
import axios from "axios";

function Gallery(props) {
  const [popupOpen, setPopupOpen] = useState(false);
  const handleFunkyClick = () => {
    setPopupOpen(true);
  };
  const { title, count } = props;

  const { wallet } = useWallet();
  const [userNfts, setUserNfts] = useState([]);
  useEffect(() => {
    if (wallet.connected) {
      axios
        .get(
          `https://devnet-api.elrond.com/accounts/${wallet.address}/nfts?collections=PHUNKEYS-c3d99c`
        )
        .then((response) => {
          setUserNfts(response.data);
          // console.log("response", response.data);
        });
    }
  }, [wallet]);
  return (
    <>
      <div className="section">
        <div className="section-title">{title}</div>
        {userNfts.length === 0 ? (
          <>
            <div className="section-empty">No NFTs Found</div>
          </>
        ) : (
          <>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-x-2 md:gap-y-6 md:my-20 md:mx-16">
              {userNfts.map((userNft, index) => (
                <div key={index}>
                  <img
                    src={funkyNinjaGallery}
                    alt="Gallery-Img"
                    className="md:w-max md:h-auto"
                    onClick={handleFunkyClick}
                  />
                </div>
              ))}
            </div>
          </>
        )}
      </div>
      {popupOpen && (
        <FunkyPopup popupOpen={popupOpen} setPopupOpen={setPopupOpen} />
      )}
    </>
  );
}

export default Gallery;
