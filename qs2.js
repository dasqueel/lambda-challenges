function swap(arr, i, j){
 let temp = arr[i];
 arr[i] = arr[j];
 arr[j] = temp;
}

// does two things
// does work by:
// partitions the array into two sub arrays, one subarray with all smaller elements than pivot
// one subarray with all elements greater than pivot
// second thing:
// returns the partition index of array
function partition(arr, left, right){
  let pivot = arr[right];
  let partitionIndex = left;

  for(let i = left; i < right; i++){
    if(arr[i] < pivot){
      swap(arr, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(arr, right, partitionIndex);
  return partitionIndex;
}

function qs(arr, left, right){
 let pivot;
 let partitionIndex;

 if(left < right){
  pivot = right;
  partitionIndex = partition(arr, left, right);

   //sort left and right
   qs(arr, left, partitionIndex - 1);
   qs(arr, partitionIndex + 1, right);
 }
 return arr;
}

function quickSort(nums) {
  return qs(nums, 0, nums.length - 1);
}

x = [2,523,634,34,7,84,34,435,3,9];
quickSort(x);
console.log(x);

