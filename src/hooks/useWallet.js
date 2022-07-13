import {
  useGetAccountInfo,
  useGetLoginInfo,
  logout,
} from "@elrondnetwork/dapp-core";
import { useEffect, useState } from "react";

export const useWallet = () => {
  const [wallet, setWallet] = useState({
    connected: false,
    address: "",
  });
  const { isLoggedIn } = useGetLoginInfo();
  const { account } = useGetAccountInfo();
  const handleLogout = () => logout(`${window.location.pathname}`);
  const trimWallet = (wallet) =>
    wallet &&
    `${String(wallet).substr(0, 5)}
      ...
      ${String(wallet).substr(wallet.length - 5, wallet.length - 1)}`;
  const trimWalletLarge = (wallet) =>
    wallet &&
    `${String(wallet).substr(0, 12)}
      ...
      ${String(wallet).substr(wallet.length - 12, wallet.length - 1)}`;

  useEffect(() => {
    setWallet({
      connected: isLoggedIn,
      address: account.address,
    });
  }, [isLoggedIn, account]);

  return {
    wallet,
    trimWallet,
    trimWalletLarge,
    handleLogout,
  };
};
