
//4.................
let admin=9, fname=10.5; 
fname = "\"Guvi";
lname = "geek\"";
admin = fname+" "+lname;
alert( admin ); // "Guvi geek"

//5..................
let fname=10.5; 
fname = "Guvi";
lname = "geek"
let name = fname+lname;
alert( `hello ${name}.`);

//6..................

let a = +prompt("First number?");
let b = +prompt("Second number?");
alert(a + b);

//7..................
var a = "2" > "12";
//Don't touch below this
if (a) {
  console.log("Code is Blasted")
}
else
{
  console.log0("Diffused") 
}
// Explanation: If the first character from the first string is greater (or less) 
//than the other string’s, then the first string is greater (or less) than the second.

var a = "0" > "12";
//Don't touch below this
if (a) {
  console.log("Code is Blasted")
}
else
{
  console.log("Diffused") 
}

//8........................

let a = prompt("Enter a number?"); // using null Success will print
// Don't modify any code below this
if (a) {
 console.log( 'OMG it works for any number inc 0' );
}
else
{
 console.log( "Success" );

// }

//9...........................
let value = prompt('How many runs you scored in this ball');
if (value === 4) {
      console.log("You hit a Four");
} else if (value === 6) {
      console.log("You hit a Six");
} else {
      console.log("I couldn't figure out");
}

//10..........................
let login = 'Employee';
let message = (login == 'Employee') ? 'welcome' : 
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  '';
console.log(message);

//11...........................
//You cant change the value of the msg
let message;
if (null || 2 || undefined )
{
    message = "welcome boss";
}
else
{
    message = "Go away";
}
  console.log(message);

//12...........................
let message;
let lock;
//Dont change any code below this 
if (null || lock || undefined )
{
  message = "Go away";
}
else
{
 message = "welcome";
}
  console.log(message);

//13.........................
  let message;
let lock;
//Dont change any code below this
if (lock && " " || undefined )
{
  message = "Go away";
}
else
{
 message = "welcome";
}
console.log(message);

//14.............................
//You can change only 2 characters
let i = 3;
while (i) {
  console.log( --i+1);
}

//15..............................
let num = 1;
for(num=1;num<=10;num++){
    console.log(num)
}

//16..............................
// You are allowed to modify only one character 
for (let num = 2; num <= 20; num += 2) {
    console.log(num)
  }

//17...............................
let gifts = ["teddy bear", "drone", "doll"];
for (let i = 0; i < 3; i++) {
  console.log(`Wrapped ${gifts[i]}`+" "+"and added a bow!'");
}
//18...................................
let countdown = 100;
while (countdown < 0) {
  countdown--;
  if(countdown == 0)
  {
   console.log("bomb triggered");
  }
}

//19......................................
var lemein = "0";
var lemeout = 0;
var msg = "";
if (lemein) {
 msg += "hi";
 }
if (lemeout) {
 msg += 'Hello';
}
console.log(msg);
}

//msg = hi **Because lemein value is a a string. if lemeout valu is also string means the msg will be hiHello