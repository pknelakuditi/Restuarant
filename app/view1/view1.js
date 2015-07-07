'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/Home', {
    templateUrl: 'view1/home.html'  })
      .when('/Contact', {
        templateUrl: 'view1/contact.html'
      })
        .when('/Reservation', {
        templateUrl: 'view1/reservation.html',
        controller: 'reservationCtrl',
          controllerAs:'rCtrl'
      })
            .when('/About', {
        templateUrl: 'view1/about.html',
          controller:'testing',
          controllerAs:'tst'
      });

}])

    .controller('testing',function(){
        var a=this;
        this.name="pavan";
       //$window.alert('hi');
    })


