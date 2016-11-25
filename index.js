var express = require("express")
var app = express()
var bodyParser = require("body-parser")

app.set("view engine","hbs")
app.get("/", (req, res) => {
  res.send("Hello World!!!")
})

app.use(bodyParser.urlencoded({extended: true})) //handle forms

app.listen(3000, () => {
  console.log("app listening on port 3000")
})
