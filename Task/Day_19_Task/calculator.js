
//function for displaying values
function dis(val)
{
document.getElementById("cal").value+=val
 }
//function for evaluation
function solve()
{
let x = document.getElementById("cal").value
let y = eval(x)
document.getElementById("cal").value = y
}
//function for clearing the display
function clr()
{
document.getElementById("cal").value = ""
}

function back() {
    var value = document.getElementById("cal").value;
    document.getElementById("cal").value = value.substr(0, value.length - 1);
}