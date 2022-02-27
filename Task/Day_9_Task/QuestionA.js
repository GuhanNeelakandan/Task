// a.Get all the countries from Asia continent /region using Filter function

var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3/all");
request.send();
request.onload =function(){
        let a = JSON.parse(this.response)
        const asia=a.filter((e) => {
            if(e.region==="Asia"){
                return e.name;
            }
        })
        console.log(asia)
}

//b.Get all the countries with a population of less than 2 lakhs using Filter function

var request=new XMLHttpRequest();
request.open('GET', 'https://restcountries.com/v3.1/all');
request.send();
request.onload =function(){
        let countryDetail= JSON.parse(this.response)
       countryDetail.forEach((e) => {
           console.log(e.name,e.capital,e.flags);
       });
}

//c.Print the following details name, capital, flag using forEach function

var request=new XMLHttpRequest();
request.open('GET', 'https://restcountries.com/v3.1/all');
request.send();
request.onload =function(){
        let countryDetail= JSON.parse(this.response)
       const people=countryDetail.filter((e) => {
           return e.population<200000
       });
       console.log(people);
}

//d.Print the total population of countries using reduce function

var request3=new XMLHttpRequest();
request.open('GET', 'https://restcountries.com/v3.1/all');
request.send();
request.onload =function(){
        let countryDetail= JSON.parse(this.response)
       const people=countryDetail.reduce((a,e)=>{
           return a+e.population;
       },0)
       console.log(people)
    };

// e.    Print the country which uses US Dollars as currency.
const request4=new XMLHttpRequest()
request4.open("GET","https://restcountries.com/v3.1/all",true)
request4.send()
request4.onload=function()
{
        let c4=JSON.parse( request4.responseText)
        c4.filter((e)=> e.currencies)
        .filter((e)=> e.currencies.USD)
        .map((e)=>{    
        console.log(e.name.official)})
}