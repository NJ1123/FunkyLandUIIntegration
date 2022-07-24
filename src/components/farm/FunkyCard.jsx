import {
  Address,
  Balance,
  ChainID,
  ContractFunction,
  GasLimit,
  SmartContract,
  Transaction,
  TransactionPayload,
  U32Value,
} from "@elrondnetwork/erdjs/out";
import React from "react";
import { bullCard } from "../../assets/images/images";
import ProgressBar from "../common/ProgressBar";
import config from "../../config/config.json";
import { sendTransactions } from "@elrondnetwork/dapp-core";
import { useWallet } from "../../hooks/useWallet";
import { convertStringToHex } from "../../utils/convertToHex";

function FunkyCard({ type, content }) {
  const { name, stamina, earned, timeStaked } = {
    name: "Bull 11",
    stamina: "50%",
    earned: 364,
    timeStaked: 90,
  };

  const mintCount = 10;
  const { wallet } = useWallet();

  const destination = new Address(config.stakingContract);
  const nonce =
    content.nonce.toString(16).length % 2 === 0
      ? content.nonce.toString(16)
      : `${"0" + content.nonce.toString(16)}`;
  const tokenIdentifier = convertStringToHex(content.collection);
  const quantity = "01";

  // console.log("destination", destination.valueHex);
  // console.log("content", content);
  const handleStake = async () => {
    // console.log("handleStake", content);
    const methodName = convertStringToHex("enter_staking");
    const transaction = new Transaction({
      sender: new Address(wallet.address),
      receiver: new Address(wallet.address),
      chainID: new ChainID(config.chainID),
      gasLimit: new GasLimit(config.GasLimit),
      data: new TransactionPayload(
        "ESDTNFTTransfer" +
          "@" +
          tokenIdentifier +
          "@" +
          nonce +
          "@" +
          quantity +
          "@" +
          destination.valueHex +
          "@" +
          methodName
      ),
    });

    const { sessionId, error } = sendTransactions({
      transactions: transaction,
    });
    console.log("error", error);
    console.log("sessionId", sessionId);
    //setMinting(true);
  };

  const handleUnstake = async () => {
    // console.log("handleUnstake", content);

    const contract = new SmartContract({
      address: new Address(config.stakingContract),
    });
    const callTransactionOne = contract.call({
      func: new ContractFunction("exit_staking"),
      args: [new U32Value(mintCount)],
      gasLimit: new GasLimit(config.GasLimit),
    });
    console.log("callTransaction", callTransactionOne);
    callTransactionOne.chainID = new ChainID(config.chainID);
    const { sessionId, error } = sendTransactions({
      transactions: callTransactionOne,
    });

    // const methodName = convertStringToHex("exit_staking");

    // const transaction = new Transaction({
    //   sender: new Address(wallet.address),
    //   receiver: new Address(wallet.address),
    //   chainID: new ChainID(config.chainID),
    //   gasLimit: new GasLimit(config.GasLimit),
    //   data: new TransactionPayload(
    //     "ESDTNFTTransfer" +
    //       "@" +
    //       tokenIdentifier +
    //       "@" +
    //       nonce +
    //       "@" +
    //       quantity +
    //       "@" +
    //       destination.valueHex +
    //       "@" +
    //       methodName
    //   ),
    // });

    // const { sessionId, error } = sendTransactions({
    //   transactions: transaction,
    // });
    console.log("error", error);
    console.log("sessionId", sessionId);
    //setMinting(true);
  };

  return (
    <>
      <div className="">
        <div className="funkies-card text-white bg-black text-center p-3 grid grid-cols-2 rounded-lg rounded-tl-none space-y-2">
          <div className="mx-auto rounded-lg col-span-2">
            <img src={bullCard} alt="Bull Card" />
          </div>
          <div className="text-xl md:text-2xl col-span-2">{content.name}</div>
          <>
            <div className="text-left text-[#DBD30F]">Stamina</div>
            <div className="text-right">{stamina}</div>
          </>
          <div className="col-span-2">
            <ProgressBar barClass="bg-[#DBFF00]" width={stamina} />
          </div>
          <>
            <div className="text-left text-[#DBD30F]">$ Earned</div>
            <div className="text-right">{earned}</div>
          </>
          <>
            <div className="text-left text-[#DBD30F]">Time Staked</div>
            <div className="text-right">{timeStaked} days</div>
          </>
        </div>
        <div className="justify-center col-span-2 my-5">
          <button
            className="text-center text:lg md:text-xl bg-[#8FC27E] shadow-md rounded-lg rounded-tl-none py-3 px-6 w-full"
            onClick={type === "farm" ? handleUnstake : handleStake}
          >
            {type === "farm" ? "Return to Barn" : "Send to Farm"}
          </button>
        </div>
      </div>
    </>
  );
}

export default FunkyCard;
