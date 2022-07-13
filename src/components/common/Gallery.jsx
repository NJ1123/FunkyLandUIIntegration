import React, { useState } from "react";
import { funkyNinjaGallery } from "../../assets/images/images";
import FunkyPopup from "./FunkyPopup";

function Gallery(props) {
  const [popupOpen, setPopupOpen] = useState(false);
  const handleFunkyClick = () => {
    setPopupOpen(true);
  };
  const { title, count } = props;
  return (
    <>
      <div className="section">
        <div className="section-title">{title}</div>
        <div className="flex flex-wrap content-start justify-evenly gap-x-2 gap-y-8 my-6 md:justify-between md:gap-x-10 md:gap-y-16 md:my-20 md:mx-16">
          {count.map((image) => (
            <>
              <img
                src={funkyNinjaGallery}
                alt="Gallery-Img"
                className="md:w-max w-1/3 md:h-auto"
                onClick={handleFunkyClick}
              />
            </>
          ))}
        </div>
      </div>
      {popupOpen && (
        <FunkyPopup popupOpen={popupOpen} setPopupOpen={setPopupOpen} />
      )}
    </>
  );
}

export default Gallery;
