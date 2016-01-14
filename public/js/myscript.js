
var mainCtrl = function($scope) {
  $scope.users = [
  {"name":"taguchi", "score":52.22},
  {"name":"tanaka", "score":34.25},
  {"name":"yamada", "score":11.11},
  {"name":"小山", "score":19.41},
  {"name":"kuroya", "score":62.82},
  {"name":"sasahara", "score":74.02},
  {"name":"mizuno", "score":10.54},
  {"name":"kutaragi", "score":25.55},
  {"name":"miyama", "score":32.95},
  {"name":"kuwahara", "score":57.50},
  {"name":"anzai", "score":65.78},
  {"name":"inoue", "score":61.47},
  {"name":"uehara", "score":62.82},
  {"name":"etou", "score":85.24},
  {"name":"ooyama", "score":34.54},
  {"name":"keitou", "score":44.45},
  ];
  $scope.today = new Date();
}

var userItemCtrl = function($scope) {
  $scope.increment = function(){
    $scope.user.score++;
  }
  $scope.decrement = function(){
    $scope.user.score--;
  }

}
var mainCtrl = function($scope) {
  $scope.addUser = function() {
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