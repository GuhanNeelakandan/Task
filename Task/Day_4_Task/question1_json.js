const obj1 = {
    name: 'person1',
    age: '5'
};
      
const obj2 = {
    age: '5',
    name: 'person1'
};

var results=true;

if(Object.keys(obj1).length==Object.keys(obj2).length){
    for(key in obj1) { 
        if(obj1[key] == obj2[key]) {
            continue;
        }
        else {
            flag=false;
            break;
        }
    }
}
else {
    results=false;
}
console.log(results);