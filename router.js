const { getFirstPage, getTwitter, getCurrentProfile } = require('./Controllers/Twitter')
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

const router = require('express').Router()

router.get('/', getFirstPage)
router.get('/twitter/login', passport.authenticate('twitter'), getTwitter)
router.get('/twitter', passport.authenticate('twitter'), getTwitter)
router.get('/current-profile', getCurrentProfile)

module.exports = router
