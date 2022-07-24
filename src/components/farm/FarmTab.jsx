import React, { useEffect, useState } from "react";
import { useWallet } from "../../hooks/useWallet";
import ClaimAmount from "./ClaimAmount";
import FunkyCard from "./FunkyCard";
import Stats from "./Stats";
import axios from "axios";
import config from "../../config/config.json";

// import {
//   Address,
//   Balance,
//   ChainID,
//   ContractFunction,
//   GasLimit,
//   SmartContract,
//   U32Value,
// } from "@elrondnetwork/erdjs/out";
// import { sendTransactions } from "@elrondnetwork/dapp-core";

function FarmTab() {
  const { wallet } = useWallet();
  const [userNfts, setUserNfts] = useState([]);
  useEffect(() => {
    if (wallet.connected) {
      axios
        .get(
          `https://devnet-api.elrond.com/accounts/${wallet.address}/nfts?collections=${config.NftTokenIdentifier}`
        )
        .then((response) => {
          setUserNfts(response.data);
          // console.log("response", response.data);
        });
    }
  }, [wallet]);
  return (
    <div>
      <div>
        <Stats />
        <div className="funky-card-group px-2 md:px-5">
          <ClaimAmount />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-10 mt-10">
            {userNfts.map((userNft) => (
              <FunkyCard type="farm" content={userNft} key={userNft.nonce} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FarmTab;
