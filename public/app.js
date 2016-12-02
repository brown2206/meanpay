angular
  .module("angrypay", [
    "ui.router",
    "ngResource"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ])
  .factory("PayeeFactory", [
      "$resource",
      PayeeFactoryFunction
  ])
  .controller("PayeeIndexController", [
    "PayeeFactory",
    PayeeIndexControllerFunction
  ])

  function Router ($stateProvider) {
    $stateProvider
      .state("welcome", {
        url: "/",
        templateUrl: "/ng-views/welcome.html"
      })
      .state("index", {
        url: "/Payee",
        templateUrl: "/ng-views/index.html",
        controller: "PayeeIndexController",
        controllerAs: "vm"
      })
      .state("show", {
        url: "/Payee/:name",
        templateUrl: "/ng-views/show.html",
        controller: "PayeeShowController",
        controllerAs: "vm"
      })
  }

  function PayeeFactoryFunction ($resource) {
    return $resource("http://localhost:3000/Payee/:name" )
  }

  function PayeeIndexControllerFunction (PayeeFactory){
    console.log("hello world")
    this.payee = PayeeFactory.query()
  }

  // function showController ($state, $stateParams, Candidate) {
  //   this.candidate = Candidate.get({name: $stateParams.name})
  //   this.update = function () {
  //     this.candidate.$update({name: $stateParams.name})
  //   }
  //   this.destroy = function () {
  //     this.candidate.$delete({name: $stateParams.name}).then(function(){
  //       $state.go("index")
  //     })
  //   }
  // }
