// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract FarmerMarket {
    struct Product {
        uint id;
        string name;
        string ipfsHash;  // Stores product details in IPFS
        uint price;
        address payable owner;
    }

    uint public productCount;
    mapping(uint => Product) public products;

    event ProductAdded(uint id, string name, string ipfsHash, uint price, address owner);

    function addProduct(string memory _name, string memory _ipfsHash, uint _price) public {
        productCount++;
        products[productCount] = Product(productCount, _name, _ipfsHash, _price, payable(msg.sender));
        emit ProductAdded(productCount, _name, _ipfsHash, _price, msg.sender);
    }

    function buyProduct(uint _id) public payable {
        require(products[_id].owner != msg.sender, "You cannot buy your own product.");
        require(msg.value == products[_id].price, "Incorrect price.");

        Product storage product = products[_id];
        product.owner.transfer(msg.value);
        product.owner = payable(msg.sender);
    }
}
