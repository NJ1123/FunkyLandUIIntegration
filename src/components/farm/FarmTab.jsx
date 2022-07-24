import React, { useEffect, useState } from "react";
import { useWallet } from "../../hooks/useWallet";
import ClaimAmount from "./ClaimAmount";
import FunkyCard from "./FunkyCard";
import Stats from "./Stats";
import config from "../../config/config.json";
import axios from "axios";
import BigNumber from "bignumber.js";

import {
  Address,
  AddressValue,
  Balance,
  ChainID,
  ContractFunction,
  GasLimit,
  ProxyProvider,
  Query,
  SmartContract,
  U32Value,
} from "@elrondnetwork/erdjs/out";
import { sendTransactions } from "@elrondnetwork/dapp-core";

function FarmTab() {
  const { wallet } = useWallet();
  const [userNfts, setUserNfts] = useState([]);
  // useEffect(() => {
  //   if (wallet.connected) {
  //     axios
  //       .get(
  //         `https://devnet-api.elrond.com/accounts/${wallet.address}/nfts?collections=${config.NftTokenIdentifier}`
  //       )
  //       .then((response) => {
  //         setUserNfts(response.data);
  //         // console.log("response", response.data);
  //       });
  //   }
  // }, [wallet]);
  const proxy = new ProxyProvider(config.devnet.network.apiAddress);
  const getStakingState = async () => {
    const stakingStateQuery = new Query({
      address: new Address(config.stakingContract),
      func: new ContractFunction("getStakingState"),
    });
    const { returnData } = await proxy.queryContract(stakingStateQuery);
    return returnData;
  };
  const getAddressStake = async () => {
    const addressStateQuery = new Query({
      address: new Address(config.stakingContract),
      func: new ContractFunction("getAddressState"),
      args: [new AddressValue(new Address(wallet.address))],
    });
    const { returnData } = await proxy.queryContract(addressStateQuery);
    return returnData;
  };
  useEffect(() => {
    const getStakingStateAsync = async () => {
      const stakingState = await getStakingState();
      const stakingBuffer = Buffer.from(stakingState[0], "base64");
      console.log(stakingState);
      console.log("stakingBuffer", stakingBuffer);
      console.log("data", splitStakingState(stakingBuffer));
    };
    getStakingStateAsync();
  }, [wallet]);

  const splitStakingState = (stakingBuffer) => {
    let a = 0;
    const isActive = "01" == stakingBuffer.toString("hex", a, (a += 1));
    const currentEpoch = parseInt(
      stakingBuffer.toString("hex", a, (a += 8)),
      16
    );
    const currentStakingRound = parseInt(
      stakingBuffer.toString("hex", a, (a += 8)),
      16
    );
    const m = stakingBuffer.readUInt32BE(a);
    a += 4;
    const totalStakedAmount =
      new BigNumber(
        "0x" + stakingBuffer.toString("hex", a, (a += m))
      ).toNumber() /
      10 ** 5;
    return {
      isActive,
      currentEpoch,
      currentStakingRound,
      totalStakedAmount,
    };
  };
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
