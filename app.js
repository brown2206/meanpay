var express = require('express')
var bodyParser = require('body-parser')
var hbs = require('express-handlebars')
var mongoose = require('./db/schema')
var Payee = mongoose.model('Payee')
var methodOverride = require('method-override')
var _ = require('lodash')

var app = express()


// Load the models
app.models = require('./db/schema.js')

// Load the routes
// var routes = require('./routes')
// _.each(routes, function(controller, route) {
//   app.use(route, controller(app, route))
// })

app.set("view engine","hbs")
app.engine(".hbs", hbs({
  extname:        ".hbs",
  partialsDir:    "views/",
  layoutsDir:     "views/",
  defaultLayout:  "layout-main"
}));

//Middleware for REST API's
app.use(bodyParser.urlencoded({extended: true})) //handle forms
app.use(bodyParser.json())
app.use(methodOverride('X-HTTP-Method-Override'))

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  next()
})

app.post('/Payee',(req,res) => {
  Payee.create(req.body).then(payee => res.json(payee))
})


app.listen(3000, () => {
  console.log("app listening on port 3000")
})
