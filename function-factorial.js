

function factorial(number){
    let factorial1=1;
    for (i=1;i<=number;i++){
        factorial1*=i;
    }
    return factorial1;
}
let gettingFactorial= factorial(7);
console.log("Factorial Number is", gettingFactorial);