'use strict'

angular.module("movieDB", [
    'ngRoute',
    'movieDB.movie',
    'movieDB.movie-service',
    'movieDB.catalog',
    'movieDB.genre',
    'movieDB.paginate-filter'
]).config(['$routeProvider', function($routeProvider){
    $routeProvider.
        when("/", {templateUrl: "catalog/catalog.html", controller: "catalogCtrl"}).
        when("/movie/:id", {templateUrl: "movie/movie.html", controller: "movieCtrl"}).
        when("/genre/:genreName", {templateUrl: "catalog/catalog.html", controller: "genreCtrl"}).
        otherwise({redirectTo: "/"})
}]);