function buscaBinariaStrings(lista, valor) {
  let inicio = 0;
  let fim = lista.length - 1;

  valor = valor.toLowerCase();

  while (inicio <= fim) {
    const meio = Math.floor((inicio + fim) / 2);
    const atual = lista[meio].toLowerCase();

    if (atual === valor) {
      return meio;
    }

    if (valor < atual) {
      fim = meio - 1;
    } else {
      inicio = meio + 1;
    }
  }

  return -1;
}

const nomes = ["Ana", "Bruno", "Carlos", "Daniel"];

const posicao = buscaLinearStrings(nomes, "Bruno");

if (posicao !== -1) {
  console.log("Nome encontrado na posição:", posicao);
} else {
  console.log("Nome não encontrado");
}
