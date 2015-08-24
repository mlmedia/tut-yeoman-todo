'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mytodoApp
 */
angular.module('mytodoApp')
	.controller('MainCtrl', function($scope) {

		/* set empty TODOS object */
		$scope.todos = [];

		/* add a TODO */
		$scope.addTodo = function() {
			$scope.todos.push($scope.todo);
			$scope.todo = '';
		};

		/* remove a TODO */
		$scope.removeTodo = function(index) {
			$scope.todos.splice(index, 1);
		};
	});
