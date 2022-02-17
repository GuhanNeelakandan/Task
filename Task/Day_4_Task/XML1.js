const request=new XMLHttpRequest();
request.open('GET', 'https://restcountries.com/v2/all');
request.send();
request.onload =()=>{
    if(request.status=200)
    {
        let a = JSON.parse(request.response)
        a.map((e) => {
            console.log(e.name,e.region,e.subregion,e.population);
        })
}
    else{
        request.error=function(){
            console.log("error");
        }
    }
}