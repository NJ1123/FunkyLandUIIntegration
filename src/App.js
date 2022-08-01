import React from "react";
import "./App.css";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Minting from "./pages/Minting";
import Farm from "./pages/Farm";
import {
  DappCoreUIWrapper,
  DappProvider,
  DappUI,
} from "@elrondnetwork/dapp-core";
import config from "./config/config.json";

function App() {
  const walletConnectBridgeAddresses = ["https://bridge.walletconnect.org"];
  const walletConnectBridge =
    walletConnectBridgeAddresses[
      Math.floor(Math.random() * walletConnectBridgeAddresses.length)
    ];
  const {
    TransactionsToastList,
    SignTransactionsModals,
    NotificationModal,
  } = DappUI;
  const network = config.devnet.network;
  const walletConnectDeepLink = config.walletConnectLink;

  return (
    <>
      <DappProvider
        networkConfig={{
          network,
          walletConnectBridge,
          walletConnectDeepLink,
        }}
      >
        <DappCoreUIWrapper>
          <TransactionsToastList />
          <NotificationModal />
          <SignTransactionsModals className="signTransaction" />
        </DappCoreUIWrapper>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/app">
            <Route path="minting" element={<Minting />} />
            <Route path="farm" element={<Farm />} />
          </Route>
        </Routes>
      </DappProvider>
    </>
  );
}

export default App;
