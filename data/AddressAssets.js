import express from 'express'
import { AlgorandClient } from '@algorandfoundation/algokit-utils';

let addressAssets = express.Router();


addressAssets
    .get('/:address', async (req, res, next) => {
        let targetAddress = req.params.address
        try {
            let algorand = AlgorandClient.mainNet()
            let assets = (await algorand.account.getInformation(targetAddress)).assets;
            let assetsWithoutBigInts = {}
            for (let asset of assets) {
                assetsWithoutBigInts[String(asset.assetId)] = {'assetAmount': String(asset.amount)}
            }
            console.log(assetsWithoutBigInts);
            res.send(assetsWithoutBigInts)
        } catch (err) {
            return next(err)
        }
    })


addressAssets.use((err, req, res, next) => {
    res.status(400).send(err.message)
})

export default addressAssets