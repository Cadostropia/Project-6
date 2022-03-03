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
fetch('/JSON/people.json').then(function(response){
    return response.json();
}).then(function(obj){
    console.log(obj);
}).catch(function(error){
    console.error('ERROR WARNING')
})

document.getElementById("div-to-be-changed").textContent = carJson;
function changeText(){
    console.log("Change Text was clicked");
    // document.getElementById("div-to-be-changed").textContent = "Hello I am RKCT602";
    document.getElementById("div-to-be-changed").textContent = document.getElementById("written-text").value;
    // document.getElementById("div-to-be-changed").textContent = "";    
}
// var obj01 = require('/JSON/people.json');
// console.log(obj01);