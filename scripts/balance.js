const hre = require("hardhat");
const ethers = hre.ethers; // ✅ Correct way to access ethers

async function main() {
    const [deployer] = await ethers.getSigners(); // ✅ Get deployer address
    const balance = await ethers.provider.getBalance(deployer.address); // ✅ Fetch balance
    console.log(`Balance of ${deployer.address}: ${ethers.formatEther(balance)} ETH`); // ✅ Format correctly
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
