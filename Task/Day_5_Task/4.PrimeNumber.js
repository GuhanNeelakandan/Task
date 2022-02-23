//Return all the prime numbers in an array anonymous function

const array = [2,3,4,5,6,7,8,9,10,11]; 

function isPrime(num) {
  for (let start = 2; num > start; start++) {
    if (num % start == 0) {
      return false;
    }
  }
  return num > 1;
}
console.log(array.filter(isPrime));

//Return all the prime numbers in an array IIFE
(()=>{
  var arr=[1,2,3,4,5,6,7];
  numArray =arr.filter((number)=>{
    for(var i=2;i<=Math.sqrt(number);i++){
      if(number%i===0)
      return false;
    }
    return true;
    })
  console.log(numArray)
})();


//Return all the prime numbers in an array arrow function

const array = [2,3,4,5,6,7,8,9,10,11]; 

var isPrime = (num)=>{
  for (let start = 2; num > start; start++) {
    if (num % start == 0) {
      return false;
    }
  }
  return num > 1;
}
console.log(array.filter(isPrime));
