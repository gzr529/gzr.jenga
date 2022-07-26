import "../../node_modules/aos/src/js/aos.js";

console.log("RTC Connecting to SpiritPower...");

var AOS = require('aos');
AOS.init();

const originalDares = [
{dare: "Take a Shot (From Your Revolver)", dareNumber: 1, spicy: false},
{dare: "Murder Your Father", dareNumber: 2, spicy: false},
{dare: "Hug Your Mom", dareNumber: 3, spicy: true},
{dare: "Over Throw the Government", dareNumber: 4, spicy: false},
];

originalDares.forEach(function(originalDareNames) {
    console.log(originalDareNames.dare); 
});

originalDares.forEach(function(originalDareNumber) {
    console.log(originalDareNumber.dareNumber); 
});

originalDares.forEach(function(originalDareSpice) {
    console.log(originalDareSpice.spicy); 
});

const spicyDares = originalDares.filter(game => game.spicy === true);

originalDares.forEach(function(originalDareSpice) {
    console.log(originalDareSpice.spicy); 
});

console.log(spicyDares)

const noSpicyDares = originalDares.filter(game => game.spicy === false);

console.log(noSpicyDares);


/*

const test = [1,56,23,64,75,37];

function numberSorter() {
    test.sort();
}

*/


