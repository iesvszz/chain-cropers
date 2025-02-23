const hre = require("hardhat");
const ethers = hre.ethers;

const CONTRACT_ADDRESS = "0xe14d3D4b8B80CEFFA7FecA060695b43D6c12Dff0";
const CONTRACT_ABI = require("../artifacts/contracts/FarmerMarket.sol/FarmerMarket.json").abi; // Load contract ABI

async function main() {
    const [deployer] = await ethers.getSigners();
    const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, deployer);

    console.log("Interacting with contract at:", CONTRACT_ADDRESS);

    // Example: Call a function (replace with actual contract function)
    const productCount = await contract.productCount();
    console.log("📦 Total Products:", productCount.toString());

    // Example: Call another function
    // await contract.addProduct("Organic Rice", "ipfs://QmXYZ123", 100);
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
