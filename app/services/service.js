/**
 * Created by pavan on 7/2/15.
 */

angular.module('myApp').service('myService',function($http){
    var name="default";
    var my=this;

    var cancellations=[];

    my.ser='hi';

    my.getName=function(){
        return name;
    }
    my.setName=function(a){
        name=a;
    }

     var reservations=[];
    //fake data
    reservations.push({
        "id":"bahub",
        "date": "2015-06-30T04:00:00.000Z",
        "time":"1970-01-01T18:30:00.000Z",
        "name": "varun Graham",
        "tel":"7706777777",
        "em": "Sincere@april.biz",
        "size1":"10",
        "special":"Birthday"
    });

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
   my.getTempR=function(){
       return reservations;
   }

    my.deleteR=function(cc){
        cancellations.push(cc);
        console.log(cancellations);
    }



   // console.log(my.reservations)

})






