import Web3 from "web3";

let web3;

// Check if MetaMask is installed
if (window.ethereum) {
    web3 = new Web3(window.ethereum);
    try {
        // Request account access if needed
        window.ethereum.request({ method: "eth_requestAccounts" });
    } catch (error) {
        console.error("User denied account access");
    }
} else {
    console.error("MetaMask not detected. Please install MetaMask.");
}

export default web3;
