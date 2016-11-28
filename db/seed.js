var mongoose = require("./schema")
var seedData = require("./seeds")

var Payee = mongoose.model("Payee")

Payee.remove({}).then( _ => {
  Payee.collection.insert(seedData)
    .then(_ => process.exit() )
}).catch(err => console.log(err) )
