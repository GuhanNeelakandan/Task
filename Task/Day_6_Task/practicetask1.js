//Declare four variables without assigning values and print them in console
var a,b,c,d;
console.log(a,b,c,d);
//How to get value of the variable myvar as output
//var myvar= 1;
//console.log("myvar");
var myvar= 1;
console.log(myvar);
// Declare variables to store your first name, last name, marital status, country and age in multiple lines
let student=["guhan","hari","single","india","24"];
for(i=0;i<student.length;i++){
    console.log(student[i]);
}
// Declare variables to store your first name, last name, marital status, country and age in single lines
let student=["guhan","hari","single","india","24"];
let s="";
for(i=0;i<student.length;i++){
    s+=" "+student[i];
}
console.log(s)
//Convert the string to integer
var a="36";
b= parseInt(a)
c=Number(a)
d=+a
console.log(b,c,d);
