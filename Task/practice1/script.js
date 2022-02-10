let btn = document.createElement("button")
btn.innerText="Submit";
btn.addEventListener(onclick="myFunction()");


function myFunction() {
  var x= document.getElementById("myEmail").value;
  document.getElementById("mail").innerHTML = x;
  var y=document.getElementById("myNumber").value;
  document.getElementById("number").innerHTML = y;
}

