let number = [5,10,24,51,38,19,48];
let maior = number[0];

for(let n of number) {
    if (n > maior) {
        maior = n;
    } 
}

console.log(maior);