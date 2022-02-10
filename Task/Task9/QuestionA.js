const request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3/all");
request.send();
request.onload =()=>{
        let a = JSON.parse(request.response)
        a.filter((e) => {
            console.log(e.region);
        })
}