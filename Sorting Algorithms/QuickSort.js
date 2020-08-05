// Date created: July 8th, 2020
// Author: Miguel Z. Sorto
// Purpose: Practice implementing quicksort and reviewing the divide and conquer paradigm

const QuickSort = (A, start, end) => {
  if (start < end) {
    let pIndex = Partition(A, start, end);
    QuickSort(A, start, pIndex - 1);
    QuickSort(A, pIndex + 1, end);
  }
};

const Partition = (A, start, end) => {
  let pivot = A[end];
  let pIndex = start;

  for (let i = start; i < end; i++) {
    if (A[i] <= pivot) {
      [A[i], A[pIndex]] = [A[pIndex], A[i]];
      pIndex++;
    }
  }
  [A[pIndex], A[end]] = [A[end], A[pIndex]];
  return pIndex;
};

let arr = [6, 21, 53, 44, 102, 85, 3, 36, 60, 82, 2];
QuickSort(arr, 0, arr.length - 1);
console.log(arr);
