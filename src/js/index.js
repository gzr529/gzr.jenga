import "../../node_modules/aos/src/js/aos.js";

console.log("RTC Connecting to SpiritPower...");

var AOS = require('aos');
AOS.init();

const originalDares = [
{dare: "Take a Shot (From Your Revolver)", dareNumber: 1, spicy: false},
{dare: "Text Your Ex", dareNumber: 2, spicy: false},
{dare: "Admit a dark secret", dareNumber: 3, spicy: false},
{dare: "Over Throw the Government", dareNumber: 4, spicy: false},
{dare: "Hug Your Dad", dareNumber: 5, spicy: true},
];

//Grabs a ANY UNFLITERED DARE and displays the actual dare

function getRandom(){
    const randomDare = originalDares[Math.floor(Math.random() * originalDares.length)]
    const randomDareText = (Object.values(randomDare)[0]);
    const randomDareNumber = (Object.values(randomDare)[1]);
    //console.log(randomDareText);
    //console.log(randomDareNumber);
    document.getElementById('daresText').innerHTML=(randomDareText);
    document.getElementById('dareNumber').innerHTML=(randomDareNumber);
};

const noSpicyDares = originalDares.filter(dared => dared.spicy === false);

function getRandomNoSpice(){
    const randomDareNoSpice = noSpicyDares[Math.floor(Math.random() * noSpicyDares.length)]
    const randomDareTextNoSpice = (Object.values(randomDareNoSpice)[0]);
    const randomDareNumberNoSpice = (Object.values(randomDareNoSpice)[1]);
    //console.log(randomDareText);
    //console.log(randomDareNumber);
    document.getElementById('daresText').innerHTML=(randomDareTextNoSpice);
    document.getElementById('dareNumber').innerHTML=(randomDareNumberNoSpice);
};

document.getElementById('randomDareButton').addEventListener('click', getRandom)
document.getElementById('randomDareButtonNoSpice').addEventListener('click', getRandomNoSpice)

const originalDareList = (Object.values(Object.values(originalDares)[0])[0]);

originalDares.forEach((element) => {
const individualDare = (Object.values(element)[0]);
console.log(individualDare);
document.getElementById('testy').insertAdjacentHTML=(afterbegin, individualDare);
});

console.log(originalDareList);
console.log(originalDares.length);

