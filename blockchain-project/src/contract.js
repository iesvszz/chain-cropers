import web3 from "./web3";
import ContractABI from "./FarmerMarket.json";  // Replace with your ABI file

const CONTRACT_ADDRESS = "0xe14d3D4b8B80CEFFA7FecA060695b43D6c12Dff0"; // Replace with actual address

const contract = new web3.eth.Contract(ContractABI.abi, CONTRACT_ADDRESS);

export default contract;
