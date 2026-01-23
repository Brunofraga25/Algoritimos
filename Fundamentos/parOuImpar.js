const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite um número: ", (entrada) => {
  const numero = Number(entrada);

  if (numero % 2 === 0) {
    console.log("Par");
  } else {
    console.log("Ímpar");
  }

  rl.close();
});
