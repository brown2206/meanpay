var mongoose = require('mongoose')

var PayeeSchema = new mongoose.Schema({
  name: String,
  address: String,
  account_no: Number,
  due_date: { type: Date, default: Date.now },
  amount_due: { type: Number },
  paid: { type: Boolean, default: false },
  last_payment_date: { type: Date, default: Date.now },
  notes: String
})

mongoose.model('Payee', PayeeSchema)
mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost/meanpay')

module.exports = mongoose

// var db = mongoose.connection
//
// db.on('error', err => {
//   console.log(err)
// })
//
// db.once('open', () => {
//   console.log("database has been connected!")
// })
