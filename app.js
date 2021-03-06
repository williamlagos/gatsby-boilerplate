// const colors = require('colors')
const path = require('path')
const express = require('express')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const cors = require('cors')
const ip = require('ip')
const errorhandler = require('errorhandler')
const compression = require('compression')
const app = express()
const host = ip.address()
const port = process.env.PORT || '8200'
app.use(express.static(path.join(__dirname, 'public')))
app.use(compression())
app.use(cors())
app.use(errorhandler())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(logger('dev'))
app.set('port', port)
app.listen(port, () => { console.log((`Landing page dev server listening on http://${host}:${port}...`).green.bold) })
module.exports = app
