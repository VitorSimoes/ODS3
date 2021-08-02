const address = '0x8166964F0C6e9296e8265757445132cD8F9D94CB';
const abi =[
    {
        "anonymous": false,
        "inputs": [],
        "name": "alert",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "orderId",
                "type": "uint256"
            }
        ],
        "name": "delivery",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getCasos",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "tipe",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "price",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "farmer",
                        "type": "address"
                    },
                    {
                        "internalType": "string",
                        "name": "plantingLocation",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "plantingMethod",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "platingDate",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "harvestDate",
                        "type": "string"
                    },
                    {
                        "internalType": "enum RBCContract.Status",
                        "name": "status",
                        "type": "uint8"
                    }
                ],
                "internalType": "struct RBCContract.Product[]",
                "name": "",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "orderId",
                "type": "uint256"
            }
        ],
        "name": "getOrder",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "id",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "productId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "buyer",
                        "type": "address"
                    },
                    {
                        "internalType": "bool",
                        "name": "delivered",
                        "type": "bool"
                    }
                ],
                "internalType": "struct RBCContract.Order",
                "name": "order",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getOrders",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "id",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "productId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "buyer",
                        "type": "address"
                    },
                    {
                        "internalType": "bool",
                        "name": "delivered",
                        "type": "bool"
                    }
                ],
                "internalType": "struct RBCContract.Order[]",
                "name": "",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "productId",
                "type": "uint256"
            }
        ],
        "name": "getProduct",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "tipe",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "price",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "farmer",
                        "type": "address"
                    },
                    {
                        "internalType": "string",
                        "name": "plantingLocation",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "plantingMethod",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "platingDate",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "harvestDate",
                        "type": "string"
                    },
                    {
                        "internalType": "enum RBCContract.Status",
                        "name": "status",
                        "type": "uint8"
                    }
                ],
                "internalType": "struct RBCContract.Product",
                "name": "product",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_type",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "_price",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "_plantingLocation",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_plantingMethod",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_platingDate",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_harvestDate",
                "type": "string"
            }
        ],
        "name": "inserirProduto",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "productId",
                "type": "uint256"
            }
        ],
        "name": "sendOrder",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "productId",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "buyer",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "delivered",
                "type": "bool"
            }
        ],
        "name": "storageOrder",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            },
            {
                "internalType": "enum RBCContract.Status",
                "name": "status",
                "type": "uint8"
            }
        ],
        "name": "updateStatusProduct",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];
if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
}

web3.eth.getAccounts(function (err, accounts) {
    if (err != null) {
        console.log(err);
    } else if (accounts.length === 0) {//caso não encontre carteiras
        console.log('MetaMask is locked');
    } else {
        web3.eth.defaultAccount = accounts[0];
    }
});

//variavel para interpretar o nosso contrato
var rbc = new web3.eth.Contract(abi,address)


