// Date created: July 13th, 2020
// Author: Miguel Z. Sorto

// Time: O(n^2)
// Space: O(1)

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let currMin = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[currMin] > arr[j]) {
        currMin = j;
      }
    }

    if (currMin != i) {
      // swap if found a smaller element than arr[i]
      [arr[i], arr[currMin]] = [arr[currMin], arr[i]];
    }
  }
};
