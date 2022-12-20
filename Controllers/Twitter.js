const passport = require('passport')
const Strategy = require('passport-twitter').Strategy
const dotenv = require('dotenv')

dotenv.config()

passport.use(
  new Strategy(
    {
      consumerKey: process.env.API_KEY,
      consumerSecret: process.env.API_SECRET,
      callbackURL: process.env.CALLBACK_URL
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

const getFirstPage = (req, res) => {
  try {
    res.status(200).send('Hello From Nodejs + Twitter')
  } catch (error) {
    res.status(500).send('Something went wrong')
  }
}

const getTwitter = (req, res) => {
  try {
    res.redirect(`/current-profile?username=${req.user.username}`)
  } catch (error) {
    res.status(500).send('Something Went Wrong')
  }
}

const getCurrentProfile = (req, res) => {
  try {
    res.send(`Hello! ${req.query.username}`)
  } catch (error) {
    res.status(500).send('Something Went Wrong')
  }
}

module.exports = {
  getFirstPage,
  getTwitter,
  getCurrentProfile
}
