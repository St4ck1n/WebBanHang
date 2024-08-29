let app = angular.module("demo_routing", ["ngRoute"]);
app.config(function ($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix(""); //Xoa khoang thua url
  //Giong switch case
  $routeProvider
    .when("/1", {
      templateUrl: "./quanAo.html",
      controller: "dangkyController",
    })
    .when("/2", {
      templateUrl: "./phuKien.html",
      controller: "dangkyController",
    })
    .when("/3", {
      templateUrl: "./giayDep.html",
      controller: "dangkyController",
    })
    .when("/4", {
      templateUrl: "./myPham.html",
      controller: "dangkyController",
    })
    .otherwise({
      templateUrl: "./quanAo.html",
      controller: "dangkyController",
    });
});

app.controller("dangkyController", dangkyController);
