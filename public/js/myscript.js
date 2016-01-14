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
