//Rotate an array by k times anonymous function
function rotate(num,k){
	let i=0;
	while(i<k){
		num.unshift(num.pop())
		i++;
	}
	return num;
}
var num=[1,2,3,4,5,6,7]
var k=3
console.log(rotate(num,k))

//Rotate an array by k times IIFE function
(function(){
	var rotate=function(nums,k){
		let i=0;
		while(i<k){
			nums.unshift(nums.pop())
			i++;
		}
		return nums;
	}
	var nums=[1,2,3,4,5,6,7]
	var k=2
	console.log(rotate(nums,k))
})();


//Rotate an array by k times arrow function
var rotate =(num,k)=>{
	let i=0;
	while(i<k){
		num.unshift(num.pop())
		i++;
	}
	return num;
}
var num=[1,2,3,4,5,6,7]
var k=3
console.log(rotate(num,k))
