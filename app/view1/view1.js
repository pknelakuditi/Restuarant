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
        templateUrl: 'view1/about.html'

      })
      .when('/Cancel', {
          templateUrl: 'view1/cancellation.html',
          controller:'cancel-ctrl',
          controllerAs:'canCtrl'
      })
  ;

}])

    .controller('cancel-ctrl',['myService','$window',function(myService,$window){
        var canCtrl=this;
        canCtrl.deleteR=function(cc){
            myService.deleteR(cc);
            $window.alert("Your Reservation is cancelled!");
        }

        //$window.alert('hi');
    }])


