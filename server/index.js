const express = require('express')
const app = express()

app.get('/', function (req, res) {
  // res.redirect('../client/index.html');
  res.send('Hello World!');
})

app.listen(3000, function () {
  console.log('Server running on port 3000!')
})