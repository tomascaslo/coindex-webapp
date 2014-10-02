'use strict';

angular.module('coindexerApp')
	.controller('MenuCtrl', ['$scope', function($scope){
		$scope.aside = {
		  "title": "Title",
		  "content": "Hello Aside<br />This is a multiline message!"
		};
	}]);