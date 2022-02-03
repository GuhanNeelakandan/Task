//Remove duplicates from an array IIFE function

(()=>{
    let num = [1,1,1,2,2,2,3,3,3];
    let uniqueNum = [...new Set(num)];

console.log(uniqueNum);
})();

//Remove duplicates from an array anonymous function

function Unique(num) {
    let duplicate = [...new Set(num)];
    console.log(duplicate)
}
var num = [111,11,11,111,22,222,222];
Unique(num);
