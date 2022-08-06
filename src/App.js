import React from "react";
import "./App.css";
import { useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom";
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
          {/* <Route path="/app"> */}
          <Route path="minting" element={<Minting />} />
          <Route path="farm" element={<Farm />} />
          {/* </Route> */}
          <Route path="/" element={<Landing />} />
        </Routes>
      </DappProvider>
    </>
  );
}

function Home() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
}

function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>That feels like an existential question, don't you think?</p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

export default App;
