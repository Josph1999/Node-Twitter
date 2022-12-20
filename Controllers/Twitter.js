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
