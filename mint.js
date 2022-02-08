
const solnSquareVerifier = require('./eth-contracts/build/contracts/SolnSquareVerifier.json');
const HDWalletProvider = require("truffle-hdwallet-provider")
const INFURA_KEY = "";
const MNEMONIC = "";
const web3 = require('web3')
const NFT_CONTRACT_ADDRESS = "0xF08E99e65d6A304341fBd00FDf21Dfc4C73E9Afb"
const OWNER_ADDRESS = ""
const NETWORK = "rinkeby"
const NUM_TOKENS = 10


if (!MNEMONIC || !INFURA_KEY || !OWNER_ADDRESS || !NETWORK) {
    console.error("Please set a mnemonic, infura key, owner, network, and contract address.")
    return
}

const proofs = [
    {
        "proof": {
            "a": [
                "0x099c3b25476ff3c508a2f62f77906400b0e3e50678978982c5aafaaeb6fe287d",
                "0x2f4dc5e6a5b773163b891b0f4be2f559c1587f069e0e49a330b0fb3208728e4a"
            ],
            "b": [
                [
                    "0x2014962939c587ff9e4ea19f36e9090f1c8829851a5da3b3a7b8540e572a7592",
                    "0x2e801ca3728341eb357b47fff7aabb354d9656a6023034f2bc3f7e6aec66a4dd"
                ],
                [
                    "0x117b54a6101b5677bd1c5e241e86f39c40ed44ea40a57258c3fabc2d66953c88",
                    "0x183d1952e9f3719fd237cc3117b38336f4902146c93d549da5a7aa2cbf00741e"
                ]
            ],
            "c": [
                "0x219ae24827adae09707d15e20fed5640aa67ecbd9b644b9741af6505984bb248",
                "0x24ebb7fc294dc6dd92dfce1e792caa22f3507ac1441c4bd2a30ee5f45485b321"
            ]
        },
        "inputs": [
            "0x0000000000000000000000000000000000000000000000000000000000000009",
            "0x0000000000000000000000000000000000000000000000000000000000000001"
        ]
    },
    {
        "proof": {
            "a": [
                "0x13b5ac381fb7600896971fdf664dcd776705beb2c57afaed28df19fdd1db3015",
                "0x2627570aee1d91150be991e51300fe6e4f95b0a82c7008fcfb9d8d781f4cfde3"
            ],
            "b": [
                [
                    "0x2962f398de7e48ee8be1bbb68d798dc3306c4c4262b2ef646331b9b465d4a0bd",
                    "0x16a35802a5fb6342ec4e9d15167c98e0f4750a0083628977ab8746544b9cdf54"
                ],
                [
                    "0x2ed25749528b318b179662777aa15f270eefdcbfa97b791baf2791cf9d26d3ee",
                    "0x0856ac7166331de3b1c7a135589db326bfbc10934876be2d7c7f970f576bf355"
                ]
            ],
            "c": [
                "0x2428331be1dc4e2a12c3f8f8a767bf30737c99db4c67077629a847b3c2b4521d",
                "0x24ba4e4743951c58694ddfce259a92ff1d5ba94807153c1ef2fd4b86b1511cc2"
            ]
        },
        "inputs": [
            "0x0000000000000000000000000000000000000000000000000000000000000004",
            "0x0000000000000000000000000000000000000000000000000000000000000001"
        ]
    },
    {
        "proof": {
            "a": [
                "0x26f2c14d162c34b3d038ed4352cf828d4eb52079623291b366b4b7ff6c39f0ed",
                "0x14d09d69e78f87485671b18fdfe166f967476c70f101f2519ba96ca4d28b86eb"
            ],
            "b": [
                [
                    "0x210672aedac31b92f41a5700285eab6983eef63cb01a4f17475d86a769e06839",
                    "0x2baf04dc4e1a1f0ceba39719703180a17edb9c4a17044a4ded722dfb44212eff"
                ],
                [
                    "0x0a6bca49addcf312e9de14e937af36e7007ebca8588212901902c706fcfbe60b",
                    "0x02726b7c6f2d0d23062edd7c96712632867f2a80f2c5031a82a03bd6ba055496"
                ]
            ],
            "c": [
                "0x2e9325638edd73200482a7fb2f2b34c8d4f9d0205133818198d1849031f8d9da",
                "0x12a462350fce7777bd1036008fe06e110b681c0dcbea301ad61990f07ac065e6"
            ]
        },
        "inputs": [
            "0x0000000000000000000000000000000000000000000000000000000000000010",
            "0x0000000000000000000000000000000000000000000000000000000000000001"
        ]
    },
    {
        "proof": {
            "a": [
                "0x18e957b7a688d87d9bd9bda048e209c8f4a76fa041719781561484d9ab12445c",
                "0x040ae2e0fc9319abc34c1d89e89f34642c82cd0fd5bd73384a224e88887a76f8"
            ],
            "b": [
                [
                    "0x29280b65b2e3859f974fe19bd5a2cc834db9e74c1f0ec29c0166f43a4739e5b2",
                    "0x092a56d0d9a2e71da2d8acfd3b0c15ffc7e942c3e37a2f4df95d4c7a4e63544e"
                ],
                [
                    "0x0b14084f681d7d2c7174f40f65cf17e77fae38369951a88582f8da381576b0ac",
                    "0x0ee2d894c6bee568e169b447368f88f626b1c5a845074123bb088b1d39609c84"
                ]
            ],
            "c": [
                "0x22211798272a69cfa7eada5dd122914f7ae53c59909ffaaf84af4f8852020030",
                "0x0f0708d1559fb1ded85d20d05f531c5d5a0fdc04a47a074ed04a85465875a1a6"
            ]
        },
        "inputs": [
            "0x0000000000000000000000000000000000000000000000000000000000000019",
            "0x0000000000000000000000000000000000000000000000000000000000000001"
        ]
    },
    {
        "proof": {
            "a": [
                "0x2545827c55a0ce61f77f2d4021a8a94412852461af7bda6bf578f583ecd4437b",
                "0x02695f36eeb33b00e6c3107167b4897be70a95496af1b137488af4995d8b40ce"
            ],
            "b": [
                [
                    "0x0cac73cb1c5f06abb89901a6ad77bd3561a5eac1c75ca5679e997ebac920e194",
                    "0x268a81d97fc01c2ab00bd9d9361ddc3bde3029bf33bf3bdc506538cc6e54a576"
                ],
                [
                    "0x09c6945a0a6a29e6d1adc0855487f23e25ddd75ca0856346b11662099b3f53ee",
                    "0x29891dfede0a0b70d077c781b77da11568b918e5471c928a5d64bd7496b9e99e"
                ]
            ],
            "c": [
                "0x1751fdad22e6a3e0379c30269950609a078b1154734b83b969d880bcba3acb9b",
                "0x261b61c6a550b83337755d45ed9561f55212f16a2152d117952d6636221c7618"
            ]
        },
        "inputs": [
            "0x0000000000000000000000000000000000000000000000000000000000000001",
            "0x0000000000000000000000000000000000000000000000000000000000000001"
        ]
    },
    {
        "proof": {
            "a": [
                "0x2460fe1d22f7428ee8ac19a52a25d3e4739a201ef4fd6434ee81b15d39ff777b",
                "0x1c5865032c71a39e4304478797985a6a117f0984403be614b28a8ff6e6773f5e"
            ],
            "b": [
                [
                    "0x0a1e0ebd47d6618a6919fa10ea5511f5f4c4f2f34161c6b744ac5d4d40fce045",
                    "0x22e8871d75e9bbce801b6abd23d72a85d98086e1dc7c958e91d7c34e6358e4f5"
                ],
                [
                    "0x09f761040e14b6bd20438d8a3400aa95a7eb3ef98364a6c9bec99ec2ae31056a",
                    "0x2a966a29b88118a899907ccca8f32b4a0a8cb6c36b899348811dd72aec6d1e18"
                ]
            ],
            "c": [
                "0x2627570a93acb4134ae18f060de360a2179e00c01058cefc948986f1be72b518",
                "0x170bca9ac63e3432a6429a5419bb93700e7de794fa6c806e1dd17a2be7d367f0"
            ]
        },
        "inputs": [
            "0x0000000000000000000000000000000000000000000000000000000000000024",
            "0x0000000000000000000000000000000000000000000000000000000000000001"
        ]
    },
    {
        "proof": {
            "a": [
                "0x30383badafba83781fe4effe15fb7e7afa4fe103a3f6f9580931285f01703af0",
                "0x0fe8d459464f3742771b5defd5df7cbb904a0761a31b80951f465a79589920ee"
            ],
            "b": [
                [
                    "0x0f8ff28ea8e568955e4da1208c6838014f10de6f3dde9be45aabc5671117141c",
                    "0x175d2116a5f51400fd233d5f00ddf0ba3b68ea042af7fb9d9bba1352694df924"
                ],
                [
                    "0x1ed34a5b21ca3af2709b5f0a57ebd102756d79092019f0e475af75d9eb417f8e",
                    "0x0777dedd7a2e2368674678f710f6729b9439ff8960443b2f01d9162540d3031c"
                ]
            ],
            "c": [
                "0x16b932ceb52ab16feefa16a32a2492132566ae85d8f74553f48c845f276b5625",
                "0x0e6d623c63dc360f993ceb28f14e8d3dbd922fc6ee129de1e73cf0f24db2638e"
            ]
        },
        "inputs": [
            "0x0000000000000000000000000000000000000000000000000000000000000031",
            "0x0000000000000000000000000000000000000000000000000000000000000001"
        ]
    },
    {
        "proof": {
            "a": [
                "0x17d137cfaf597e97fe3f0e4456418813fed75d07f91df4eb1e588e7fb3bf2294",
                "0x01fd9935a772e2711600c6e81dc30fa1f4331e67f3a51153783cba476fe24f1d"
            ],
            "b": [
                [
                    "0x22c4556ac1e70ff51ea2d9691fbfb9025d483eddbbaf71f94f08c434ee22f066",
                    "0x221cb718f7754c6cce703d15091245d55408c7caef7f254805db5df585e547d9"
                ],
                [
                    "0x0c41dafb64c13067ba9b98593853f24a748815ed204f9d36f6639d5e189e30ef",
                    "0x2e7e8324c7ff00c240da942d5a96ad1f7ae7ab299ef3f32b699778c4a1623c8f"
                ]
            ],
            "c": [
                "0x05e99da1d7e1fa3e4c87c94ac2347576763d154ad19305a5a3ce1514f052e95e",
                "0x2769df6a0206df35b8364b5e8656b7443db862ddf2e6539811b4760a79bf3b23"
            ]
        },
        "inputs": [
            "0x0000000000000000000000000000000000000000000000000000000000000040",
            "0x0000000000000000000000000000000000000000000000000000000000000001"
        ]
    },
    {
        "proof": {
            "a": [
                "0x03adaf0c585a1b2ab2dcb415ac2a2cca176002690303cb3edaf84f675b61e1bd",
                "0x30503ee54d8ef225e06db7fbedf7a8fff8d8b09389bf131247dbdbc63b5ec334"
            ],
            "b": [
                [
                    "0x0ae44097e3ec84c184b1bd8d00ffbef05c1c1c66e6ec5da208eb31ce0a8db28a",
                    "0x032529471ea75b50299e24446395cdf5ddc84816662d2d24e422a3564d5905e8"
                ],
                [
                    "0x23b4bed0ce4f227d6a0a69021017cec72e99f17af10c03fcd0b36bd33effc7b4",
                    "0x0948bac8475a99004133445fa378ed09adf11035da128f58dc4519f0a558ac05"
                ]
            ],
            "c": [
                "0x2e7230450e0242308a38eea9cc1bc3efa5c8b868946be2fce6378194523a59bb",
                "0x06b49615e4565ff792e43895a045b6df61ba8fc26cd1e463d61bf4ee679bcb51"
            ]
        },
        "inputs": [
            "0x0000000000000000000000000000000000000000000000000000000000000051",
            "0x0000000000000000000000000000000000000000000000000000000000000001"
        ]
    },
    {
        "proof": {
            "a": [
                "0x0e916a966dddd060be4130c22cf55be2cd7ee84d1427cabf7dbd78e27a202f1e",
                "0x291cd2e5e110680433f3d585c0103af2ff7c8e1a99647b508ac214c53ad9074c"
            ],
            "b": [
                [
                    "0x110ea5c65c8934ca0dc086e9a475dbbdc0a30bda8ec24d3cc487d3119f15f18a",
                    "0x0cde601c92d2252ee67e18d34f074e64dfc081387c5643a8a337066a170597bc"
                ],
                [
                    "0x2d3d35f6162acd91959f160b83470b3403c548f443ecb5deef7ae07723da78b9",
                    "0x249b3f5f0c3d6e95ec978e7a97a5e246470a73dcc249d3150d3dbceb14d0863e"
                ]
            ],
            "c": [
                "0x2a057a8c7549e5e9424a1762068d33490f2391640f58c7aab1ec95b9b7e5ed2e",
                "0x05e6c5bb9a9877eb21d48b7ab232b3ada208ef36f438e4bb62fcf39610bae494"
            ]
        },
        "inputs": [
            "0x0000000000000000000000000000000000000000000000000000000000000064",
            "0x0000000000000000000000000000000000000000000000000000000000000001"
        ]
    }
]

async function main() {
    const provider = new HDWalletProvider(MNEMONIC, `https://${NETWORK}.infura.io/v3/${INFURA_KEY}`)
    const web3Instance = new web3( provider )

    if (NFT_CONTRACT_ADDRESS) {
        const nftContract = new web3Instance.eth.Contract(solnSquareVerifier.abi, NFT_CONTRACT_ADDRESS, { gasLimit: "1000000" })

        // Creatures issued directly to the owner.
        for (var i = 0; i < NUM_TOKENS; i++) {
            const result = await nftContract.methods.
            mintToken(OWNER_ADDRESS,i,proofs[i].proof.a,proofs[i].proof.b,proofs[i].proof.c,proofs[i].inputs).send({ from: OWNER_ADDRESS });

            console.log("Minted creature. Transaction: " + result.transactionHash)
        }
    }
}

main().then(res => {
    console.log(res);
})

