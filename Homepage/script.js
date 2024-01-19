let numDice;
let numRolls;
let actualRolls = [];
let result = [];
let freq3;

function submit(){
    numDice = document.getElementsByName("numDice")[0].value;
    numRolls = document.getElementsByName("numRoll")[0].value;
    document.getElementById("numDiceText").innerHTML = ("Number of Dice: (Currently: " + numDice + ")");
    document.getElementById("numRollText").innerHTML = ("Number of Rolls per Dice: (Currently: " + numRolls + ")");
}

function roll() {
    actualRolls = [];
    for (let i=0; i < numRolls; i ++) {
        let array = [];
        for (let i=0; i < numDice; i ++) {
            array.push(Math.floor(Math.random() * 6 + 1));
        }
        if (numRolls > 1) {
            actualRolls.push(array);
        }else {
            result = array;
        }
    }
    calculate();
}

function calculate(){
    let calculations = [mean(), median(), mode(), frequency(), doubles(), freq3];
    updateTable(calculations);
}

function updateTable(array){
    let newRow = document.getElementById("data").insertRow(-1);
    let number = newRow.insertCell();
    number.innerHTML = numDice;
    let numb = newRow.insertCell();
    numb.innerHTML = numRolls;
    for (let item of array) {
        let thing = newRow.insertCell();
        thing.innerHTML = item;
    }
}

function mean(){
    let sum = 0;
    for (let number of result) {
        sum += number;
    }

    return(Math.round((sum / result.length) * 100) / 100);
}

function median(){
    let arr = result;
    arr.sort();
    if (arr.length % 2 == 0){
        let num1 = arr[arr.length/2];
        let num2 = arr[(arr.length/2) - 1];
        return (num1 + num2) / 2;
    }else{
        return arr[Math.floor(arr.length/2)];
    }
}

function mode () {
    let arr = removeDups(result);
    let modeNum = [];
    let modeCount = 0;
    for (let num of arr) {
        let count = 0;
        for (let eachNum of result) {
            if (num == eachNum) {
                count ++;
            }
        }
        if (count >= modeCount) {
            if (count > modeCount){
                modeNum = [num];
            }else {
                modeNum.push(num);
            }
            modeCount = count;
        }
    }
    return modeNum;
}

function frequency() {
    let list = [];
    let arr = removeDups(result);
    for (let num of arr) {
        let count = 0;
        for (let eachNum of result) {
            if (num == eachNum) {
                count ++;
            }
        }
        list.push([num, count]);
    }
    return list;
}

function removeDups(array) {
    let arre = array;
    return arre.sort().filter(function(item, position, arr) {
        return !position || item != arr[position - 1];
    });
}

function doubles(){
    let count = 0;
    if (numDice == 2) {
        for (let arr of actualRolls) {
            if (arr[0] == arr[i]) {
                count ++;
            }
        }
    }
}
