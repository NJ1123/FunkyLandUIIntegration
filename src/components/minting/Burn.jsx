import React, { useEffect, useState } from "react";
import config from "../../config/config.json";
import BigNumber from "bignumber.js";
import {
  sendTransactions,
  transactionServices,
} from "@elrondnetwork/dapp-core";
import axios from "axios";
import "../../assets/css/burn.css";

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
    const nonce =
      selectedNft.nonce.toString(16).length % 2 === 0
        ? selectedNft.nonce.toString(16)
        : `${"0" + selectedNft.nonce.toString(16)}`;
    console.log(nonce);
    const quantity = "01";
    const destination =
      "00000000000000000500f41d383cef1ffd9225320b6d20179940ee17ddd9fa10";
    const name = "6275726E47656E5A65726F46756E6B696573";
    const first_arg = token_identifier;
    const second_arg = nonce;
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
      value: Balance.fromString(0),
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
    const transactionStatus = transactionServices.useTrackTransactionStatus({
      transactionId: sessionId,
      onSuccess: (sessionId) => {
        console.log("success");
      },
    });
    console.log("error", error);
    console.log("transactionStatus", transactionStatus);
    console.log("sessionId", sessionId);

    console.log("mintingcontract", config.mintingContract);

    setMinting(true);
  };
  const [userNfts, setUserNfts] = useState([]);
  const [selectedNft, setSelectedNft] = useState({});

  useEffect(() => {
    if (wallet.connected) {
      axios
        .get(
          `https://devnet-api.elrond.com/accounts/${wallet.address}/nfts?collections=BURNNFT-c15f34`
        )
        .then((response) => {
          setUserNfts(response.data);
          console.log("response", response.data);
        });
    }
  }, [wallet]);
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
            <div className="flex mt-10">
              <div className=" w-1/2 ">
                <div className="burn-nft-collection">
                  {userNfts.map((userNft, index) => {
                    return (
                      <div
                        className={
                          selectedNft && selectedNft.nonce === userNft.nonce
                            ? "burn-nft-active"
                            : "burn-nft"
                        }
                        key={index}
                      >
                        <img
                          src={userNft.media[0].url}
                          alt={userNft.nonce}
                          className="w-full"
                          onClick={() => {
                            setSelectedNft(userNft);
                            console.log(
                              typeof userNft.nonce,
                              userNft.nonce.toString(16)
                            );
                            const nonce =
                              userNft.nonce.toString(16).length % 2 === 0
                                ? userNft.nonce.toString(16)
                                : ` ${"0" + userNft.nonce.toString(16)}`;
                            console.log("nonce", nonce);
                          }}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="w-1/2">
                <button
                  className="connect-btn flex justify-center px-16 mt-10"
                  onClick={handleBurn}
                >
                  Burn
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Burn;
