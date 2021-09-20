//// Only change code below this line

var sum = 0;

function addThree(){
    sum = sum + 3;
    console.log('addThree: ', sum);
}

function addFive(){
    sum = sum + 5;
    console.log('addFive: ', sum);
}

// Only change code above this line
addThree();
addFive();

module.exports = {
    addThree,
    addFive
}