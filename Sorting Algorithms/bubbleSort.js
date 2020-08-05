// Date created: July 13th, 2020
// Author: Miguel Z. Sorto

// Time: O(n^2)
// Space: O(1)

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
};

const optimizedBubbleSort = (arr) => {
  let swapped = true;
  let i = arr.length - 1;

  while (i > 0 && swapped) {
    swapped = false;
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        swapped = true[(arr[j], arr[j + 1])] = [arr[j + 1], arr[j]];
      }
    }
    i--;
  }
};
