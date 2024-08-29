let app = angular.module("login", []);
app.controller("loginController", function ($scope) {
  var user = {
    emailAddress: "blah123@gmail.com",
    password: "1234",
  };
  $scope.user = user;
  $scope.dangNhap = function () {
    if (
      $scope.emailAddress == user.emailAddress &&
      $scope.password == user.password
    ) {
      window.open("index.html");
    } else {
      alert("Sai tên hoặc mật khẩu");
    }
  };
});
