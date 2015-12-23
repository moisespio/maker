var app = angular.module('app', []);

app.controller('mainController', function($scope, $http) {
	$scope.legend = [
		{ title: 'Standard', code: 0, color: '#796464', default: true },
		{ title: 'Player', code: 1, color: '#FB6860', default: false },
		{ title: 'Enemy', code: 2, color: '#C80045', default: false },
		{ title: 'Hole', code: 3, color: '#C6D5AE', default: false }
	];

	$scope.grid = [
		[0]
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