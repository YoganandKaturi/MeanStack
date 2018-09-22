var myApp = angular.module('myApp');

myApp.controller('BooksController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	console.log('BooksController loaded...');

	$scope.getStudents = function(){
		$http.get('/api/students').success(function(response){
			$scope.students = response;
		});
	}

	$scope.getStudent = function(){
		var id = $routeParams.id;
		$http.get('/api/students/'+id).success(function(response){
			$scope.student = response;
		});
	}

	$scope.addStudent = function(){
		console.log($scope.student);
		$http.post('/api/students/', $scope.student).success(function(response){
			window.location.href='#/students';
		});
	}

	$scope.updateStudent = function(){
		var id = $routeParams.id;
		$http.put('/api/students/'+id, $scope.student).success(function(response){
			window.location.href='#/students';
		});
	}

	$scope.removeStudent = function(id){
		$http.delete('/api/students/'+id).success(function(response){
			window.location.href='#/students';
		});
	}
}]);