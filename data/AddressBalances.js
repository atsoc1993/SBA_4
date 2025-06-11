import express from 'express'
import getAddressBalances from '../helpers/GetAddressBalance.js';

let balances = express.Router();

let addressBalances = await getAddressBalances();

balances
    .get('/', async (req, res) => {
        res.send(addressBalances);
    })
    .get('/display', async (req, res) => {

        let htmlCode = '<div>'
        
        for (let balance of Object.entries(addressBalances)) {
            htmlCode += `<p>Address: ${balance[0]};<br>Algo Balance: ${balance[1]}</p>`
        }
        htmlCode += '</div>'
        res.send(htmlCode);
    })
    .get('/:address', (req, res, next) => {
        let queries = req.query
        let balance = Object.entries(addressBalances).filter((entry) => req.params.address === entry[0])
        if (balance.length === 0) {
            let error = new Error('No address found')
            error.status = 404
            return next(error)
        }
        res.send(balance[0][1])
    });

balances.use((err, req, res, next) => {
    res.status(err.status).send(err.message)
})

export default balances