//Write a code to print the numbers in the array
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";
 
for (var i = 0; i < 11; i++) {
 new_string += numsArr[i] 
}
console.log(new_string);
//Write a code to print the numbers in the array
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";
 
for (var i = 0; i < 11; i++) {
 new_string += numsArr[i] + ",";
}
console.log(new_string);
//Write a code to print from last to first with spaces (Make sure there is no space after the last element 1)
var numsArr=[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
var new_string = "";
for (var i = 10; i>= 0; i--) {
 new_string+=numsArr[i]+" ";
}
console.log(new_string.trim());
//Write a code to replace the array value — If the number is even, replace it with ‘even’.
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <=10; i++) {
 if(numsArr[i] %2 == 0 )
 {
 numsArr[i] = 'even';
 }
}
console.log(numsArr);
//Write a code to replace the array value — If the index is even, replace it with ‘even’.
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <=10; i++) {
 if(numsArr[i] %2 != 0 )
 {
 numsArr[i] = 'even'
 }
}
console.log(numsArr);
//Write a code to add all the numbers in the array
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum=+" ";
for (var i = 0; i <=10; i++) {
 sum += numsArr[i]
}
console.log(sum);
//Write a code to add the even numbers only
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum=+" ";
for (var i = 0; i<=10; i++) {
 if(numsArr[i]%2===0){
 sum += numsArr[i]
}
}
console.log(sum);
//Write a code to add the even numbers and subract the odd numbers
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum=100;
for (var i = 0; i <=10; i++) {
 if(numsArr[i]%2==0)
 {
 sum += numsArr[i];
 }
 else
 {
 sum -= numsArr[i];
 }
}
console.log(sum);
//Write a code to print inner arrays
var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
for (var i = 0; i <numsArr.length; i++){
 console.log( numsArr[i])
}
//Write a code to print elements in the inner arrays
var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var str_all=0;
var inner_array="";
for (var i = 0; i < numsArr.length; i++) {
   inner_array+=numsArr[i].flat()+",";
}
 for(var j = 0 ; j < inner_array.length;i++ ){
     str_all +=inner_array[j];
 }
console.log(str_all);