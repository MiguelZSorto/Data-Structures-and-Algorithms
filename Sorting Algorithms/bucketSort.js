// Date created: July 27th, 2020
// Author: Miguel Z. Sorto

const bucketSort = (arr) => {
  // make arr.length number of buckets
  const buckets = new Array(arr.length);
  for (let i = 0; i < buckets.length; i++) {
    buckets[i] = [];
  }

  // insert elements in their respective buckets
  arr.forEach((x) => {
    let bucket_idx = Math.round(10 * x);
    buckets[bucket_idx].push(x);
  });

  // sort the elements in each bucket
  for (let i = 0; i < buckets.length; i++) {
    buckets[i] = buckets[i].sort((a, b) => a - b);
  }

  // get the sorted elements from the buckets
  let k = 0;
  for (let i = 0; i < buckets.length; i++) {
    for (let j = 0; j < buckets[i].length; j++) {
      arr[k] = buckets[i][j];
      k++;
    }
  }

  return arr;
};
