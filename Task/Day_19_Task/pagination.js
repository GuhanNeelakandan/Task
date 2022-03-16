let div1=document.createElement('div')
div1.setAttribute('id','div1')
div1.classList.add('text-center','table-responsive')
document.body.appendChild(div1)

let h1=document.createElement('h1')
h1.setAttribute('id','title')
h1.innerHTML ='Pagination'
h1.classList.add('h1')
document.getElementById('div1').appendChild(h1)

let div2=document.createElement('div')
div2.setAttribute('id','list')
document.getElementById('div1').appendChild(div2)

let table = document.createElement('table');
table.setAttribute('id','table')
table.classList.add('table','table-bordered')
document.getElementById('list').appendChild(table)


let div3=document.createElement('div')
div3.setAttribute('id','buttons')
div3.classList.add('nav')
div3.classList.add('d-flex','justify-content-center')
document.getElementById('div1').appendChild(div3)

let form=document.createElement('form')
form.setAttribute('id','form')

document.getElementById('buttons').appendChild(form)

let input1=document.createElement('input')
input1.setAttribute('type','button')
input1.setAttribute('id','buttons1')
input1.setAttribute('value','Previous')
input1.setAttribute('onclick','previousPage()')
document.getElementById('form').appendChild(input1)

let input2=document.createElement('input')
input2.setAttribute('type','button')
input2.setAttribute('id','buttons2')
input2.setAttribute('value','First')
input2.setAttribute('onclick','Page(1)')
document.getElementById('form').appendChild(input2)

let input3=document.createElement('input')
input3.setAttribute('type','button')
input3.setAttribute('id','2')
input3.setAttribute('value','2')
input3.setAttribute('onclick','Page(2)')
document.getElementById('form').appendChild(input3)

let input4=document.createElement('input')
input4.setAttribute('type','button')
input4.setAttribute('id','3')
input4.setAttribute('value','3')
input4.setAttribute('onclick','Page(3)')
document.getElementById('form').appendChild(input4)

let input5=document.createElement('input')
input5.setAttribute('type','button')
input5.setAttribute('id','4')
input5.setAttribute('value','4')
input5.setAttribute('onclick','Page(4)')
document.getElementById('form').appendChild(input5)

let input6=document.createElement('input')
input6.setAttribute('type','button')
input6.setAttribute('id','5')
input6.setAttribute('value','5')
input6.setAttribute('onclick','Page(5)')
document.getElementById('form').appendChild(input6)

let input7=document.createElement('input')
input7.setAttribute('type','button')
input7.setAttribute('id','6')
input7.setAttribute('value','6')
input7.setAttribute('onclick','Page(6)')
document.getElementById('form').appendChild(input7)

let input8=document.createElement('input')
input8.setAttribute('type','button')
input8.setAttribute('id','7')
input8.setAttribute('value','7')
input8.setAttribute('onclick','Page(7)')
document.getElementById('form').appendChild(input8)

let input9=document.createElement('input')
input9.setAttribute('type','button')
input9.setAttribute('id','8')
input9.setAttribute('value','8')
input9.setAttribute('onclick','Page(8)')
document.getElementById('form').appendChild(input9)

let input10=document.createElement('input')
input10.setAttribute('type','button')
input10.setAttribute('id','9')
input10.setAttribute('value','9')
input10.setAttribute('onclick','Page(9)')
document.getElementById('form').appendChild(input10)

let input11=document.createElement('input')
input11.setAttribute('type','button')
input11.setAttribute('id','buttons3')
input11.setAttribute('value','Last')
input11.setAttribute('onclick','lastPage()')
document.getElementById('form').appendChild(input11)

let input12=document.createElement('input')
input12.setAttribute('type','button')
input12.setAttribute('id','buttons4')
input12.setAttribute('value','Next')
input12.setAttribute('onclick','nextPage()')
document.getElementById('form').appendChild(input12)

