var express = require("express")
var hbs = require("express-handlebars")
var mongoose = require("./db/schema")
var Payee = mongoose.model("Payee")
var methodOverride = require("method-override")
var _ = require("lodash")
var bodyParser = require("body-parser")

var app = express()

// var path = require("path")  //may not need this
// var cookieParser = require("cookie-parser")
// var bcrypt = require("bcryptjs")
// var expressValidator = require("express-validator")
// var flash = require("connect-flash")
// var session = require("express-session")
// var passport = require("passport")
// var LocalStrategy = require("passport-local").Strategy

// var routes = require("./routes/index")
// var users = require("./routes/users")
// var payees = require("./routes/payees")

// Load the models
app.models = require('./db/schema.js')

var routes = require('./routes')
_.each(routes, function(controller, route) {
  app.use(route, controller(app, route))
})

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
//
// app.get("/", function(req, res){
//   res.render("app-welcome");
// })
//
// app.get("/payees", function(req, res){
//   Payee.find({}).then(payees => {
//     res.render("payees-index", {
//       payees,
//     });
//   })
// });
//
// app.get("/payees/:name", function(req, res){
//   Payee.findOne({name: req.params.name}).then(function(payee){
//     res.render("payees-show", {
//       payee
//     })
//   });
// });
//
// app.post("/payees", function(req, res){
//   Payee.create(req.body.payee).then(function(payee){
//     res.redirect("/payees/" + payee.name)
//   })
// })
//
// app.post("/payees/:name", function(req, res){
//   Payee.findOneAndUpdate({name: req.params.name}, req.body.payee, {new: true}).then(function(payee){
//     res.redirect("/payees/" + payee.name)
//   })
// })
//
// app.post("/payees/:name/delete", function(req, res){
//   Payee.findOneAndRemove({name: req.params.name}).then(function(){
//     res.redirect("/payees")
//   })
// })

app.listen(3000, () => {
  console.log("app listening on port 3000")
})
