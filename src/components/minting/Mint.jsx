import React, { useState } from "react";
import { funkyNinja } from "../../assets/images/images";
import CountField from "./CountField";
import config from "../../config/config.json";
import { sendTransactions } from "@elrondnetwork/dapp-core";
import {
  SmartContract,
  Address,
  ContractFunction,
  GasLimit,
  ChainID,
  U32Value,
  Balance,
} from "@elrondnetwork/erdjs";

function Mint(props) {
  const [mintCount, setMintCount] = useState(1);

  const { minting, setMinting } = props;

  const handleMint = async () => {
    const contract = new SmartContract({
      address: new Address(config.mintingContract),
    });

    const callTransactionOne = contract.call({
      func: new ContractFunction("mint"),
      args: [new U32Value(mintCount)],
      value: Balance.fromString(mintCount * 500000000000000000),
      gasLimit: new GasLimit(80000000),
    });
    console.log("callTransaction", callTransactionOne);
    callTransactionOne.chainID = new ChainID(config.chainID);
    const { sessionId, error } = sendTransactions({
      transactions: callTransactionOne,
    });
    console.log("error", error);
    console.log("sessionId", sessionId);
    //setMinting(true);
    console.log("mintingcontract", config.mintingContract);
  };

  return (
    <>
      <div className="bg-bgPrimaryDark py-6 px-2 md:p-12">
        <div className="bg-[#337A83] rounded-2xl md:max-w-6xl mx-auto md:flex md:items-center">
          <div className="md:w-1/2 bg-[#34A0AE] rounded-2xl p-6 ">
            <div className="bg-[#A8D4E5] rounded-2xl p-6">
              <div className="text-center font-enriqueta font-black text-[#622F00] text-5xl">
                Mint Funkies
              </div>
              <div className="text-center font-inika text-[#622F00] text-2xl">
                100 minted out of 1000
              </div>
              <div className="text-center font-inika text-[#622F00] text-3xl my-10">
                Select Quantity
              </div>
              <div className="my-10">
                <CountField mintCount={mintCount} setMinting={setMinting} />
                <div className="text-center font-inika text-[#622F00] text-lg">
                  Total Cost: 0.5 EGLD
                </div>
              </div>

              <button
                className="connect-btn flex justify-center px-16 "
                onClick={handleMint}
              >
                Mint
              </button>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center py-16 md:py-auto">
            <img src={funkyNinja} alt="Funkies" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Mint;
