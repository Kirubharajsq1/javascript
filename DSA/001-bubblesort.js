function bubbleSort(arr) {
  let n = arr.length;
  let swapped;

  //Outer Loop
  for (let i = 0; i <= n - 1; i++) {
    swapped = false;
    for (let j = 0; j <= n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }

    if (!swapped) {
      console.log("Breaked");
      break;
    }
  }
  return arr;
}

let numbers = [64, 25, 12, 22, 11];
console.log(bubbleSort(numbers));
