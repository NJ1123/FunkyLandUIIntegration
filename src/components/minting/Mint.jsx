import React, { useState } from "react";
import { funkyNinja } from "../../assets/images/images";
import config from "../../config/config.json";
import {
  sendTransactions,
  transactionServices,
} from "@elrondnetwork/dapp-core";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

import {
  SmartContract,
  Address,
  ContractFunction,
  GasLimit,
  ChainID,
  U32Value,
  Balance,
} from "@elrondnetwork/erdjs";
import { useWallet } from "../../hooks/useWallet";
import ConnectBtn from "../common/ConnectBtn";

const MINT_LIMIT = 10;
const MINT_COST = 0.5;

function Mint(props) {
  const [mintCount, setMintCount] = useState(1);
  const activeTransactionStatus = transactionServices.useGetActiveTransactionsStatus();
  const { wallet } = useWallet();
  // const { minting, setMinting } = props;
  const decrement = () => {
    if (mintCount > 1) setMintCount((prevState) => prevState - 1);
  };

  const increment = () => {
    if (mintCount < MINT_LIMIT) setMintCount((prevState) => prevState + 1);
  };

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
                <div className="counter">
                  <div className=" flex items-center text-2xl justify-center">
                    <button className="decrement" onClick={decrement}>
                      <AiOutlineMinusCircle />
                    </button>
                    <div className="count px-16 py-3  bg-gradient-to-b from-[#6DA384] to-[#7ABCA3] rounded-3xl mx-5 text-white">
                      {mintCount}
                    </div>
                    <button className="increment" onClick={increment}>
                      <AiOutlinePlusCircle />
                    </button>
                  </div>
                </div>
                <div className="text-center font-inika text-[#622F00] text-lg">
                  Total Cost: {MINT_COST * mintCount} EGLD
                </div>
              </div>
              {wallet.connected ? (
                <>
                  <button
                    className={`connect-btn flex justify-center px-16 ${
                      activeTransactionStatus.pending
                        ? "cursor-not-allowed"
                        : ""
                    }`}
                    disabled={activeTransactionStatus.pending}
                    onClick={handleMint}
                  >
                    Mint
                  </button>
                </>
              ) : (
                <>
                  <ConnectBtn />
                </>
              )}
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
