
/**
 * Created by pavan on 7/1/15.
 */

(function(){
    angular.module('myApp.view2')

        .controller('Login',['$location','myService',function($location,myService){


            var loginVm=this;

            loginVm.login=function(credentials){
                //$http call goes here for authentication ,when success redirect
                console.log(credentials) ;
                $location.path('/Data');

                console.log('coming')
                myService.setName(credentials.email.split('@')[0]);

                console.log(myService.getName()+' hn '+myService.ser);
                console.dir(myService)

            }

        }])



})();