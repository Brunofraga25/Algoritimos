const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite números separados por espaço: ", (entrada) => {
  const numeros = entrada.split(' ').map(Number);

  let pares = 0;
  let impares = 0;

  for (let n of numeros) {
    if (n % 2 === 0) {
      pares++;
    } else {
      impares++;
    }
  }

  console.log("Pares:", pares);
  console.log("Ímpares:", impares);
  rl.close();
});
