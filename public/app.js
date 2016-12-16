let payeeData = [
  { name: "General Electric", address: "1234 Main Street", account_no: "987654", due_date: "2016-11-30", amount_due: 488, paid: false, last_payment_date: "2016-10-17", notes: "test" },
  { name: "Honda Finance", address: "8873 Honeycut Street", account_no: "54321", due_date: "2016-11-30", amount_due: 375, paid: false, last_payment_date: "2016-10-14", notes: "test2" }
]

angular
  .module("angryPay", [])
  .controller("billsCtrl", [ billController ])

function billController () {
  this.payees = payeeData
}
