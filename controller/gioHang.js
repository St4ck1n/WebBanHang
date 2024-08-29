let productAPI = "https://6348b16a0b382d796c757b4d.mockapi.io/products";
let myApp = angular.module("myApp", []);
myApp.controller("myCtrl", function ($scope, $http, $window) {
  $scope.products = {
    id: "",
    ten: "",
    so_luong: "",
    gia_nhap: "",
    gia_ban: "",
    mieu_ta: "",
  };
  $scope.products = [];
  $http
    .get(productAPI)
    .then(function (dataResponse) {
      $scope.products = dataResponse.data;
      console.log(dataResponse);
    })
    .catch(function (error) {
      console.log(error);
    });

  $scope.onFormSubmit = function (event) {
    event.preventDefault();
    $http
      .post(productAPI, $scope.product)
      .then(function () {
        $window.location.reload();
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  $scope.selectProduct = function (item) {
    let id = item.id;
    $http
      .get(productAPI + "/" + id)
      .then(function (response) {
        $scope.product = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  $scope.edit = function () {
    let id = $scope.product.id;
    $http
      .put(productAPI + "/" + id, $scope.product)
      .then(function () {
        $window.location.reload();
      })
      .catch(function (e) {
        console.log(e);
      });
  };

  $scope.delete = function (item) {
    let id = item.id;
    $http
      .delete(productAPI + "/" + id)
      .then(function () {
        $window.location.reload();
      })
      .catch(function (e) {
        console.log(e);
      });
  };
});
