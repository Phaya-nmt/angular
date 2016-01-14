var myapp = angular.module("myapp", ["firebase"]);

myapp.controller('mainCtrl', function ($scope, $firebaseArray) {
  var ref = new Firebase("https://adanana.firebaseio.com/");
  $scope.users = $firebaseArray(ref);
  $scope.addUser = function() {
    $scope.users.$add($scope.user);
    // ユーザー追加処理記入
  }
  // 以下に初期値を入れておく
  $scope.user = {
    "adult":"adult",
    "gender":"male"
  }
  // 以下にドロップダウンのリスト
  $scope.colors = ['red',
                   'blue',
  ];
  $scope.datas = [
{"val0":060-0000, "val1":"ﾎｯｶｲﾄﾞｳ", "val2":"ｻｯﾎﾟﾛｼﾁｭｳｵｳｸ",  "val3":"ｲｶﾆｹｲｻｲｶﾞﾅｲﾊﾞｱｲ", "val4":"北海道", "val5":"札幌市中央区"}, 
{"val0":064-0941, "val1":"ﾎｯｶｲﾄﾞｳ", "val2":"ｻｯﾎﾟﾛｼﾁｭｳｵｳｸ",  "val3":"ｱｻﾋｶﾞｵｶ", "val4":"北海道", "val5":"札幌市中央区",  "val6":"旭ケ丘"},
{"val0":060-0041, "val1":"ﾎｯｶｲﾄﾞｳ", "val2":"ｻｯﾎﾟﾛｼﾁｭｳｵｳｸ",  "val3":"ｵｵﾄﾞｵﾘﾋｶﾞｼ",  "val4":"北海道", "val5":"札幌市中央区",  "val6":"大通東"},
  ];
});