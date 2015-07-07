/**
 * Created by pavan on 7/6/15.
 */

angular.module('myApp.view1')
    .controller('reservationCtrl', ['myService','$window',function(myService,$window) {

        this.m1="10:00:00";
        this.m2="22:00:00";
        this.d2;
        this.name="deff"

        this.today2= (function(){var today = new Date();
            var dd = today.getDate();
            var mm = today.getMonth()+1; //January is 0!
            var yyyy = today.getFullYear();
            if(dd<10) {
                dd='0'+dd
            }
            if(mm<10) {
                mm='0'+mm
            }
            today= yyyy+'-'+mm+'-'+dd;
            var m=parseInt(mm)
            if(m<12){
                this.d2=yyyy+'-'+(m+1)+'-'+dd;
            }else{
                this.d2=(parseInt(yyyy)+1)+'-'+('01')+'-'+'01';
            }
            return today;
        })()


        this.addR=function(newR){
            newR.id=getNewCC();

            myService.nReserve(newR);
            console.dir(myService)
            console.log('inserted');
            $window.alert("Your confirmation code is : "+newR.id);
        }



        var getNewCC=function()
        {
            var text = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

            for( var i=0; i < 5; i++ )
                text += possible.charAt(Math.floor(Math.random() * possible.length));

            return text;
        }


    }])
