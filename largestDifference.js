/*

turn array into assoc array with key as int and value its index in array
order the assoc arrray
if largest index is greater lowest index, return that difference

*/
function largestDifference(arr) {
	const arrObj = arr.reduce(function(acc, cur, i) {
		// acc[i] = cur;
		cur = acc[i];
		return acc;
	}, {});
}

function largestDifference(arr) {
  let max_diff = arr[1] - arr[0];
  let min_element = arr[0];
  for(i = 1; i < arr.length; i++)
  {
    if (arr[i] - min_element > max_diff)
      max_diff = arr[i] - min_element;
    if (arr[i] < min_element)
         min_element = arr[i];
  }
  return max_diff =< 0 ? 0 : max_diff;
}