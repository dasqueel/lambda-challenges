// i ← 1
// while i < length(A)
//     j ← i
//     while j > 0 and A[j-1] > A[j]
//         swap A[j] and A[j-1]
//         j ← j - 1
//     end while
//     i ← i + 1
// end while

// function insertionSort(array) {
//  let i = 1;
//  while (i < array.length) {
//    let j = 1;
//    while (j > 0 && array[j - 1] > a[j]) {

//    }
//  }
// }
function swap(array, pos1, pos2) {
  let pos1ValRef = array[pos1];
  array[pos1] = array[pos2];
  array[pos2] = pos1ValRef;
}

arr = [12,32,1,52,4,12,23,24,25,8]

// swap(arr, 1, 3)

// console.log(arr)

// function insertionSort(array) {
//   for (let i = 0; i < array.length; i++) {
//     // check if ith position is less than prior positions
//     let j = i - 1;
//     while (j >= 0 && array[i] < array[j]) {
//       // console.log('here')
//       swap(array, i, j);
//       console.log(array)
//       j--;
//       console.log(j);
//     }
//   }
//   console.log(array);
//   return array;
// }

function insertionSort(array) {
  for(let i = 0; i < array.length; i++) {
    let temp = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > temp) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = temp;
  }
  return array;
}


insertionSort(arr);

console.log(arr);