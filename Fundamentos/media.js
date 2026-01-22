const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite números separados por espaço: ", (entrada) => {
  const numeros = entrada.split(' ').map(Number);

  let soma = 0;
  for (let n of numeros) {
    soma += n;
  }

  const media = soma / numeros.length;
  console.log("Média:", media);
  rl.close();
});
