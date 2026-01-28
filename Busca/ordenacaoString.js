function bubbleSortStrings(lista) {
  const arr = [...lista];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j].toLowerCase() > arr[j + 1].toLowerCase()) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

const nomes = ["Bruno", "Alexandre", "Eduardo", "Cassius", "Gloria", "Manuella", "Daniel"];

console.log(bubbleSortStrings(nomes));