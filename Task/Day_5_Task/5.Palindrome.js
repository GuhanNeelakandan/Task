// Return all the palindromes in an array anonymous function
function palindromeArray(arr){
    let isPalindrome = true;
    for(let i = 0; i < arr.length / 2; i++) {
        if(arr[i] !== arr[arr.length - i - 1]){
          isPalindrome = false; 
          break;
        }
    }
    
    return isPalindrome;
}
console.log(palindromeArray([1,2,2,1]));

// Return all the palindromes in an array IIFE
(()=>{
let palindromeArrays = (arr1) => {
    let Palindrome = true;
    for(let i = 0; i < arr1.length / 2; i++) {
        if(arr1[i] !== arr1[arr1.length - i - 1]){
          isPalindrome = false; 
          break;
        }
    }
    return Palindrome;
}
console.log(palindromeArrays([1,2,2,1]))
})();


// Return all the palindromes in an array arrow function
let palindromeArr = (arr1) => {
  let isPalindrome = true;
  for(let i = 0; i < arr1.length / 2; i++) {
      if(arr1[i] !== arr1[arr1.length - i - 1]){
        isPalindrome = false; 
        break;
      }
  }
  
  return isPalindrome;
}
console.log(palindromeArray([1,2,2,1]));