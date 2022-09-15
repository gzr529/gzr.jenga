import "../../node_modules/aos/src/js/aos.js";

console.log("RTC Connecting to SpiritPower...");

var AOS = require('aos');
AOS.init();

const originalDares = [
{dare: "Take a Shot (From Your Revolver)", dareNumber: 1, spicy: false},
{dare: "Murder Your Father", dareNumber: 2, spicy: false},
{dare: "Hug Your Mom", dareNumber: 3, spicy: true},
{dare: "Over Throw the Government", dareNumber: 4, spicy: false},
{dare: "Hug Your Dad", dareNumber: 5, spicy: true},
];

function getRandom(){
    const randomDare = originalDares[Math.floor(Math.random() * originalDares.length)]
    console.log(randomDare)
    console.log(Object.keys(randomDare));
}

document.getElementById('randomDareButton').addEventListener('click', getRandom)




