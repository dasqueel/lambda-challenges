function swap(arr, i1, i2) {
	var tmp = arr[i1];
	arr[i1] = arr[i2];
	arr[i2] = tmp;
}

function partition(arr, lo, hi) {
	// set the last element in array to be the pivot value
	let pivot = arr[hi];
	// set the partition index to the lowest index in arr
	let partitionIndex = lo;

	// iterate through each element in array (or sub array) and swap element in question
	// if it is less than the pivot value
	// the swap moves the element in quesiton moves it to one position to the right of
	// the partitionIndex (or parition wall you could call it)
	for (let i = 0; i < hi; i++) {
		if (arr[i] < pivot) {
			swap(arr, arr[i], arr[partitionIndex]);
			partitionIndex++;
		}
	}
	// finalize the partition divde by swapping the pivot element to one right of the partitonIndex
	swap(arr, arr[partitionIndex], arr[hi]);
	return partitionIndex;
}

// function partition
function quickSort(nums) {
	let quick = (nums, lo, hi) => {
		// base case or exiting logic for recursion
		if (lo < hi) {
			let partitionIndex = partition(nums, lo, hi);
			quick(nums, lo, partitionIndex - 1);
			quick(nums, partitionIndex + 1, hi);
		}
	}
	// let pivot = nums[nums.length - 1];
	// let i = 0;

	// let partition;
	return quick(nums, 0, nums.length - 1);
}

x = [2,3,523,2,634,34,7,84,34,435,3,9]
quickSort(x, 0, x.length - 1);
console.log(x);

