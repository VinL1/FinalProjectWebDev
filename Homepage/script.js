let numDice;
let numRolls;
let result = [];
let calculations = ["mean", "median", "mode", "frequency", "freq2x", "freq 3x"];

function submit(){
    numDice = document.getElementsByName("numDice")[0].value;
    numRolls = document.getElementsByName("numRoll")[0].value;
    document.getElementById("numDiceText").innerHTML = ("Number of Dice: (Currently: " + numDice + ")");
    document.getElementById("numRollText").innerHTML = ("Number of Rolls per Dice: (Currently: " + numRolls + ")");
}

function roll() {
    for (let i=0; i < numDice * numRolls; i ++) {
        result.push(Math.floor(Math.random() * 6 + 1));
    }
    calculate();
}

function calculate(){
    
}