const n = prompt('Enter a positive integer: ');
let sum = 0;
if (n <= 0) {
    console.log("Sorry,it isn't natural number");
}
else {
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
}
console.log('The sum of natural numbers:', sum);