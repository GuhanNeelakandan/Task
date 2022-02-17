const request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload =()=>{
    if(request.status=200)
    {
        let a = JSON.parse(request.response)
        a.map((e) => {
            console.log(e.flags.png);
        })
    }
    else{
        request.error=function(){
            console.log("error");
        }
    }
}
