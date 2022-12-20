const express = require('express')
const passport = require('passport')
const Strategy = require('passport-twitter').Strategy
const session = require('express-session')
const cors = require('cors')

passport.use(
  new Strategy(
    {
      consumerKey: 'yV34MsRaX9DRCsjVwSlNLVTsI',
      consumerSecret: 'dGCVUxzE66KLxTjFIRSnqFbcjW1TV1p6WC52cqrgKpXSRp4itn',
      callbackURL: 'http://localhost:8080/twitter'
    },
    (token, tokenSecret, profile, callback) => {
      return callback(null, profile)
    }
  )
)

passport.serializeUser((user, callback) => {
  try {
    callback(null, user)
  } catch (error) {
    return error
  }
})

passport.deserializeUser((obj, callback) => {
  try {
    callback(null, obj)
  } catch (error) {
    return error
  }
})

const app = express()
app.use(
  session({ secret: 'twitter2020!', resave: true, saveUninitialized: true })
)
app.use(cors())
app.get('/', (req, res) => {
  res.send('Hello From Twitter + Nodejs App')
})

app.listen(8080)
