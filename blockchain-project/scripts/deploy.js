const { Network, Alchemy } = require("alchemy-sdk"); // ✅ Use CommonJS
const hre = require("hardhat"); // ✅ Hardhat requires CommonJS

const settings = {
    apiKey: "wxnCylDBDcRMByJ14m6iDKIK3_R0_i6w", // Replace with your actual Alchemy key
    network: Network.ETH_SEPOLIA, 
};

const alchemy = new Alchemy(settings);

async function main() {
    const [deployer] = await hre.ethers.getSigners(); // ✅ Use "hre.ethers"
    console.log("Deploying with:", deployer.address);

    const Contract = await hre.ethers.getContractFactory("FarmerMarket");
    // ✅ Use "hre.ethers"
    const contract = await Contract.deploy();
    await contract.deployed();

    console.log("🚀 Contract deployed to:", contract.address);
}

main().catch((error) => {
    console.error("Deployment failed:", error);
    process.exit(1);
});
