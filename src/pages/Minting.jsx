import React, { useState } from "react";
import Navbar from "../components/minting/Navbar";
import "../assets/css/minting.css";
import { funkylandIcon } from "../assets/images/images";
import Mint from "../components/minting/Mint";
import Burn from "../components/minting/Burn";
import Gallery from "../components/common/Gallery";
import Community from "../components/common/Community";
import MintLoading from "../components/minting/MintLoading";
import { transactionServices } from "@elrondnetwork/dapp-core";

function Minting() {
  const [minting, setMinting] = useState(false);
  const successfulTransaction = transactionServices.useGetSuccessfulTransactions();
  const unsuccessfulTransaction = transactionServices.useGetFailedTransactions();
  const pendingTransaction = transactionServices.useGetPendingTransactions();
  const activeTransaction = transactionServices.useGetActiveTransactionsStatus();
  const transactionStatus = transactionServices.useTrackTransactionStatus({
    transactionId: null,
    onSuccess: () => {
      console.log("success");
    },
    onFail: () => {
      console.log("onFail");
    },
    onCancelled: () => {
      console.log("onCancelled");
    },
    onCompleted: () => {
      console.log("onCompleted");
    },
  });

  return (
    <>
      {console.log("successfulTransaction", successfulTransaction)}
      {console.log("transactionStatus", transactionStatus)}
      {console.log("pendingTransaction", pendingTransaction)}
      {console.log("unsuccessfulTransaction", unsuccessfulTransaction)}
      {console.log("activeTransaction", activeTransaction)}

      <div className="minting">
        <Navbar />
        <div className="section" id="funkies">
          <div
            className="section-div-img "

          >
            <div className="md:w-3/5 text-left">
              <h3 className="section-title  md:text-left">
                WELCOME TO FUNKYLAND
              </h3>
              <div className=" section-img my-10 md:hidden">
                <img src={funkylandIcon} alt="Intro" />
              </div>
              <p className="text-xl md:text-2xl text-white mt-5 mx-10 md:mx-auto">
                Funkyland is the place for all the bears and bulls who are
                residing on this place.Be the part of unleshing adventure and
                ride the fun with us .You can get your funkies by minting below.
              </p>
            </div>
            <div className="section-img m-10 md:w-2/5 md:block hidden">
              <img src={funkylandIcon} alt="Intro" />
            </div>
          </div>
        </div>

        <Mint minting={minting} setMinting={setMinting} />

        <Burn minting={minting} setMinting={setMinting} />

        <div className="bg-bgPrimaryDark p-6 md:p-12">
          <Gallery title="My Funkies" count={[1, 2, 3, 4, 5]} />
        </div>

        <Community />
      </div>
      {minting && <MintLoading minting={minting} setMinting={setMinting} />}
    </>
  );
}

export default Minting;
