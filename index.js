const express = require('express')
const passport = require('passport')
const session = require('express-session')
const cors = require('cors')
const router = require('./router')

const PORT = 8080

const app = express()
app.use(
  session({ secret: 'twitter2020!', resave: true, saveUninitialized: true })
)
app.use(cors())
app.use(router)
app.use(passport.initialize())
app.use(passport.session())

app.listen(PORT, async () => {
  console.log(`server is up to port ${PORT}`)
})
