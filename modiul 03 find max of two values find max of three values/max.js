const minister = 450;
const banker = 100;
const army = 910;

if(minister > banker){
    console.log('Minister sobar boro')
}
else{
    console.log('banker sobar boro')
}

// FIND BIG NUMBER ON EF ELSE

if(minister > banker && minister > army){
    console.log('Minister Sobar boro')
}
else if(banker >minister && banker > army){
    console.log('banker sobar boro')
}
else{
    console.log('army sobar boro')
}

let max = Math.max(minister, banker, army);
console.log(max);

// FIND BIG NUMBER ON FUNCTION

function findBiger(first, second){
    if(first > second){
        return first
    }
    else{
        return second
    }
}

// FIND BIG NUMBER ON FUNCTION ON HOME WORK

let largest = findBiger(500, 85);
console.log(largest);

function findBigers(big1, big2, big3){
    if(big1>big2 && big1 > big3){
        return big1;
    }
    else if(big2 > big1 && big2 > big3){
        return big2;
    }
    else{
        return big3;
    }
}
let largestNumber = findBigers(450, 84, 304);
console.log(largestNumber);

// FIND SMALL NUMBER ON FUNCTION / HOME WOEK

function findSmallNumber(num1, num2, num3){
if(num1 < num2 && num1 < num3){
    return num1
}
else if(num2 < num1 && num2 < num3){
    return num2;
}
else{
    return num3;
}
}

let smallNum = findSmallNumber(450, 144, 54);
console.log(smallNum);