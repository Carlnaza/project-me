require('dotenv').config()
const { join } = require('path')
const express = require('express')
const passport = require('passport')
const { User } = require('./models')
const LocalStrategy = require('passport-local').Strategy
const { Strategy: JWTStrategy, ExtractJwt } = require('passport-jwt')

const app = express()

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(join(__dirname, 'client', 'build')))
}

app.use(express.urlencoded({ extended: true }))
app.use(passport.initialize())
app.use(passport.session())
app.use(express.json())

passport.use(new LocalStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

passport.use(new JWTStrategy({
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.SECRET
}, (jwtPayload, cb) => User.findById(jwtPayload.id)
  .then(user => cb(null, user))
  .catch(err => cb(err))
))

app.use(require('./controllers'))

if (process.env.NODE_ENV === 'production') {
  app.get('/*', (req, res) => {
    res.sendFile(join(__dirname, 'client', 'build', 'index.html'))
  })
}

require('./config')
  .then(() => app.listen(process.env.PORT || 3001))
  .catch(e => console.error(e))