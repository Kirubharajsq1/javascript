/*

//Bubble Sort
function bubbleSort(arr) {
  const n = arr.length;
  let swapped;
  for (let i = 0; i < n; i++) {
    swapped = false; // reset for each pass
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }
    if (!swapped) {
      break; // array is already sorted
    }
  }
  return arr;
}

const bubbleSortArr = [5, 4, 3, 2, 1];
console.log(bubbleSort(bubbleSortArr)); // [1, 2, 3, 4, 5]

*/

/*
//Selection Sort
function selectionSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }
  return arr;
}

const selectionSortArr = [5, 4, 3, 2, 1];
console.log(selectionSort(selectionSortArr));
*/
