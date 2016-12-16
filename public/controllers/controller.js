angular
  .module("angryPay", [])
  .controller("billsCtrl", [ billController ])

function billController () {
  console.log("Hello world from controller.")
}
