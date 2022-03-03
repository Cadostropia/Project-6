'use strict';
// --------------------------------------------------
const meJSON = `
    {
        "name": "Salih",
        "age": 21,
        "graduated": false,
        "favoriteColor": [
            "violetta",
            "magenta"
        ]
    }
`;
const me = JSON.parse(meJSON);
console.log(me);

const car = {
    make: "Honda",
    model: "Civic"
};
const carJson = JSON.stringify(car);
console.log(carJson);
// --------------------------------------------------
fetch('/JSON/people.json')
.then(function(response){return response.json();})
.then(function(obj){console.log(obj);})
.catch(function(error){console.error('ERROR WARNING')})

document.getElementById("div-to-be-changed").textContent = carJson;
function changeText(){
    console.log("Change Text was clicked");
    // document.getElementById("div-to-be-changed").textContent = "Hello I am RKCT602";
    document.getElementById("div-to-be-changed").textContent = document.getElementById("written-text").value;
    // document.getElementById("div-to-be-changed").textContent = "";    
}
fetch('/JSON/people02.json')
  .then(response => response.json())
  .then(data => console.log(data));

fetch('/JSON/people02.json').then(abc => console.log(abc));
  
fetch('/JSON/people02.json')
.then(abcd => abcd.json())
.then(abcde => console.log(abcde));

let xaybc= `
    {
        "name": "Salih",
        "age": 21,
        "graduated": false,
        "favoriteColor": [
            "violetta",
            "magenta"
        ]
    }
`;
let xaybcKSON= JSON.parse(xaybc);
console.log(xaybc);
console.log(xaybcKSON);
