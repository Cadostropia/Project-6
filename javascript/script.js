'use strict';
fetch('/JSON/01.json')
.then(results => results.json())
.then(data => {
    console.log(data.name)
    document.querySelector("#first").innerText = data.name
})
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
