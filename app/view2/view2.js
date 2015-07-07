'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/Data', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl',
    controllerAs:'vc'
  }).when('/Owner',{
      templateUrl: 'view2/login.tpl.html',
      controller: 'Login',
      controllerAs:'loginVm'
  });
}])

.controller('View2Ctrl', ['myService',function (myService) {
        var vc=this;
        console.dir(myService)
        vc.name=myService.getName();
        myService.setName('jamba');
        console.log(myService.getName());
       /* var res=myService.getR();
        vc.data=res[0];
        console.log(vc.data);
        console.dir(res)*/
        vc.data=[];
        var promise=myService.getR().then(
            function(payload) {
                vc.data = payload.data;
                vc.data.push(myService.getTempR()[0]);
            },
            function(errorPayload) {
                $log.error('failure loading reservations', errorPayload);}
                );


        console.dir(vc.data);
        console.dir(myService.getTempR())
        vc.data.push(myService.getTempR()[0]);
        console.dir(vc.data);



        vc.deletePerson = function(position) {
            vc.data.splice(position, 1);
            // console.log('pkn')

        };
    }]);

