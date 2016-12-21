"use strict";
 myApp.directive('divDirectives', function() {
   debugger;
	return{
		restrict:"EA",
		scope:{
			newsData:"=",
			imageAvail:"@"
		},
		templateUrl:"App/Directives/dynamic-div.html",
		controller:["$scope",function ($scope) {
			debugger;
			// body...
			var imdata=$scope.imageAvail;
			$scope.newsData="adasdasdasdad";
		}],
		link:function (scope,ele,attr) {
			debugger;
			// body...
			scope.$watch("newsData",function(newData){
				debugger;
			});
		}
	};
  });