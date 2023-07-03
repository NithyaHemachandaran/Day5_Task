//JSON iterate through over all for loop
// Iterate through the object for in
var json1='{"name":"nithya","age":33,"state":"TN","country":"IND"}';
var obj1=JSON.parse(json1);
for (const key in obj1) {
  if (obj1.hasOwnProperty(key)) {
    console.log(`${key}: ${obj1[key]}`);
  }
}

//Iterate through the object foreach

var genders = Object.keys(obj1);
genders.forEach((key) => {
  console.log(` ${key} : ${obj1[key]}`);
})

//Iterate through the object for of
var data=Object.entries(obj1);
for(let element of data){
  console.log(element); 
}

//Iterate through for loop
const keys=Object.keys(obj1)
for(let i=0;i<keys.length;i++){
 const key1=keys[i];
 const val=obj1[key1];
 console.log(`${key1} : ${val}`);
}