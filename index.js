const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('Hello From Twitter + Nodejs App')
})

app.listen(8080)
