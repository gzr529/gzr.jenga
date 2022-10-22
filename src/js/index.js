import "../../node_modules/aos/src/js/aos.js";

console.log("RTC Connecting to SpiritPower...");

var AOS = require('aos');
AOS.init();

const originalDares = [
{dare: "Strip one piece of clothing.", dareNumber: "0" + 1, spicy: true},
{dare: "Take a picture of you interlocking hands with the person three spaces left from you and post it on your Instagram story.", dareNumber:"0" + 2, spicy: false},
{dare: "Flick the person across from you forehead.", dareNumber: "0" + 3, spicy: false},
{dare: "Kiss the person to your right on the lips.", dareNumber: "0" + 4, spicy: true},
{dare: "Have a push-up competition with the person to your right - the loser picks another block.", dareNumber:"0" + 5, spicy: false},
{dare: "Rank everyone 1-10 on how attractive they are.", dareNumber: "0" + 6, spicy: false},
{dare: "Let the person on your right text anyone from your phone (within reason)", dareNumber: "0" + 7, spicy: true},
{dare: "Give a hickey on the neck to the person 2 seats away from you to the rights.", dareNumber:"0" + 8, spicy: true},
{dare: "Boobs or Butt?", dareNumber: "0" + 9, spicy: true},
{dare: "Name the last person you’ve kissed with.", dareNumber: 10 , spicy: true},
{dare: "Do a staring contest for 30 seconds person to your right, the person who fails rolls a dare", dareNumber: 11 , spicy: false},
{dare: "Text your crush or ex.", dareNumber: 12 , spicy: false},
{dare: "Do the K-Drama hand against wall thing with the person 5 spaces away from you towards your right.", dareNumber: 13 , spicy: false},
{dare: "Give everyone a nickname.", dareNumber: 14, spicy: false},
{dare: "How the recent convos you’ve had with your best friend and read it out loud.", dareNumber: 15, spicy: false},
{dare: "Put on lipstick and kiss the person to your right.", dareNumber: 16 , spicy: false},
{dare: "Share a childhood embarrassment", dareNumber: 17 , spicy: false},
{dare: "Show the last 1 picture in ur camera roll, as well as the hidden pictures folder.", dareNumber: 18 , spicy: false},
{dare: "Give the person 3 seats to your right a massage (of thier choice)", dareNumber: 19, spicy: true},
{dare: "Get your ass slapped.", dareNumber: 20 , spicy: true},
{dare: "Call someone from your phone and stay silent until they hang up (choice of person to ur right)", dareNumber: 21 , spicy: false},
{dare: "Choke the person to your right.", dareNumber: 22 , spicy: false},
{dare: "Let the person 4 from your left do your makeup for 5 minutes.", dareNumber: 23 , spicy: false},
{dare: "Compliment the person 4 seats to your left seductively for 1 minute.", dareNumber: 24, spicy: false},
{dare: "Give any person of your choice a Sharpie or Pen tattoos.", dareNumber: 25, spicy: false},
{dare: "Berate the person to your left BDSM style for 1 minute, just full on dig into them, tear them into shreds.", dareNumber: 26, spicy: true},
{dare: "Play the Pocky Game with a person of your choice (if there is no Pockey, use gum or something 🤷)", dareNumber: 27 , spicy: true},
{dare: "Do the Titanic scene six seats to your right and take a picture of it.", dareNumber: 28, spicy: false},
{dare: "Spill a secret about someone in the room without saying their name, this can include you as well.", dareNumber: 29, spicy: false},
{dare: "Kiss, Fuck, Marry and WHY.", dareNumber: 30 , spicy: false},
{dare: "Who do you ship out of the friend group, can include people outside of the game.", dareNumber: 31, spicy: false},
{dare: "Swap an item of clothing with person to your right.", dareNumber: 32 , spicy: true},
{dare: "Play eenie-meenie-miney-mo and kiss the person it lands on", dareNumber: 33, spicy: true},
{dare: "Share your Rice Purity Score, if you're unsure, take the test.", dareNumber: 34, spicy: false},
{dare: "Let someone go through your phone for a minute (No Messaging or Deleting, let’s be civil here)", dareNumber: 35, spicy: false},
{dare: "Strip one piece of clothing ", dareNumber: 36, spicy: true},
{dare: "Get in the shower for 3 seconds fully clothed", dareNumber: 37 , spicy: false},
{dare: "Start an I love you game with the person to your right (whoever laughs is out and must roll a dare)", dareNumber: 38 , spicy: false},
{dare: "One-minute confession speech about anything.", dareNumber: 39 , spicy: false},
{dare: "Try Not to Smile challenge with a person of your choice. Loser does a Truth or Dare with the Winners choice.", dareNumber: 40 , spicy: false},
{dare: "Swap outfits with a person right of you whom of which is the opposite gender.", dareNumber: 41, spicy: true},
{dare: "Let someone draw on your face with eyeliner.", dareNumber: 42, spicy: false},
{dare: "Punch someone in the chest/shoulder (your choice) as hard as you want.", dareNumber: 43, spicy: false},
{dare: "Say one thing you wish to improve at that you usually wouldn’t share with someone else.", dareNumber: 44, spicy: false},
{dare: "Give the person 7 to your left a piggyback around the room.", dareNumber: 45, spicy: false},
{dare: "Kiss the person to your right on the neck ", dareNumber:46 , spicy: true},
{dare: "Make fun of one thing for everyone in the group or as many as you can", dareNumber: 47 , spicy: true},
{dare: "Sit on the person 8 seats away from you on your right’s lap. You can only get up for challenge or until the game ends (or the person under you gets uncomfortable)", dareNumber: 48, spicy: true},
{dare: "Recall the dumbest thing you’ve done for another person.", dareNumber: 49, spicy: false},
{dare: "Unhook the person to your left 9 seats away from you bra. If you fail to do so because you’re a nerd, you must to a Truth or Dare with said person.", dareNumber: 50, spicy: true},
{dare: "Confess your weirdest fetish.", dareNumber: 51, spicy: false},
{dare: "Paint the person 3 seats to your left’s nails.", dareNumber: 52 , spicy: false},
{dare: "Go Again two moe times, if the tower falls this time, roll twice", dareNumber: 53, spicy: false},
{dare: "Strip one piece of clothing.", dareNumber: 54, spicy: true},
];

