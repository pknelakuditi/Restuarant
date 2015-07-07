/**
 * Created by pavan on 7/2/15.
 */

angular.module('myApp').service('myService',function($http){
    var name="default";
    var my=this;

    my.ser='hi';

    my.getName=function(){
        return name;
    }
    my.setName=function(a){
        name=a;
    }

     var reservations=[]

/*    init();
   // console.log(init())
    function init(){
        $http.get('view1/data.json')
            .then(function(res){
                console.log('req ser');
             //  console.log(res.data)
                reservations.push(res.data)
                            });



    }*/



    my.getR=function (){
        return $http.get('view1/data.json');
    }

    my.nReserve=function(newR){
        reservations.push(newR);
        console.log(reservations);
    }

  // console.log( my.getR());



   // console.log(my.reservations)

})






function service1(){
    var name="imp-service";
    this.getName=function(){
        return name;
    }

}