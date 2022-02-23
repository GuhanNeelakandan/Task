//anonymous function - oddnumber in array
var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
  function OddNumber (arr) {
    let odds = arr.filter(n => n%2)
    console.log(odds)
};
   OddNumber(arr);

//IIFE function - oddnumber in arrays
(()=>{
    var arr1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
    let odds1 = arr1.filter(n1 => n1%2)
    console.log(odds1)
})();

//arrow function - oddnumber in array
var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
var OddNumber=(arr)=>{
    let odds = arr.filter(n => n%2)
    console.log(odds)
};
   OddNumber(arr);