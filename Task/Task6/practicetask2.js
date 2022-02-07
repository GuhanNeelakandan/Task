//Square of a number
var a=9;
var square=a*a;
console.log(square);
//Swapping 2 numbers
var a=8;
var b=9;
[a, b] = [b, a];
console.log(a,b);
//Addition of 3 numbers
var a=[1,2,3];
b=+"";
for(i=0;i<a.length;i++){
    b+=a[i];
}
console.log(b)
//Celsius to Fahrenheit conversion
var Celsius=30;
Fahrenheit=Celsius * 9/5 + 32;
console.log(Fahrenheit);
//Meter to miles
var meter=3000;
miles=meter*0.00062137;
console.log(miles);
//kg to ponds
var ponds=500;
kg=ponds/2.2046;
console.log(kg);
//Calculate Batting Average
let runs = 10000;
let matches = 250;
let notout = 50;
battingAvg=runs/(matches-notout);
console.log(battingAvg);
//Calculate five test scores and print their average
var TestScore=[89,90,87,98,89];
TotalScore=+"";
for(i=0;i<TestScore.length;i++){
    TotalScore+=TestScore[i];
}
average=(TotalScore/TestScore.length)
console.log(average);
//Power of any number x ^ y.
var x=8;
var y=2;
console.log(x**y);
//Calculate Simple Interest
var P=1000;
var T=2;
var R=5;
SI=(P*T*R)/100;
console.log(SI);
//Calculate area of an equilateral triangle
var a=5;
var area=Math.sqrt(3)/4 *a*a;
console.log(area.toFixed(3));
//Area Of Isosceles Triangle
var b=10;
var h=30;
var area=(b*h)/2;
console.log(area);
//Volume Of Sphere
var Radius=3
volume = (4/3) * Math.PI *Radius;
console.log(volume.toFixed(3));
// /Volume Of Prism
var area= 4.5;
var height= 20;
volume=area*height;
console.log(volume);
//Find area of a triangle.
var b=10;
var h=30;
var area=(b*h)/2;
console.log(area);
//Given their radius of a circle and find its diameter, circumference and area.
var r=5;
var diameter=(2*r);
var circumference=(2*(Math.PI)*r);
var area=(Math.PI)*r*r;
console.log(diameter);
console.log(circumference.toFixed(3));
console.log(area.toFixed(3));
//Given two numbers and perform all arithmetic operations.
var a=10;
var b=20;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
//Display the asterisk pattern as shown below(No loop needed):
console.log("*****\n*****\n*****\n*****\n*****")