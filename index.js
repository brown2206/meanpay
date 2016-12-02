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

app.get('/Payee',(req,res) => {
  Payee.find({}).then(payee => res.json(payee))
})

app.get('/Payee/:name',(req,res) => {
  Payee.findOne({name: req.params.name}).then(payee => res.json(payee))
})

app.post('/Payee',(req,res) => {
  Payee.create(req.body).then(payee => res.json(payee))
})

app.delete('/Payee/:name', function(req, res){
  Payee.findOneAndRemove({name: req.params.name}).then(function(){
    res.json({ success: true })
  })
})

app.put('/Payee/:name',(req,res) => {
  Payee.findOneAndUpdate({name: req.params.name}, req.body, {new: true}).then(payee => res.json(payee))
})

app.get('/*',(req,res) => {
  res.render('layout-main')
})

app.listen(3000, () => {
  console.log("app listening on port 3000")
})
