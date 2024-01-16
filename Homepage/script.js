let numDice;
let numRolls;
let result = [];
let freq2;
let freq3;

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

function updateTable(calculations){
    let tableRef = document.getElementById('data');
    let newRow = tableRef.insertRow(-1);
    for (i = 0; i < calculations.length; i ++){
        let newCell = newRow.insertCell(i);
        newCell.appendChild(document.createTextNode(calculations[i]));
    }
}

function calculate(){
    let calculations = [mean(), median(), mode(), frequency(), freq2, freq3];
    updateTable(calculations);
}

function mean(){
    let sum = 0;
    for (let number of result) {
        sum += number;
    }
    return(sum / result.length);
}

function median(){
    result.sort();
    if (result.length % 2 == 0){
        let num1 = result[result.length/2];
        let num2 = result[(result.length/2) - 1];
        return (num1 + num2) / 2
    }else{
        return result[Math.floor(result.length/2)];
    }
}

function mode () {
    let numMode = 0;
    let numOfMode = 0;
    for (i = 0; i < result.length; i ++){
        let arr = result.filter(modeHelper(result[i]));
        if (i === 0 || arr.length > numOfMode) {
            numMode = result[i];
            numOfMode = arr.length; 
        }
    }
    return numMode;
}

function modeHelper(num, mode){
    return num === mode;
}

function frequency() {
    let list = [];
    for (i = 0; i < numDice * 6; i ++) {
        list.push([numDice + i]);
    }
    for (let num of removeDups(result)){
        let count = 0;
        for (i = 0; i < result.length; i ++) {
            if (result[i] === num) {
                count ++;
            }
        }
        for (i = 0; i < list.length; i ++) {
            if (list[i][0] === num) {
                list[i].push(count);
            }
        }
    }
    if (numDice >= 2) {
        for (let cs of list) {
            if (cs[1] >= 2){
                freq2 ++;
                if (cs[1] === 3) {
                    freq3 ++;
                }
            }
        }
    }
    return list;
}

function removeDups(array) {
    return array.sort().filter(function(item, position, arr) {
        return !position || item != arr[position - 1];
    });
}

