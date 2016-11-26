var express = require("express")
var hbs = require("express-handlebars")
var path = require("path")  //may not need this
var app = express()
var bodyParser = require("body-parser")
var cookieParser = require("cookie-parser")
var mongoose = require("mongoose")
var bcrypt = require("bcryptjs")
var expressValidator = require("express-validator")
var flash = require("connect-flash")
var session = require("express-session")
var passport = require("passport")
var LocalStrategy = require("passport-local").Strategy

// var routes = require("./routes/index")
// var users = require("./routes/users")
// var payees = require("./routes/payees")

app.set("view engine","hbs")
app.get("/", (req, res) => {
  res.send("Hello World & Lil' Mama abcde + Hangtime!!!")
})

app.use(cookieParser())

app.use(bodyParser.urlencoded({extended: true})) //handle forms

app.listen(3000, () => {
  console.log("app listening on port 3000")
})
