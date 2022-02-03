function largNumber(numbers){
    let largest = 0;
    for(let i = 0; i < numbers.length; i++){
        let element = numbers[i];
        largest += element;
    }
    return largest;
}
const student = [50, 64, 85, 54, 74];
const totalNumber = largNumber(student);
console.log(totalNumber)