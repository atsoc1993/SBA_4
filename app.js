import express from 'express'
import { addresses, foundationMarketWallets } from './data/FoundationAddresses.js'
import balances from './data/AddressBalances.js'
import addressAssets from './data/AddressAssets.js'
let app = express()
let port = 3000
app.use(express.urlencoded());
app.use(express.json())
app.use('/addresses', addresses)
app.use('/balances', balances)
app.use('/addressAssets', addressAssets)

app.set('view engine', 'ejs')
app.set('views', './views')

app.get('/foundation_wallets_view', (req, res) => {
    res.render('accounts', { foundationMarketWallets } )
})
app.listen(port, () => {
    console.log(`Express listening at http://localhost:${port}/foundation_wallets_view`)
})