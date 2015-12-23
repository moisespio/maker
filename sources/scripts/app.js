var app = angular.module('app', []);

app.controller('mainController', function($scope, $http) {
	$scope.legend = [
		{ title: 'Player', code: 0, color: '#FB6860', default: true },
		{ title: 'Enemy', code: 1, color: '#C80045', default: false },
		{ title: 'Hole', code: 2, color: '#C6D5AE', default: false }
	];

	$scope.grid = [
		[0, 0, 0, 1],
		[0, 0, 0, 1],
		[0, 0, 0, 1],
		[0, 0, 0, 1]
	];

	$scope.getBoxBackgroundColor = function (code) {
		for (box in $scope.legend) {
			if (code == $scope.legend[box].code) {
				return $scope.legend[box].color;
			}
		}
	};

	var getDefaultBoxCode = function () {
		for (box in $scope.legend) {
			if ($scope.legend[box].default) {
				return $scope.legend[box].code;
			}
		}
	}

	$scope.addRow = function () {
		var defaultBoxCode = getDefaultBoxCode();
		var template = [];

		for (var i = 0; i < $scope.grid[0].length; i++) {
			template.push(defaultBoxCode)
		};

		$scope.grid.unshift(template);
	};

	$scope.addCol = function () {
		var defaultBoxCode = getDefaultBoxCode();

		for (var i = 0; i < $scope.grid.length; i++) {
			$scope.grid[i].push(defaultBoxCode);
		};
	};

	$scope.changeBox = function (row, box) {
		var currentBox = $scope.grid[row][box]
		var nextBox = $scope.legend[currentBox + 1];

		if (nextBox) {
			$scope.grid[row][box] = nextBox.code;
		} else {
			$scope.grid[row][box] = getDefaultBoxCode();
		}
	}
});