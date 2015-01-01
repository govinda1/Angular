var myApp = angular.module('myApp',[])
myApp.controller("MyController",function MyController($scope,$http){
	$http.get('H:/Angular/js/data.json').success(function(data){
		$scope.artists = data;
		$scope.artistOrder = 'name';
		});
});