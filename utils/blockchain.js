// Temporarily disable blockchain functionality
const addProductToBlockchain = async (name, price) => {
    console.log(`Simulating blockchain transaction for: ${name}, Price: ${price}`);
    return "0xPlaceholderTransactionHash"; // Dummy transaction hash
};

module.exports = { addProductToBlockchain };
