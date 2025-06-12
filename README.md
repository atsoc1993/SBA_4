# Skill Based Assessment # 4 — REST Endpoints

## The "/addresses" Path:
- Four getter methods: `/`(root), `/display`, `/getLabel/:address` and `/getAddressByLabel/:label`
- One post method: `/add`
- One patch method: `/updateAddressbyLabel/:label`
- One delete method: `/removeAddress/:address`

**Get Methods:**
`/` provides all Foundation Market Wallets in a json format
`/display` displays all Foundation Market Wallets
`/getLabel/:address` returns a label for a given address param
`/getAddressByLabel/:label` returns an address for a given label

**Post Method:**
`/add` allows a new address & label to be added into our data which must be included in the body of the request

**Update Method:**
`/updateAddressByLabel:label` accepts a param of label and a query including the updated address to internally change data

**Delete Method:**
`/removeAddress/:address` accepts an address param— the address provided is removed from our master addresses object

## The "/balances" Path:
- Three getter methods: `/`(root), `/display`, `/:address`

**Get Methods:**
`/` provides all addresses and their respective balance in a single json object
`/display` displays all addresses and their respective balance
`/:address` passing an address param at root returns the balance of the requested address

*Note: The `/balances` path requires helper function "getAddressBalances" located at helpers/GetAddressBalance.js*

## The "/addressAssets" path:
- One getter method: `/:address`

`/` (root) requires a param of a particular address, and returns assets held by that address that are not the native chain asset (Standard Assets)

## EJS Views Implementation
- The view engine set simply displays all foundation market wallet addresses and their respective label with minimal CSS Styling, the HTML with some EJS Syntax is located at views/accounts.ejs
