const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite números separados por espaço: ", (entrada) => {
  const numeros = entrada.split(' ').map(Number);

  let maior = numeros[0];

  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maior) {
      maior = numeros[i];
    }
  }

  console.log("Maior valor:", maior);
  rl.close();
});