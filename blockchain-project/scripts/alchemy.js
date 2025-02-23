const { Network, Alchemy } = require("alchemy-sdk");

const settings = {
    apiKey: "wxnCylDBDcRMByJ14m6iDKIK3_R0_i6w", // Replace with actual key
    network: Network.ETH_SEPOLIA,  // Ensure this is correct
};

const alchemy = new Alchemy(settings);

async function checkConnection() {
    try {
        const blockNumber = await alchemy.core.getBlockNumber();
        console.log("Connected! Latest Block Number:", blockNumber);
    } catch (error) {
        console.error("Connection failed:", error);
    }
}

checkConnection();
