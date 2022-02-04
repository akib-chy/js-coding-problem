function largNumber(numbers){
    let largest = 0;
    for(let i = 0; i < numbers.length; i++){
        let element = numbers[i];
        largest += element;
    }
    return largest;
};
const student = [50, 64, 85, 54, 74];
const totalNumber = largNumber(student);
console.log(totalNumber)

function largNumber (number){
    let largest = 0;
    for(let i=0; i < number.length; i++){
        let element = number[i]
        largest += element;
    }
    return largest
}
let ages = [50, 65, 10, 24, 68, 65]
let old = largNumber(ages);
console.log(old);
function largestElement(numbers){
    let largest = 0;
    for(let i = 0; i< numbers.length; i++){
        const element = numbers[i]
            if(element > largest){
                largest = element;
            }
    }
    return largest;
}
const ages = [210, 54, 6, 85, 20, 47, 94];
const oldest = largestElement(ages);
console.log(oldest);

function oldAges(numbers){
    let largest = 0;
    for( let i = 0; i< numbers.length; i++){
        let element = numbers[i];
        if(element > largest){
            largest = element;
        }
    }
    return largest;
}
const ages = [21234, 54, 54, 654, 78, 65, 1674,];
const oldest = oldAges(ages);
console.log(oldest);


function oldAges(numbers){
    let largest = numbers[0];
    for( let i = 0; i< numbers.length; i++){
        let element = numbers[i];
        if(element > largest){
            largest = element;
        }
    }
    return largest;
}
const ages = [-21, -20, -2, -14, -1];
const oldest = oldAges(ages);
console.log(oldest);

// FIND OLDEST NUMBER IN FUNCTION

function oldAges(numbers){
    let largest = 0;
    for(let i = 0; i < numbers.length; i++){
        let element = numbers[i];
        if(element > largest){
            largest = element;
        }
    }
    return largest;
}
const ages = [50, 85, 99, 20, 45, 67, 81, 91];
const oldest = oldAges(ages);
console.log(oldest);

// FIND MINAS OLDEST NUMBER

function oldAges(numbers){
    let largest = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        let element = numbers[i];
        if(element > largest){
            largest = element;
        }
    }
    return largest;
}
const ages = [-21, -22, -84, -87];
const oldest = oldAges(ages);
console.log(oldest);

// FIND LOWEST NUMBER

function lowestAge(numbers){
    let lowest = 0;
    for(let i = 0; i < numbers.length; i++){
        let element = numbers[i];
        if(element > lowest){
            lowest = element
        }
    }
    return lowest;
}
const age = [50, 45, 21, 67, 10, 34];
const lowestes = lowestAge(age);
console.log(lowestes);

function min(input) {
    if (toString.call(input) !== "[object Array]")  
      return false;
 return Math.min.apply(null, input);
   }

console.log(min([12,34,56,1]));
console.log(min([-12,-34,0,-56,-1]));