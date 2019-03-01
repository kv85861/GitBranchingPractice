function sum(a,b) { //eslint-disable-line
    //var a=4;
    //var b=5;
    var sumab= a+b;
    var data='The sum of '+ a + ' and '+ b +' is ' + sumab + '.';
    console.log(sumab);
    var sumarr=[];
    sumarr[0]=sumab;
    sumarr[1]=data;
    //console.log(sumarr[0]);
    //console.log(sumarr[1]);
    return sumarr;
    }
    function multiply(a,b) { //eslint-disable-line
        //var a=4;
        //var b=5;
        var multiplyab= a*b;
        var data='The product of '+ a + ' and '+ b +' is ' + multiplyab + '.';
        console.log(multiplyab);
        var mularr=[];
        mularr[0]=multiplyab;
        mularr[1]=data;
        //console.log(sumarr[0]);
        //console.log(sumarr[1]);
        return mularr;
        }
        function sumArray( test) { //eslint-disable-line
            var sumarr =0;
            var summarrelements=[];
            for (var i = 0; i < test.length; i++) {
            sumarr+=test[i];
            //sumarr.push(test[i]);
            // console.log(sumarr);
            }
            summarrelements.push(sumarr);
            var data= test[0] + ','+test[1]+ ','+ test[2]+ ' was passed in as an array of numbers, and ' + sumarr + ' is their sum.';
            summarrelements.push(data);
            //console.log(summarrelements);
            return summarrelements;
            }
            