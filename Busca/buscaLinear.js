
const numeros = [0, 2, 4, 8, 15, 16, 23, 28, 37, 42];

const posicao = buscaLinear(numeros, 15);

if (posicao !== -1) {
  console.log("Encontrado na posição:", posicao);
} else {
  console.log("Não encontrado");
}
