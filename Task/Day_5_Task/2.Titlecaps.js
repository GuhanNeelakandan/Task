//Convert all the strings to title caps in a string array in annonymus

const string = function(){
function toTitleCase(str){
    str =str.toLowerCase().split(' ');
    for( i=0;i<str.length;i++){
        str[i] = str[i].charAt(0).toUpperCase()+str[i].slice(1);
    }
    return str.join(' ');
}
console.log(toTitleCase("WELCOME TO GUVI"));
}
string();


//Convert all the strings to title caps in a string array in IIFE
(()=> {function toTitleCase1(str1){
    str1 =str1.toLowerCase().split(' ');
    for( i=0;i<str1.length;i++){
        str1[i] = str1[i].charAt(0).toUpperCase()+str1[i].slice(1);
    }
    return str1.join(' ');
}
console.log(toTitleCase1("WELCOME TO GUVI"));
})();
