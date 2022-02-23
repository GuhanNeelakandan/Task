//Fix the code to get the largest of three.
aa = (f,s,t) => {
    if(f>s &&f>t){
    console.log(f)
}else if(s>f && s>t){
    console.log(s)
}else{
    console.log(t)
}
   }
   aa(1,2,3);
//Fix the code to Sum of the digits present in the number
let n = 123;
console.log(add(n));
function add(n)
{
    let numArr=n.toString().split("");
let sum =+"";
for(var i=0;i<numArr.length;i++){
 sum+=parseInt(numArr[i]);
 }
 return sum;
}

//Fix the code to Sum of all numbers using IIFE function

(function() {
    const arr = [9,8,5,6,4,3,2,1];
 let sum = 0;
 for (var i = 0; i < arr.length; i++){
 sum += arr[i];
 }
console.log(sum);
})();

//Fix the code to gen Title caps.
var arro= ["guvi", "geek", "zen", "fullstack"];
var ano= function(arro) {
 for ( let i = 0; i < arro.length; i++) {
 console.log(arro[i][0].toUpperCase() + arro[i].substr(1));
 }
}
ano(arro);

//Fix the code to return the Prime numbers
const newArray=[1,3,2,5,10];
const myPrime=newArray.filter(num=>{
 for(let i=2;i<=Math.sqrt(num);i++){
 if(num%i===0)
 {
 return false;
 }
 }
 return true;
});
console.log(myPrime);

//Fix the code to sum the number in that array
const num = [10, 20, 30, 40,50,60,70,80,90,100] 
const sum = (a, b) =>a + b;
const sum1 = num.reduce(sum);
console.log(sum1);

//Fix the code to rotate an array by k times and return rotated array using IIFE function
    var arr = [1, 2, 3, 6, 8, 6, 1, 9, 10, 12, 13];
    var k = 3;
    k = arr.length % k;
(function(){
    var out = arr.slice(k + 1, arr.length);
    var count = out.length;
    for (var i = 0; i < k + 1; i++) {
    out[count] = arr[i];
    count += 1;
 }
 console.log(out);
})();

//Fix the code to gen Title caps.
var arr = ["guvi", "geek", "zen", "fullstack"];
(function() {
 for (var i = 0; i <arr.length; i++) {
 console.log(arr[i][0].toUpperCase() + arr[i].substr(1));
 }
})();

//print all odd numbers in an array using IIFE function
var arr = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];
(function() {
 for (var i = 0; i < arr.length; i++) {
 if (arr[i] % 2 != 0) {
 console.log(arr[i]);
 }}
})();

//Fix the code to reverse.
(function(str){
    str1 = str.split("").reverse().join("");
    console.log(str1); 
   })("abcd");

//Fix the code to remove duplicates.
var res = function(arr){
    for(var i=0; i < arr.length; i++){
    var newArr =[];
    if(newArr.indexOf(arr[i]) == -1) {
    newArr.push(arr[i]);
    } }
    console.log(newArr)
   }
   res(["guvi","geek","guvi","duplicate","geek"]);

//expexted output
var arrayy =[[["firstname","vasanth"],["lastname","Raje"],["age",24],["role","JSWizard"]],
[["firstname","Sri"],["lastname","Devi"],["age",28],["role", "Coder"]]];
 var final0=[]
 
while(arrayy.length!==0)
{
 var outer_remove = arrayy.shift();
var new_object={}
 while(outer_remove.length !==0)
 {

 var inner_remove = outer_remove.shift()
 var keyy = inner_remove[0]
 var valuee =inner_remove[1]
 new_object[keyy]=valuee
 }
final0.push(new_object)
}
console.log(final0)