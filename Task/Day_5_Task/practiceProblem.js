//https://medium.com/@reach2arunprakash/guvi-zen-class-javascript-warm-up-programming-problems-15973c74b87f
//Practice sum----------------------
var num = 5;
function addFive(num) { 
    return num+5;
}
var result = addFive(num)
console.log(result);
//Practice sum----------------------
var n = "5a";
function getOpposite(n) {
    if(n%1!=0){
        return -1;
    }
    if(n>0||n<0){
    return -Math.abs(n);
    }else{
        return -1;
    }
}
var result = getOpposite(n)
console.log(result)
//Practice sum----------------------
var min = 5;
function toSeconds(min) {
    return min*60
}
var secs = toSeconds(min)
console.log(secs)
//Practice sum----------------------
var mystr = "5";
function toInteger(mystr) {
    return parseInt(mystr);
}
var myint = toInteger(mystr)
console.log(myint)
//Practice sum----------------------
var myint = -3;
function nextNumber(myint) {
    return myint+1;
}
var myNextint = nextNumber(myint)
console.log(myNextint)
//Practice sum----------------------
var arr = [1, 2, 3];
function getFirstElement(arr) {
    return arr[0];
}
var data = getFirstElement(arr)
console.log(data)
//Practice sum----------------------
var arr = [1, 2, 3];
function hourToSeconds(arr) {
    for (let i = 0; i < arr.length; i++){
        arr[i] = arr[i] * 3200;
    }
    return arr;
}
var data = hourToSeconds(arr)
console.log(data)
//Practice sum----------------------
function findPerimeter(num1,num2) {
    return 2*(num1+num2);
}
var peri = findPerimeter(6,7);
console.log(peri);
//Practice sum----------------------
function lessThan100(num1,num2) {
    var a=num1+num2;
    if(a<100){
        return true;
    }else{
        return false;
    }
}
var res = lessThan100(22,15)
console.log(res);
//Practice sum----------------------
function remainder(num1,num2) {
    return num1%num2;
}
var res = remainder(1,3)
console.log(res)
//Practice sum----------------------
function CountAnimals(tur,horse,pigs) {
    return (tur*2+horse*4+pigs*4);
}
var legs = CountAnimals(2,3,5)
console.log(legs)
//Practice sum----------------------
function frames(num1,num2) {
    return (num1*num2*60)
}
var fps = frames(1,2)
console.log(fps);
//Practice sum----------------------
function divisibleByFive(num1) {
    if(num1%5==0){
        return true;
    }else{
        return false;
    }
}
var divisible = divisibleByFive(-5)
console.log(divisible);
//Practice sum----------------------
function isEven(num){
    if(num%2==0){
        return true;
   }else{
       return false
   }
}
   var even = isEven(5)
   console.log(even);
//Practice sum----------------------
function areBothOdd(num1, num2){
    if(num1%2!=0&&num2%2!=0){
        return true;
    }else{
        return false;
    }
   }
   var data=areBothOdd(1,3);
   console.log(data);
//Practice sum----------------------
function getFullName(firstName, lastName){
   return firstName+" "+lastName;
}
console.log(getFullName("guvi","GEEK"));