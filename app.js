import express from 'express'
import { addresses } from './data/FoundationAddresses.js'
import balances from './data/AddressBalances.js'

let app = express()
let port = 3000

app.use(express.json())
app.use('/addresses', addresses)
app.use('/balances', balances)


app.listen(port, () => {
    console.log(`Express listening at http://localhost:${port}`)
})