import { AlgorandClient } from "@algorandfoundation/algokit-utils";
import { foundationMarketWallets } from "../data/FoundationAddresses.js";

async function getAddressBalances() {
    let algorand = AlgorandClient.mainNet()
    let addressBalanceObject = {}
    for (let address of Object.keys(foundationMarketWallets)) {
        try {
            console.log(address)
            let balance = Math.trunc((await algorand.account.getInformation(address)).balance.algo)
            addressBalanceObject[address] = balance
            await new Promise((resolve) => setTimeout(resolve, 10))
        } catch {
            console.log("Invalid address")
        }
    }
    return addressBalanceObject
}


export default getAddressBalances
