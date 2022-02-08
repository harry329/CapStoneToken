// Test if a new solution can be added for contract - SolnSquareVerifier

// Test if an ERC721 token can be minted for contract - SolnSquareVerifier
var Verifier = artifacts.require('Verifier.sol');
var SolnSquareVerifier = artifacts.require('SolnSquareVerifier.sol');

contract('TestSolnSquareVerifier', accounts => {

    const correctProof =    {
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
    }
    const account_one = accounts[0];

    describe('verify proof', function () {

        beforeEach(async function () {
            let verifierContract = await Verifier.new({from: account_one});
            this.contract = await SolnSquareVerifier.new(verifierContract.address, {from: account_one});
        })

        it('Test if a new solution can be added for contract', async function () {
            var eventEmitted = false
            await this.contract.SolutionAdded((err,resp) => {
                eventEmitted = true
            });
            await this.contract.mintToken(accounts[0],2,correctProof.proof.a,correctProof.proof.b,correctProof.proof.c,correctProof.inputs,{from: accounts[0]});
            assert.equal(eventEmitted,true,"Event SolutionAdded didnt emit");
        })

        it('Test if an ERC721 token can be minted for contract', async function () {
            let v = await this.contract.mintToken(accounts[0],1,correctProof.proof.a,correctProof.proof.b,correctProof.proof.c,correctProof.inputs,{from: accounts[0]});
            assert.equal(v.logs[1].type, 'mined',"Token didnt mint");
        })

    })
})