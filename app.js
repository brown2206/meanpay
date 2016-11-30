var express = require("express")
var hbs = require("express-handlebars")
var mongoose = require("./db/schema")
var Payee = mongoose.model("Payee")
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

app.set("view engine","hbs")
app.engine(".hbs", hbs({
  extname:        ".hbs",
  partialsDir:    "views/",
  layoutsDir:     "views/",
  defaultLayout:  "layout-main"
}));

app.get("/", function(req, res){
  res.render("app-welcome");
})

app.get("/payees", function(req, res){
  Payee.find({}).then(payees => {
    res.render("payees-index", {
      payees,
    });
  })
});

app.get("/payees/:name", function(req, res){
  Payee.findOne({name: req.params.name}).then(function(payee){
    res.render("payees-show", {
      payee
    })
  });
});

// app.get("/", (req, res) => {
//   res.send("Hello World & Lil' Mama XYZ123 + Hangtime!!!")
// })

// app.use(cookieParser())

app.use(bodyParser.urlencoded({extended: true})) //handle forms


app.listen(3000, () => {
  console.log("app listening on port 3000")
})
