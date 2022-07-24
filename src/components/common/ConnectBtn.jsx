import React, { useState, useEffect, useRef } from "react";
import "../../assets/css/connect-btn.css";
import "../../assets/css/popup.css";
import { DappUI } from "@elrondnetwork/dapp-core";
import { useWallet } from "../../hooks/useWallet";

function ConnectBtn() {
  const [popupOpen, setPopupOpen] = useState(false);
  const btnRef = useRef();
  const popupRef = useRef();
  const { wallet, handleLogout, trimWallet } = useWallet();

  const handleClose = () => {
    setPopupOpen(false);
    document.body.removeEventListener("click", handleOutsideClick);
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
  const handleOutsideClick = (e) => {
    // console.log(e, e.path.includes(popupRef.current));
    if (e.path[0] !== btnRef.current && !e.path.includes(popupRef.current)) {
      handleClose();
    }
  };

  useEffect(
    (handleOutsideClick) => {
      if (popupOpen) {
        document.body.addEventListener("click", handleOutsideClick);
      }

      return () =>
        document.body.removeEventListener("click", handleOutsideClick);
    },
    [popupOpen]
  );

  return (
    <>
      <button
        ref={btnRef}
        className="connect-btn flex justify-center "
        onClick={!wallet.connected ? handleOpen : handleLogout}
      >
        {/* TODO - Add Hero Tag */}
        {!wallet.connected ? "Connect Wallet" : trimWallet(wallet.address)}
      </button>
      {popupOpen && (
        <>
          <div className="popup-backdrop ml-0">
            <div ref={popupRef} className="popup pb-6 ">
              <div className="popup-content">
                <div>
                  <div className="section-topic text-center">
                    Connect Your Wallet
                  </div>

                  <div className="pt-10 flex flex-col gap-y-5">
                    <WebWalletLoginButton
                      buttonClassName="wallet-btn"
                      callbackRoute={window.location.pathname}
                      wrapContentInsideModal
                      loginButtonText={"Web Wallet"}
                    />
                    <ExtensionLoginButton
                      buttonClassName="wallet-btn"
                      callbackRoute={window.location.pathname}
                      wrapContentInsideModal
                      loginButtonText={"Extension"}
                    />
                    <WalletConnectLoginButton
                      callbackRoute={window.location.pathname}
                      loginButtonText={"Maiar App"}
                      wrapContentInsideModal
                      buttonClassName="wallet-btn"
                    />
                    <LedgerLoginButton
                      buttonClassName="wallet-btn"
                      loginButtonText={"Ledger"}
                      callbackRoute={window.location.pathname}
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
