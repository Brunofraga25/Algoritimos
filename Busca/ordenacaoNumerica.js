function bubbleSort(lista) {
  const arr = [...lista]; 

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

const numeros = [5, 3, 8, 4, 2];

console.log(bubbleSort(numeros));
