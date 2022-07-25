import React, { useEffect, useState } from "react";
import { useWallet } from "../../hooks/useWallet";
import ClaimAmount from "./ClaimAmount";
import FunkyCard from "./FunkyCard";
import Stats from "./Stats";
import config from "../../config/config.json";
import axios from "axios";
import BigNumber from "bignumber.js";
import { convertStringToHex } from "../../utils/convertToHex";

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
  U64Value,
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
  //========== GET STAKING STATE =====================
  const getStakingState = async () => {
    const stakingStateQuery = new Query({
      address: new Address(config.stakingContract),
      func: new ContractFunction("getStakingState"),
    });
    const { returnData } = await proxy.queryContract(stakingStateQuery);
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

    // const totalStakedAmount = new U64Value(
    //   "0x" + stakingBuffer.toString("hex", a, (a += m))
    // ).toNumber();

    const totalStakedAmount = parseInt(
      stakingBuffer.toString("hex", a, (a += 8)),
      16
    );
    const totalBullStakedAmount = parseInt(
      stakingBuffer.toString("hex", a, (a += 8)),
      16
    );
    const total_bear_staked_amount = parseInt(
      stakingBuffer.toString("hex", a, (a += 8)),
      16
    );
    const total_ninja_bear_staked_amount = parseInt(
      stakingBuffer.toString("hex", a, (a += 8)),
      16
    );
    const total_lone_bear_staked_amount = parseInt(
      stakingBuffer.toString("hex", a, (a += 8)),
      16
    );
    const total_funky_sluggers_staked_amount = parseInt(
      stakingBuffer.toString("hex", a, (a += 8)),
      16
    );

    return {
      isActive,
      currentEpoch,
      currentStakingRound,
      totalStakedAmount,
      totalBullStakedAmount,
      total_bear_staked_amount,
      total_ninja_bear_staked_amount,
      total_lone_bear_staked_amount,
      total_funky_sluggers_staked_amount,
    };
  };

  //========== GET STAKING STATE =====================

  //========== GET ADDRESS STATE =====================
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
    const getAddressStateAsync = async () => {
      if (!wallet.address) {
        return;
      }
      const addressStakeData = await getAddressStake();
      console.log("addressStakeData", addressStakeData);
      const addressBuffer = Buffer.from(addressStakeData[0], "base64");
      console.log(
        "(splitAddressStake(addressBuffer))",
        splitAddressStake(addressStakeData)
      );

      // const rewardData = await getRewards();
      // setReward(
      //   rewardData[0].length > 0
      //     ? parseInt(Buffer.from(rewardData[0], "base64").toString("hex"), 16) /
      //         10 ** 5 || 0
      //     : ""
      // );
    };
    getAddressStateAsync();
  }, [wallet]);

  const splitAddressStake = (addressStake) => {
    let a = 0;
    let m = addressStake.readUInt32BE(a);
    a += 4;
    const barrel_capacity =
      new BigNumber(
        "0x" + addressStake.toString("hex", a, (a += m))
      ).toNumber() /
      10 ** 5;

    /////////////////////////
    let n = addressStake.readUInt32BE(a);
    a += 4;
    const rewards_collected =
      new BigNumber(
        "0x" + addressStake.toString("hex", a, (a += n))
      ).toNumber() /
      10 ** 5;
    ///////////////////////////////
    return {
      barrel_capacity,
      rewards_collected,
    };
  };
  //========== GET ADDRESS STATE =====================

  //========== GET NONCE STATE =====================

  const splitNonceStake = (NonceStake) => {
    let a = 0;
    const index = parseInt(NonceStake.toString("hex", a, (a += 4)), 16);
    const staked = "01" == NonceStake.toString("hex", a, (a += 1));
    const unlock_epoch = parseInt(NonceStake.toString("hex", a, (a += 8)), 16);
    const current_epoch = parseInt(NonceStake.toString("hex", a, (a += 8)), 16);
    const lastclaimedround = parseInt(
      NonceStake.toString("hex", a, (a += 8)),
      16
    );

    return {
      index,
      staked,
      unlock_epoch,
      current_epoch,
      lastclaimedround,
    };
  };

  const getNonceStake = async () => {
    const nonceStateQuery = new Query({
      address: new Address(config.stakingContract),
      func: new ContractFunction("getNonceState"),
      args: [new U64Value("07")],
    });
    const { returnData } = await proxy.queryContract(nonceStateQuery);
    return returnData;
  };

  useEffect(() => {
    const getNonceStateAsync = async () => {
      if (!wallet.address) {
        return;
      }
      const nonceStakeData = await getNonceStake();
      // console.log("nonceStakeData", nonceStakeData);
      const nonceBuffer = Buffer.from(nonceStakeData[0], "base64");
      // console.log(
      //   "(splitNonceStake(nonceBuffer))",
      //   splitNonceStake(nonceBuffer)
      // );

      // const rewardData = await getRewards();
      // setReward(
      //   rewardData[0].length > 0
      //     ? parseInt(Buffer.from(rewardData[0], "base64").toString("hex"), 16) /
      //         10 ** 5 || 0
      //     : ""
      // );
    };
    getNonceStateAsync();
  }, [wallet]);

  //========== GET NONCE STATE =====================

  //====== GET USERS STAKED TOKENS STATE =================

  const getUsersStakedTokensState = async () => {
    const usersStakedTokensStateQuery = new Query({
      address: new Address(config.stakingContract),
      func: new ContractFunction("users_staked_tokens"),
      args: [new AddressValue(new Address(wallet.address))],
    });
    const { returnData } = await proxy.queryContract(
      usersStakedTokensStateQuery
    );
    return returnData;
  };
  useEffect(() => {
    const getUsersStakedTokensStateAsync = async () => {
      let a = 0;
      const usersStakedTokensStates = await getUsersStakedTokensState();
      const usersStakedTokensBuffers = usersStakedTokensStates.map(
        (usersStakedTokensState) =>
          Buffer.from(usersStakedTokensState, "base64").toString("hex", a)
      );
      setUserNfts(usersStakedTokensBuffers);
      console.log("usersStakedTokensState", usersStakedTokensStates);
      console.log("usersStakedTokensBuffer", usersStakedTokensBuffers);
    };
    getUsersStakedTokensStateAsync();
  }, [wallet]);

  //====== GET USERS STAKED TOKENS STATE =================

  return (
    <div>
      <div>
        <Stats />
        <div className="funky-card-group px-2 md:px-5">
          <ClaimAmount />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-10 mt-10">
            {userNfts.map((userNft) => (
              <FunkyCard
                type="farm"
                content={{ nonce: 1, name: "Radhe Radhe" }}
                key={1}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FarmTab;