var data = [
 {
    "id": "1",
    "name": "Lura Senger",
    "email": "Xander_Collier@yahoo.com"
  },
  {
    "id": "2",
    "name": "Wilburn Weber",
    "email": "Bennett_Kreiger11@yahoo.com"
  },
  {
    "id": "3",
    "name": "Tyrique Hahn",
    "email": "Juston.Altenwerth@yahoo.com"
  },
  {
    "id": "4",
    "name": "Lenny Bailey",
    "email": "Guiseppe_Hegmann@yahoo.com"
  },
  {
    "id": "5",
    "name": "Vladimir Keeling",
    "email": "Louisa_Walsh18@hotmail.com"
  },
  {
    "id": "6",
    "name": "Kellie Crona",
    "email": "Chandler_Abernathy@yahoo.com"
  },
  {
    "id": "7",
    "name": "Carolina White",
    "email": "Royal50@hotmail.com"
  },
  {
    "id": "8",
    "name": "Alfredo Conn",
    "email": "Clarabelle34@hotmail.com"
  },
  {
    "id": "9",
    "name": "Stan Shanahan",
    "email": "Lamar.McClure@hotmail.com"
  },
  {
    "id": "10",
    "name": "Marvin Fay",
    "email": "Osbaldo58@hotmail.com"
  },
  {
    "id": "11",
    "name": "Torrance Rau",
    "email": "Orin45@gmail.com"
  },
  {
    "id": "12",
    "name": "Harold Gutmann MD",
    "email": "Alyce.Stracke37@yahoo.com"
  },
  {
    "id": "13",
    "name": "Taryn Torphy",
    "email": "Dean_Breitenberg71@hotmail.com"
  },
  {
    "id": "14",
    "name": "Bryana Lang",
    "email": "Tatum.Ullrich@yahoo.com"
  },
  {
    "id": "15",
    "name": "Nyasia Green DDS",
    "email": "Dino83@gmail.com"
  },
  {
    "id": "16",
    "name": "Nasir Gerhold",
    "email": "Lilian_Bashirian8@hotmail.com"
  },
  {
    "id": "17",
    "name": "Raymundo Ritchie PhD",
    "email": "Antwan.Schoen15@yahoo.com"
  },
  {
    "id": "18",
    "name": "Delmer Marvin",
    "email": "Kiera62@yahoo.com"
  },
  {
    "id": "19",
    "name": "Rachel Wilkinson",
    "email": "Foster_Conroy@gmail.com"
  },
  {
    "id": "20",
    "name": "Gladys Howell",
    "email": "Constance.Labadie10@yahoo.com"
  },
  {
    "id": "21",
    "name": "Ciara Klocko",
    "email": "Harvey76@yahoo.com"
  },
  {
    "id": "22",
    "name": "Quentin O'Kon",
    "email": "Amely_Cummings2@yahoo.com"
  },
  {
    "id": "23",
    "name": "Ms. Gabriella Kunde",
    "email": "Lorenza_Cummerata@hotmail.com"
  },
  {
    "id": "24",
    "name": "Gerald Reilly",
    "email": "Lia_Konopelski@gmail.com"
  },
  {
    "id": "25",
    "name": "Brody Carter I",
    "email": "Colten.Wilderman90@hotmail.com"
  },
  {
    "id": "26",
    "name": "Alanis Klocko",
    "email": "Johathan.Champlin69@gmail.com"
  },
  {
    "id": "27",
    "name": "Caroline Miller",
    "email": "Delaney.Kozey74@gmail.com"
  },
  {
    "id": "28",
    "name": "Ms. Merritt McClure",
    "email": "Wendy.Zieme@gmail.com"
  },
  {
    "id": "29",
    "name": "Jovani Schoen",
    "email": "Norval_Zieme@hotmail.com"
  },
  {
    "id": "30",
    "name": "Berniece Bradtke",
    "email": "Okey.Fisher39@hotmail.com"
  },
  {
    "id": "31",
    "name": "Hanna Gottlieb",
    "email": "Edna62@hotmail.com"
  },
  {
    "id": "32",
    "name": "Christiana Bergnaum",
    "email": "Donnie.Paucek22@gmail.com"
  },
  {
    "id": "33",
    "name": "Reid Stehr",
    "email": "Hiram69@gmail.com"
  },
  {
    "id": "34",
    "name": "Evans Ward",
    "email": "Liliane72@hotmail.com"
  },
  {
    "id": "35",
    "name": "Miss Enos Davis",
    "email": "Kolby.Grady@hotmail.com"
  },
  {
    "id": "36",
    "name": "Mathew Lueilwitz",
    "email": "Mariah.Hagenes@yahoo.com"
  },
  {
    "id": "37",
    "name": "Romaine Robel",
    "email": "Sheila19@yahoo.com"
  },
  {
    "id": "38",
    "name": "Immanuel Aufderhar",
    "email": "Aileen32@hotmail.com"
  },
  {
    "id": "39",
    "name": "Julius Reilly Jr.",
    "email": "Santa89@yahoo.com"
  },
  {
    "id": "40",
    "name": "Linnea Borer",
    "email": "Jarrett_Hegmann2@hotmail.com"
  },
  {
    "id": "41",
    "name": "Misael Abernathy IV",
    "email": "Robbie42@yahoo.com"
  },
  {
    "id": "42",
    "name": "Mr. Gerda Jerde",
    "email": "Gustave36@hotmail.com"
  },
  {
    "id": "43",
    "name": "Easton Daugherty",
    "email": "Malcolm.Schuster11@hotmail.com"
  },
  {
    "id": "44",
    "name": "Leanna Gutkowski",
    "email": "Chelsea9@gmail.com"
  },
  {
    "id": "45",
    "name": "Rollin Trantow",
    "email": "Marques_Hickle26@gmail.com"
  },
  {
    "id": "46",
    "name": "Heaven Luettgen",
    "email": "Lonnie.Greenfelder95@hotmail.com"
  },
  {
    "id": "47",
    "name": "Gilda Huel",
    "email": "Stephania.Hintz@gmail.com"
  },
  {
    "id": "48",
    "name": "Javon Walker",
    "email": "Lamar_Bailey39@yahoo.com"
  },
  {
    "id": "49",
    "name": "Stewart King",
    "email": "Chasity_Jenkins82@gmail.com"
  },
  {
    "id": "50",
    "name": "Cortez Lueilwitz",
    "email": "Lelia.Mitchell43@gmail.com"
  },
  {
    "id": "51",
    "name": "Ora Kilback",
    "email": "Matt25@gmail.com"
  },
  {
    "id": "52",
    "name": "Lera Macejkovic",
    "email": "Jamal.Donnelly45@hotmail.com"
  },
  {
    "id": "53",
    "name": "Asa Gottlieb",
    "email": "Carolyne.Langosh@yahoo.com"
  },
  {
    "id": "54",
    "name": "Avery Nienow",
    "email": "Hudson_Bernhard47@yahoo.com"
  },
  {
    "id": "55",
    "name": "Dr. Katrine Ryan",
    "email": "Colten40@gmail.com"
  },
  {
    "id": "56",
    "name": "Florida Kulas",
    "email": "Alejandra_Bernhard@yahoo.com"
  },
  {
    "id": "57",
    "name": "Mauricio Gerlach",
    "email": "Vincenza_Gusikowski84@hotmail.com"
  },
  {
    "id": "58",
    "name": "Chadrick Simonis",
    "email": "Reymundo.Doyle@gmail.com"
  },
  {
    "id": "59",
    "name": "Beau Jenkins",
    "email": "Cletus65@hotmail.com"
  },
  {
    "id": "60",
    "name": "Camilla Cole",
    "email": "Eda48@yahoo.com"
  },
  {
    "id": "61",
    "name": "Abagail MacGyver",
    "email": "Jevon.Koch@hotmail.com"
  },
  {
    "id": "62",
    "name": "Ludwig Prohaska",
    "email": "Eldon_DuBuque37@yahoo.com"
  },
  {
    "id": "63",
    "name": "Berenice Hane",
    "email": "Lonnie3@gmail.com"
  },
  {
    "id": "64",
    "name": "Abel Durgan",
    "email": "Marlee.Weimann42@gmail.com"
  },
  {
    "id": "65",
    "name": "Tate Kuhlman",
    "email": "Hope31@yahoo.com"
  },
  {
    "id": "66",
    "name": "Mrs. Hermina Daniel",
    "email": "Murphy59@yahoo.com"
  },
  {
    "id": "67",
    "name": "Marcelino Nienow",
    "email": "Estefania_Dibbert97@hotmail.com"
  },
  {
    "id": "68",
    "name": "Raphaelle Connelly",
    "email": "Josie.Legros70@yahoo.com"
  },
  {
    "id": "69",
    "name": "Mina Heaney",
    "email": "Pete.Hermann79@hotmail.com"
  },
  {
    "id": "70",
    "name": "Jaida Torp",
    "email": "Jonatan82@yahoo.com"
  },
  {
    "id": "71",
    "name": "Megane Fadel",
    "email": "Dandre82@yahoo.com"
  },
  {
    "id": "72",
    "name": "Angelo Schimmel V",
    "email": "Frederic54@hotmail.com"
  },
  {
    "id": "73",
    "name": "Jaren Ferry DDS",
    "email": "Kristian.Kilback@yahoo.com"
  },
  {
    "id": "74",
    "name": "Annette O'Connell",
    "email": "Domenica.Christiansen@gmail.com"
  },
  {
    "id": "75",
    "name": "Elenor Rohan PhD",
    "email": "Alvera.Huel48@yahoo.com"
  },
  {
    "id": "76",
    "name": "Linnie Beier",
    "email": "Reece_Berge@gmail.com"
  },
  {
    "id": "77",
    "name": "Maybelle Lehner",
    "email": "Arlo.Hagenes@gmail.com"
  },
  {
    "id": "78",
    "name": "Hailie Haag",
    "email": "Edythe.Lind59@hotmail.com"
  },
  {
    "id": "79",
    "name": "Marcelina Schuppe",
    "email": "Kip.Cummerata77@gmail.com"
  },
  {
    "id": "80",
    "name": "Ezra Lang",
    "email": "Garret.Swaniawski@hotmail.com"
  },
  {
    "id": "81",
    "name": "Carey Kiehn",
    "email": "Sabrina70@gmail.com"
  },
  {
    "id": "82",
    "name": "Carole Aufderhar",
    "email": "Efrain.Schamberger77@hotmail.com"
  },
  {
    "id": "83",
    "name": "Fanny Beatty",
    "email": "Ewald28@yahoo.com"
  },
  {
    "id": "84",
    "name": "Mina Lubowitz",
    "email": "Vincenzo.Herman@gmail.com"
  },
  {
    "id": "85",
    "name": "Anabelle Thiel",
    "email": "Amely.Renner@hotmail.com"
  },
  {
    "id": "86",
    "name": "Gerry Homenick",
    "email": "Ada_Von54@hotmail.com"
  },
  {
    "id": "87",
    "name": "Domenico Maggio",
    "email": "Freeman.Stamm@yahoo.com"
  },
  {
    "id": "88",
    "name": "Mauricio Bradtke III",
    "email": "Alford83@yahoo.com"
  },
  {
    "id": "89",
    "name": "Bulah Yost III",
    "email": "Nicolas_Schimmel6@yahoo.com"
  },
  {
    "id": "90",
    "name": "Orville Dibbert DDS",
    "email": "Bryana_Herzog@yahoo.com"
  },
  {
    "id": "91",
    "name": "Autumn Osinski",
    "email": "Davin8@hotmail.com"
  },
  {
    "id": "92",
    "name": "Levi Gibson",
    "email": "Deangelo69@gmail.com"
  },
  {
    "id": "93",
    "name": "Reva McKenzie",
    "email": "Bret40@hotmail.com"
  },
  {
    "id": "94",
    "name": "Jensen Pfannerstill",
    "email": "Dax_Marquardt@hotmail.com"
  },
  {
    "id": "95",
    "name": "Tyrese Larson MD",
    "email": "Cecelia85@yahoo.com"
  },
  {
    "id": "96",
    "name": "Dayne Sanford",
    "email": "Tyrique_Waters16@hotmail.com"
  },
  {
    "id": "97",
    "name": "Jeramy Steuber",
    "email": "Catalina.Stehr24@yahoo.com"
  },
  {
    "id": "98",
    "name": "Madge Bogisich",
    "email": "Joey.Marquardt50@gmail.com"
  },
  {
    "id": "99",
    "name": "Casimer MacGyver",
    "email": "Julius.Bednar96@yahoo.com"
  },
  {
    "id": "100",
    "name": "Arlene Kassulke",
    "email": "Josiane_Smith@yahoo.com"
  }
]

