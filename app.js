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