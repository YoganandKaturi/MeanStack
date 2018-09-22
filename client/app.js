var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider){
	$routeProvider.when('/', {
		controller:'BooksController',
		templateUrl: 'views/students.html'
	})
	.when('/students', {
		controller:'BooksController',
		templateUrl: 'views/students.html'
	})
	.when('/students/details/:id',{
		controller:'BooksController',
		templateUrl: 'views/student_details.html'
	})
	.when('/students/add',{
		controller:'BooksController',
		templateUrl: 'views/add_student.html'
	})
	.when('/students/edit/:id',{
		controller:'BooksController',
		templateUrl: 'views/edit_student.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});