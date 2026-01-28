const numeros = [4, 8, 15, 16, 23, 42];

const posicao = buscaLinear(numeros, 15);

if (posicao !== -1) {
  console.log("Encontrado na posição:", posicao);
} else {
  console.log("Não encontrado");
}
