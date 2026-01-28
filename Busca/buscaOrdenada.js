function buscaBinaria(lista, valor) {
  let inicio = 0;
  let fim = lista.length - 1;

  while (inicio <= fim) {
    const meio = Math.floor((inicio + fim) / 2);

    if (lista[meio] === valor) {
      return meio;
    }

    if (valor < lista[meio]) {
      fim = meio - 1;
    } else {
      inicio = meio + 1;
    }
  }

  return -1;
}

const numeros = [4, 8, 15, 16, 20, 23, 42];


const posicao = buscaBinaria(numeros, 23);

console.log("Número encontrado na posição:", posicao);
