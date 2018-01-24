// function mergeSort(arr) {
//   // Merges two subarrays of arr[].
//   // First subarray is arr[l..m]
//   // Second subarray is arr[m+1..r]
//   function merge(arr, l, m, r) {
//     // let l = 0;
//     // let m = Math.floor(arr.length / 2);
//     // let r = arr.length - 1;
//     // Find sizes of two subarrays to be merged
//     let n1 = m - l + 1;
//     let n2 = r - m;

//     /* Create temp arrays */
//     let L = [];
//     let R = [];

//     /*Copy data to temp arrays*/
//     for (let i=0; i<n1; ++i)
//       L[i] = arr[l + i];
//     for (let j=0; j<n2; ++j)
//       R[j] = arr[m + 1+ j];


//     /* Merge the temp arrays */

//     // Initial indexes of first and second subarrays
//     let i = 0;
//     let j = 0;

//     // Initial index of merged subarry array
//     let k = l;
//     while (i < n1 && j < n2) {
//       if (L[i] <= R[j]) {
//         arr[k] = L[i];
//         i++;
//       } else {
//         arr[k] = R[j];
//         j++;
//       }
//       k++;
//     }

//     /* Copy remaining elements of L[] if any */
//     while (i < n1) {
//       arr[k] = L[i];
//       i++;
//       k++;
//     }

//     /* Copy remaining elements of R[] if any */
//     while (j < n2) {
//       arr[k] = R[j];
//       j++;
//       k++;
//     }
//   }

//   // Main function that sorts arr[l..r] using
//   // merge()
//   let sort = (arr, l, r) => {
//     // let l = 0;
//     // let r = arr.length - 1;
//     if (l < r) {
//       // Find the middle point
//       // let m = Math.floor((l+r)/2);
//       let m = Math.floor(arr.length / 2);
//       // console.log(m);
//       // Sort first and second halves
//       sort(arr, l, m);
//       sort(arr , m+1, r);

//       // Merge the sorted halves
//       merge(arr, l, m, r);
//     }
//   }
//   // console.log(arr, arr.length - 1);
//   sort(arr, 0, arr.length - 1);
// }

// helper function for merge sort
// the merge part
function merge(left, right) {
  const mergedArr = [];
  const leftLength = left.length;
  const rightLength = right.length;
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftLength && rightIndex < rightLength) {
    mergedArr.push(left[leftIndex] < right[rightIndex] ? left[leftIndex++]: right[rightIndex++]);
  }
  return mergedArr.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

function mergeSort(arr) {
  if (arr.length === 1) return arr;
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}

const arr1 = [];
for (let i = 0; i < 10; i++) {
  arr1.push(Math.floor(Math.random() * 100));
}
console.log(arr1);
console.log(mergeSort(arr1));

// let x = [1, 6, 3, 2, 4, 7];
// console.log(x);
// console.log(mergeSort(x));









