import { web3, ethers } from 'hardhat';
export const ADDRESS = process.env.ADDRESS;

async function main() {

    async function deployContract(contractName: string, args: any[], value: number) {
        const factory = await ethers.getContractFactory(contractName);
        const abi = JSON.parse(factory.interface.format('json') as string);
        return new web3.eth.Contract(abi).deploy({ data: factory.bytecode, arguments: args })
            .send({
                value: value,
                from: ADDRESS,
                gas: 9500000,
                gasPrice: '1'
            })
    }
}

main().then().catch(e => console.error(e));
