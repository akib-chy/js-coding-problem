/*6th = 6th[5 - 1] + 6th[5 - 2];
  7th = 6th + 5th
*/

const fibo = [0,1];
for(let i = 2; i <=10; i++){
    fibo[i] = fibo[i-1] + fibo[i-2];
}
console.log(fibo)

const fibo = [0,1];
for(let i = 2; i <=30; i++){
    fibo[i] = fibo[i - 1] + fibo[i - 2];
}
console.log(fibo);

function fibonacciSeres(numbers){
    const fibo = [0,1];
    for(let i = 2; i < numbers; i++){
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}
const fibonacci = fibonacciSeres(54);
console.log(fibonacci);


function fibonacciSeres(numbers){
    if(typeof numbers != 'number'){
        return 'Plese enter a number'
    }
    if(numbers < 2){
        return 'Plese Enter a Posative number Grether then 2'
    }
    const fibo = [0,1];
    for(let i = 2; i < numbers; i++){
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}
const fibonacci = fibonacciSeres(-2);
console.log(fibonacci);