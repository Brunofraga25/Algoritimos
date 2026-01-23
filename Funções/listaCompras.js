const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(pergunta) {
  return new Promise((resolve) => {
    rl.question(pergunta, resolve);
  });
}

async function listaDeCompras() {
  const lista = [];

  console.log("=== Lista de Compras ===");

  while (true) {
    const item = await question("Digite um item (ou 'sair' para finalizar): ");

    if (item.toLowerCase() === 'sair') {
      break;
    }

    lista.push(item);
    console.log(`"${item}" adicionado à lista.\n`);
  }

  mostrarLista(lista);
  rl.close();
}

function mostrarLista(lista) {
  console.log("\n🛒 Sua lista de compras:");

  if (lista.length === 0) {
    console.log("Nenhum item adicionado.");
    return;
  }

  lista.forEach((item, index) => {
    console.log(`${index + 1}. ${item}`);
  });
}

listaDeCompras();
