"use client";

import { ReactNode, useLayoutEffect, useState } from "react";

import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import { publicProvider } from "wagmi/providers/public";
import { sepolia } from "wagmi/chains";

const chains = [sepolia];
const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;

if (!projectId) throw new Error("Missing NEXT_PUBLIC_PROJECT_ID");

const { publicClient } = configureChains(chains, [
  publicProvider(),
  w3mProvider({ projectId }),
  jsonRpcProvider({
    rpc: () => ({
      http: "https://rpc2.sepolia.org",
    }),
  }),
]);
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 2, chains }),
  publicClient,
});
const ethereumClient = new EthereumClient(wagmiConfig, chains);

const ClientProviders = (props: { children: ReactNode }) => {
  return (
    <>
      <WagmiConfig config={wagmiConfig}>{props.children}</WagmiConfig>

      <Web3Modal
        projectId={projectId}
        ethereumClient={ethereumClient}
        themeVariables={{
          "--w3m-accent-color": "#2563eb",
          "--w3m-background-color": "#1e3a8a",
        }}
      />
    </>
  );
};

export default ClientProviders;
