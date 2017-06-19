const express = require('express')
const app = express()

app.use(express.static('./'))

app.get('/', function (req, res) {
  res.redirect('/client/index.html');
})

app.listen(3000, function () {
  console.log('Server running on port 3000!')
})