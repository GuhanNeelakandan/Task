const request=new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function()
{
    if(request.status=200)
    {
        let a = JSON.parse(request.response.text)
        a.map((e) => {
            console.log(e.name);
            console.log(e.region);
            console.log(e.subregion);
            console.log(e.population);
        })
    }
    else{
        request.error=function(){
            console.log("error");
        }
    }
}