import React, { useState, useEffect, useRef } from "react";
import "../../assets/css/connect-btn.css";
import "../../assets/css/popup.css";
import { DappUI } from "@elrondnetwork/dapp-core";
import { useWallet } from "../../hooks/useWallet";

function ConnectBtn() {
  const [popupOpen, setPopupOpen] = useState(true);
  const btnRef = useRef();
  const popupRef = useRef();
  const { wallet, handleLogout, trimWallet } = useWallet();

  const handleClose = () => {
    setPopupOpen(false);
  };
  const handleOpen = () => {
    setPopupOpen(true);
  };
  const {
    ExtensionLoginButton,
    WebWalletLoginButton,
    LedgerLoginButton,
    WalletConnectLoginButton,
  } = DappUI;

  useEffect(() => {
    const handleOutsideClick = (e) => {
      console.log(e, e.path.includes(popupRef.current));
      if (e.path[0] !== btnRef.current && !e.path.includes(popupRef.current)) {
        handleClose();
      }
    };
    document.body.addEventListener("click", handleOutsideClick);

    return () => document.body.removeEventListener("click", handleOutsideClick);
  }, []);

  return (
    <>
      <button
        ref={btnRef}
        className="connect-btn flex justify-center "
        onClick={!wallet.connected ? handleOpen : handleLogout}
      >
        {!wallet.connected ? "Connect Wallet" : wallet.address}
      </button>
      {popupOpen && (
        <>
          <div className="popup-backdrop ml-0">
            <div ref={popupRef} className="popup pb-6 ">
              <div className="popup-content">
                {/* <div className="bg-[#337A83] rounded-2xl mx-auto md:flex md:items-stretch md:space-x-10 md:w-[700px]">
                  <div className="md:w-5/12 flex justify-center md:py-auto items-stretch">
                    <img
                      src={funkyNinjaGallery}
                      alt="Funkies"
                      className="md:w-full rounded-2xl"
                    />
                  </div>
                  <div className="md:w-7/12 bg-[#34A0AE] rounded-2xl p-6 flex-col space-y-10 funky-info-div">
                    <div className="section-topic text-center">
                      Ninja Bear 1
                    </div>
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
                </div> */}
                <div>
                  <div className="section-topic text-center">
                    Connect Your Wallet
                  </div>

                  <div className="pt-10 flex flex-col gap-y-5">
                    <WebWalletLoginButton
                      buttonClassName="connect__button"
                      callbackRoute="/app/minting"
                      wrapContentInsideModal
                      loginButtonText={"Web Wallet"}
                    />
                    <ExtensionLoginButton
                      buttonClassName="connect__button"
                      callbackRoute="/app/minting"
                      wrapContentInsideModal
                      loginButtonText={"Extension"}
                    />
                    <WalletConnectLoginButton
                      callbackRoute="/app/minting"
                      loginButtonText={"Maiar App"}
                      wrapContentInsideModal
                      buttonClassName="connect__button"
                    />
                    <LedgerLoginButton
                      buttonClassName="connect__button"
                      loginButtonText={"Ledger"}
                      callbackRoute="/app/minting"
                      wrapContentInsideModal
                      className={"test-class_name"}
                    />
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
      )}
    </>
  );
}

export default ConnectBtn;
