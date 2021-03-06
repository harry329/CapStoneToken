// define a variable to import the <Verifier> or <renamedVerifier> solidity contract generated by Zokrates

// Test verification with correct proof
// - use the contents from proof.json generated from zokrates steps

    
// Test verification with incorrect proof

var verifier = artifacts.require('Verifier.sol');

// Test verification with correct proof
// - use the contents from proof.json generated from zokrates steps
contract('TestSquareVerifier', accounts => {
    const correctProof ={
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
    const wrongProof ={
        "proof": {
            "a": ["0x1ba0df5159c4c75da8a30d34e28b0a2242b9634aed77c9b41b979e6081ed5033", "0x04a81e18c8c57362b000213bce6d533055ba4f830dc76abf9c5bf37907ffbdd0"],
            "b": [["0x272c1132c59a11b904df2e3921eaf7b40ce948a1a24e9b36dd6e2e04cc3e9560", "0x1535e1e6c5cb4d685ef68595487910d68d8813765f422b977b53e32f8c53fc94"], ["0x26e8a26d9bd754c038c42bb9b5b32b91a0c1463aba53b03eb8e224f1230f853a", "0x2c080f65faca972f26229da56b338fc12d62261f8626ec42659bc1090e7a983d"]],
            "c": ["0x08c833d09a989255fa84bd16e9b4374fbf2c59f92f8b67298771b72c03e56f7f", "0x2f85944aef8c9f217463077e0d8f85fdf5546b3b570820ade0cf9c95a3feb440"]
        },
        "inputs": ["0x0000000000000000000000000000000000000000000000000000000000000010", "0x0000000000000000000000000000000000000000000000000000000000000011"]
    }
    describe('verify proof', function () {

        beforeEach(async function () {
            this.verifierContract = await verifier.new({from: accounts[0]});
        })
        //
        // it('Test verification with incorrect proof', async function () {
        //     let v = await this.verifierContract.verifyTx(wrongProof.proof.a,wrongProof.proof.b,wrongProof.proof.c,wrongProof.inputs,{from: accounts[0]});
        //     assert.equal(v.logs[0],null,"Test verification with incorrect proof failed");
        // })

        it('Test verification with correct proof', async function () {
            let v = await this.verifierContract.verifyTx(correctProof.proof.a,correctProof.proof.b,correctProof.proof.c,correctProof.inputs,{from: accounts[0]});
            console.log("log")
            console.log(v)
            assert.equal(v.logs[0].event,'Verified',"Test verification with incorrect proof failed");
        })
    })
})
