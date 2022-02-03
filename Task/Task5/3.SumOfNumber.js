// Sum of all number in an array annonymus function
var a=[1,2,3,4,5,6,7,8,9,10]
function Sum(a){
    var total=0;
    for(var i in a) { 
        total += a[i];
    }
    console.log(total)
} 
Sum(a);

// Sum of all number in an array IIFE function
(function(){
        var b=[1,2,3,4,5,6,7,8,9,10]
        var total1=0;
        for(var i in b) { 
            total1 += b[i];
        }
        console.log(total1)
    })();

