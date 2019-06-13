var app = angular.module('myapp', ['ngRoute']);

app.controller('main', ['$scope', '$http', function ($scope, $http) {
    $scope.title = 'Product list';
    $scope.pageNum = 1;
    $scope.products = [];

    loadData();

    window.onscroll = function () {
        var w = $(window);
        var d = $(document);
        if ((w.scrollTop() + w.height() >= (d.height() - 10))) {
            ++$scope.pageNum;
            loadData();
        }
    }

    function loadData() {
        var baseUrl = 'http://localhost:3000/products';
        $http.get(`${baseUrl}?_page=${$scope.pageNum}&_limit=10`)
            .then(resp => $scope.products.push(...resp.data))
            .catch(err => console.log(err));
    }
}]);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/assets/templates/home.html'
        })
        .when('/product-list', {
            templateUrl: '/assets/templates/product-list.html',
            controller: 'main'
        });
}]);