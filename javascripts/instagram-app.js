angular.module("myInstagramFeed", [])
    .filter('fromTo', function() {
        return function(input, from, total, lessThan) {
            from = parseInt(from);
            total = parseInt(total);
            for (var i = from; i < from + total && i < lessThan; i++) {
                input.push(i);
            }
            return input;
        }
    })
    .factory('instagram', ['$http',
        function($http) {
            return {
                fetchPopular: function(callback) {

					var endPoint = "https://api.instagram.com/v1/tags/beckmenvineyards/media/recent?count=100&client_id=c7361ee2e97b4104b05af2f42cb2c5b0&callback=JSON_CALLBACK"
					
                    $http.jsonp(endPoint).success(function(response) {
                        callback(response.data);
                    });
                }
            }
        }
    ])
    .controller("Hashtag", function($scope, $interval, instagram) {
      $scope.pics = [];
      $scope.have = [];
      $scope.orderBy = "-likes.count";
      $scope.getMore = function() {
        instagram.fetchPopular(function(data) {
            for(var i=0; i<100; i++) {
              if (typeof $scope.have[data[i].id]==="undefined") {
				  if (data[i].user.username == "beckmenvineyards") {
	                  $scope.pics.push(data[i]);
	                  $scope.have[data[i].id] = "1";	  	
				  }
              }
            }
        });
      };
      $scope.getMore();
        $scope.tags = [
            'beckmenvineyards'
        ]
    });
	
	
	// var endPoint = "https://api.instagram.com/v1/media/popular?client_id=c7361ee2e97b4104b05af2f42cb2c5b0&callback=JSON_CALLBACK";
    // var endPoint = "https://api.instagram.com/v1/tags/beckmenvineyards?client_id=c7361ee2e97b4104b05af2f42cb2c5b0&callback=JSON_CALLBACK";