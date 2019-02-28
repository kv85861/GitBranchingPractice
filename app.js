function sumArray( test) { //eslint-disable-line
    var sumarr =0;
    var summarrelements=[];
    for (var i = 0; i < test.length; i++) {
        sumarr+=test[i];
        //sumarr.push(test[i]);
//        console.log(sumarr);
    }
    summarrelements.push(sumarr);
    
 var data= test[0] + ','+test[1]+ ','+ test[2]+ ' was passed in as an array of numbers, and ' + sumarr + ' is their sum.';
 
 summarrelements.push(data);
 //console.log(summarrelements);

    return summarrelements;
        }
 
    