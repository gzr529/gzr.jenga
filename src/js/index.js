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

//Grabs a ANY UNFLITERED DARE and displays the actual dare

function getRandom(){
    const randomDare = originalDares[Math.floor(Math.random() * originalDares.length)]
    console.log(randomDare);
    const randomDareText = (Object.values(randomDare)[0]);
    const randomDareNumber = (Object.values(randomDare)[1]);
    //console.log(randomDareText);
    console.log(randomDareNumber);
    document.getElementById('daresText').innerHTML=(randomDareText);
    document.getElementById('dareNumber').innerHTML=(randomDareNumber);
};

document.getElementById('randomDareButton').addEventListener('click', getRandom)