//Grabs a ANY UNFLITERED DARE and displays the actual dare
function getRandom(){
     const randomDare = originalDares[Math.floor(Math.random() * originalDares.length)]  //Grabs random object from main array
    const randomDareText = (Object.values(randomDare)[0]);                              //Grabs first elemenet of previosuly grabbed object
    const randomDareNumber = (Object.values(randomDare)[1]);                            //Grabs second elemenet of previosuly grabbed object
    document.getElementById('daresText').innerHTML=(randomDareText);                    //Replaces text with fetced random dare
    document.getElementById('dareNumber').innerHTML=(randomDareNumber);
}


//Filters out all SPICY DARE

const noSpicyDares = originalDares.filter(dared => dared.spicy === false);

//Grabs a UNSPICY DARE and displays the actual dare

function getRandomNoSpice(){
    const randomDareNoSpice = noSpicyDares[Math.floor(Math.random() * noSpicyDares.length)]
    const randomDareTextNoSpice = (Object.values(randomDareNoSpice)[0]);
    const randomDareNumberNoSpice = (Object.values(randomDareNoSpice)[1]);
    document.getElementById('daresText').innerHTML=(randomDareTextNoSpice);
    document.getElementById('dareNumber').innerHTML=(randomDareNumberNoSpice);
};

document.getElementById('randomDareButton').addEventListener('click', getRandom)
document.getElementById('randomDareButtonNoSpice').addEventListener('click', getRandomNoSpice)

// const originalDareList = (Object.values(Object.values(originalDares)[0])[0]);

originalDares.forEach((element) => {
const individualDare = (Object.values(element)[0]);
document.getElementById('orginialDaresList').innerHTML+=(`<li id="dare_list_id" class="dareText">` + individualDare + `</li>`);
});

//Minimize or Maximize Div 

function changeHeightMin() {
document.getElementById('orginialDaresList').style.height = "0rem";
document.getElementById('orginialDaresList').style.color = "rgba(0, 0, 0, 0.00)";
}

document.getElementById('minListOne').addEventListener('click', changeHeightMin)

function changeHeightMax() {
document.getElementById('orginialDaresList').style.height = "30rem"
document.getElementById('orginialDaresList').style.color = "rgba(255, 255, 255, 0.35)";
}

document.getElementById('maxListOne').addEventListener('click', changeHeightMax)

function fn1() {
    var enteredDareNumber = document.getElementById("dareNumberSearch").value;
    alert(enteredDareNumber + " players currently playing!");
    return enteredDareNumber;
};

console.log(enteredDareNumber);

document.getElementById('enterButton1').addEventListener('click', fn1)

/*
var xyz = document.getElementById(`myInput2`).value;
function myFunction2() {
console.log(xyz)
}
let playerCount = 10
const randomNumber = Math.floor(Math.random() * playerCount) + 1;
console.log(randomNumber);
*/