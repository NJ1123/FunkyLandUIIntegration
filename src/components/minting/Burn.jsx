import React from "react";
import CountField from "./CountField";
import config from "../../config/config.json";
import BigNumber from "bignumber.js";
import { sendTransactions } from "@elrondnetwork/dapp-core";

import {
  SmartContract,
  Address,
  ContractFunction,
  GasLimit,
  ChainID,
  U64Value,
  Transaction,
  TransactionPayload,
  BytesValue,
  BigUIntValue,
  Nonce,
  Balance,
} from "@elrondnetwork/erdjs";

import { useWallet } from "../../hooks/useWallet";

function Burn(props) {
  const { wallet, handleLogout, trimWallet } = useWallet();
  const { setMinting } = props;
  const handleBurn = async () => {
    const token_identifier = "4255524E4E46542D633135663334";
    const nonce = "02";
    const quantity = "01";
    const destination =
      "00000000000000000500f41d383cef1ffd9225320b6d20179940ee17ddd9fa10";
    const name = "6275726E47656E5A65726F46756E6B696573";
    const first_arg = token_identifier;
    const second_arg = "02";
    const Data =
      "ESDTNFTTransfer" +
      "@" +
      token_identifier +
      "@" +
      nonce +
      "@" +
      quantity +
      "@" +
      destination +
      "@" +
      name +
      "@" +
      second_arg;

    // const payload = TransactionPayload.contractCall()
    //   .setFunction(new ContractFunction("ESDTNFTTransfer"))
    //   .setArgs([
    //     BytesValue.fromUTF8(config.burnTokenIdentifier),
    //     new U64Value(nonce),
    //     new BigUIntValue(new BigNumber(1)),
    //     new Address(config.devnet.mintingContract),
    //     BytesValue.fromUTF8("burnGenZeroFunkies"),
    //     BytesValue.fromUTF8(config.burnTokenIdentifier),
    //     new U64Value(nonce),
    //   ])
    //   .build();

    // const contract = new SmartContract({
    //   address: new Address(config.mintingContract),
    // });
    // const callTransactionOne = new Transaction({
    //   receiver: new Address(wallet.address),
    //   gasLimit: new GasLimit(80000000),
    //   data: new TransactionPayload(Data),
    // });

    // const payload = TransactionPayload.contractCall()
    //   .setFunction(new ContractFunction("ESDTNFTTransfer"))
    //   .setArgs([
    //     BytesValue.fromUTF8(config.BurnTokenIdentifier),
    //     new U64Value(nonce),
    //     new BigUIntValue(new BigNumber(1)),
    //     new Address(config.mintingContract),
    //     BytesValue.fromUTF8("burnGenZeroFunkies"),
    //     BytesValue.fromUTF8(config.BurnTokenIdentifier),
    //     new U64Value(nonce),
    //   ])
    //   .build();
    const callTransactionOne = new Transaction({
      receiver: new Address(wallet.address),
      gasLimit: new GasLimit(100000000),
      value:  Balance.fromString(0),
      data: new TransactionPayload(Data),
    });
    // console.log("callTransaction", callTransactionOne);
    // const contract = new SmartContract({
    //   address: new Address(config.mintingContract),
    // });

    // const callTransactionOne = contract.call({
    //   func: new ContractFunction("ESDTNFTTransfer"),
    //   args: [
    //     BytesValue.fromUTF8(config.BurnTokenIdentifier),
    //     new U64Value(nonce),
    //     new BigUIntValue(new BigNumber(1)),
    //     new Address(config.mintingContract),
    //     BytesValue.fromUTF8("burnGenZeroFunkies"),
    //     BytesValue.fromUTF8(config.BurnTokenIdentifier),
    //     new U64Value(nonce),
    //   ],
    //   gasLimit: new GasLimit(15000000),
    //   receiver: wallet.address

    // });

    callTransactionOne.chainID = new ChainID(config.chainID);
    const { sessionId, error } = sendTransactions({
      transactions: callTransactionOne,
    });

    console.log("error", error);
    console.log("sessionId", sessionId);

    console.log("mintingcontract", config.mintingContract);

    setMinting(true);
  };
  return (
    <>
      <div className="py-6 md:py-12">
        <div className="w-full bg-[#34A0AE]  max-w-6xl mx-auto rounded-2xl p-6">
          <div className="bg-[#337A83] rounded-2xl p-6">
            <div className="text-center section-title text-5xl">
              Burn Funky Eggs
            </div>
            <div className="text-center font-inika text-[#DFFF1A] text-2xl mt-3 ">
              Burn and Get New Funkies
            </div>
            <div className="text-center font-inika text-[#DFFF1A] text-3xl my-8">
              Select Quantity
            </div>

            <div className="my-10">
              <CountField />
            </div>

            <button
              className="connect-btn flex justify-center px-16"
              onClick={handleBurn}
            >
              Burn
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Burn;
