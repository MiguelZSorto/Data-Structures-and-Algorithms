// Date created: July 8th, 2020
// Author: Miguel Z. Sorto
// Purpose: Practice implementing mergesort and reviewing the divide and conquer paradigm

const MergeSort = (A) => {
  let n = A.length;

  // base case: size of list is 1
  if (n < 2) {
    return;
  }

  // if n > 2, then we have to split the list
  let mid = Math.floor(n / 2);
  let left = A.slice(0, mid); // remember: slice(start,end) is [start, end)
  let right = A.slice(mid);

  MergeSort(left);
  MergeSort(right);
  Merge(left, right, A);
};

// L, R, and A are arrays
const Merge = (L, R, A) => {
  let nL = L.length;
  let nR = R.length;

  // L -> i, R -> j, and A -> k
  let i = 0,
    j = 0,
    k = 0;

  while (i < nL && j < nR) {
    if (L[i] <= R[j]) {
      A[k] = L[i];
      i++;
    } else {
      A[k] = R[j];
      j++;
    }
    k++;
  }

  // Here, we might have the left or right arrays with some elements still unselected,
  // so we iterate throught the rest of the list and add it A
  while (i < nL) {
    A[k] = L[i];
    i++;
    k++;
  }

  while (j < nR) {
    A[k] = R[j];
    j++;
    k++;
  }
};
