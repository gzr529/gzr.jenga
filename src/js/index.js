import "../../node_modules/aos/src/js/aos.js";

console.log("RTC Connecting to SpiritPower...");

var AOS = require('aos');
AOS.init();

const ogDares = [
{dare: "Take a Shot (From Your Revolver)", number: 1, spicy: false},
{dare: "Murder Your Father", number: 2, spicy: false},
{dare: "Over Throw the Government", number: 3, spicy: false}
];

document.getElementById("dares").innerHTML = ogDares[0]; 

console.log(ogDares[0]);

/*

const test = [1,56,23,64,75,37];

function numberSorter() {
    test.sort();
}

*/

ogDares.sort(function(a, b){return 0.5 - Math.random()});

