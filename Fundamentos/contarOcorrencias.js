const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite números separados por espaço: ", (entrada) => {
  const numeros = entrada.split(' ').map(Number);

  rl.question("Digite o número a ser contado: ", (valor) => {
    const procurado = Number(valor);
    let contador = 0;

    for (let n of numeros) {
      if (n === procurado) {
        contador++;
      }
    }

    console.log(`O número ${procurado} aparece ${contador} vez(es)`);
    rl.close();
  });
});
