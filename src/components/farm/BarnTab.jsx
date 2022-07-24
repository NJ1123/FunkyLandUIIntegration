import React, { useEffect, useState } from "react";
import { useWallet } from "../../hooks/useWallet";
import FunkyCard from "./FunkyCard";
import Stats from "./Stats";
import axios from "axios";
import config from "../../config/config.json";

function BarnTab() {
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
        <div className="funky-card-group  px-2 md:px-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-10">
            {userNfts.map((userNft) => (
              <FunkyCard type="barn" content={userNft} key={userNft.nonce} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BarnTab;
