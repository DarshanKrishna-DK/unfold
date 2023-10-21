import {MetaMaskSDK} from '@metamask/sdk';

const MMSDK = new MetaMaskSDK.MetaMaskSDK()

const ethereum = MMSDK.getProvider();

const connectButton = document.getElementById("button");

connectButton.addEventListener("click", async () => {
  if (typeof window.ethereum !== "undefined") {
    // MetaMask is installed
    try {
      const accounts = await ethereum.request({ method: "eth_requestAccounts" });
      const walletAddress = accounts[0];

      // User is connected to MetaMask
      console.log("Connected to MetaMask: ", walletAddress);
    } catch (error) {
      // Something went wrong while connecting to MetaMask
      console.error(error);
    }
  } else {
    // MetaMask is not installed
    window.open("https://metamask.io/", "_blank");
  }
});