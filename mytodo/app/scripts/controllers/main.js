'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mytodoApp
 */
angular.module('mytodoApp')
	.controller('MainCtrl', function ($scope, localStorageService) {

		/* set storage object from TODOS in local storage */
		var todosInStore = localStorageService.get('todos');

		/* get TODOS from storage object, otherwise set empty object */
		$scope.todos = todosInStore || [];

		/* watch for changes in TODOS object and pass back to local storage */
		$scope.$watch('todos', function () {
			localStorageService.set('todos', $scope.todos);
		}, true);

		/* add a TODO */
		$scope.addTodo = function () {
			$scope.todos.push($scope.todo);
			$scope.todo = '';
		};

		/* remove a TODO */
		$scope.removeTodo = function (index) {
			$scope.todos.splice(index, 1);
		};
	});
