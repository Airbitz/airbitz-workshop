const app = require('./expressApp.js')

const output = {
  keys: '<none>',
  address: '<none>',
  balance: NaN
}

app.get('/', function (req, res) {
  res.render('index', output)
})

app.post('/spend', function (req, res) {
  res.redirect('/')
  console.log(
    `amount: ${parseInt(req.body.amount)}, address: ${req.body.address}`
  )
  // TODO: Actual spend
})

function main () {
  // TODO:
  // Log in
  // Get keys
  // Create wallet
  // Check balance
}

main().catch(e => console.error(e))