var currentPage = 1;
  var numberPerPage = 10;
  var numberOfPages = data.length/numberPerPage;

  function previousPage() {
    currentPage -= 1;
    load();
}

  function nextPage() {
      currentPage += 1;
      load();
  }
  
  function lastPage() {
      currentPage = numberOfPages;
      load();
  }
  function Page(num){
      currentPage=num;
      load();
  }
  function load() {
      var begin = ((currentPage - 1) * numberPerPage);
      var end = begin + numberPerPage;
      pageList = data.slice(begin, end);
      check();
      List();  
  }

  let thead = document.createElement('thead');
  thead.setAttribute('id','thead')

  let row_1 = document.createElement('tr');
  let heading_1 = document.createElement('th');
  heading_1.innerHTML = "ID";
  let heading_2 = document.createElement('th');
  heading_2.innerHTML = "Name";
  let heading_3 = document.createElement('th');
  heading_3.innerHTML = "Email-ID";

  row_1.appendChild(heading_1);
  row_1.appendChild(heading_2);
  row_1.appendChild(heading_3);
  thead.appendChild(row_1);


  function List() {
      document.getElementById("table").innerHTML = "";
      for (r = 0; r < pageList.length; r++) {
        let tbody = document.createElement('tbody');
        tbody.setAttribute('id','tbody')
        
        let row_2 = document.createElement('tr');
        let row_2_data_1 = document.createElement('td');
        row_2_data_1.innerHTML =   +pageList[r].id;;
        let row_2_data_2 = document.createElement('td');
        row_2_data_2.innerHTML ="Name: "+ pageList[r].name;
        let row_2_data_3 = document.createElement('td');
        row_2_data_3.innerHTML ="Email: "+pageList[r].email;
        
        row_2.appendChild(row_2_data_1);
        row_2.appendChild(row_2_data_2);
        row_2.appendChild(row_2_data_3);
        tbody.appendChild(row_2);
        table.appendChild(thead); 
        table.appendChild(tbody);

      }
  }
  function check() {
      document.getElementById("buttons1").disabled = currentPage == numberOfPages ? true : false;
      document.getElementById("buttons2").disabled = currentPage == 1 ? true : false;
      document.getElementById("buttons3").disabled = currentPage == 1 ? true : false;
      document.getElementById("buttons4").disabled = currentPage == numberOfPages ? true : false;
  }
  
  Page();


  