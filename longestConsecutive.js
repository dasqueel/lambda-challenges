function longestConsecutive(arr, k) {
	if (k < 1 || arr === [] || k > arr.length) return "";
	return arr.map((word, i) => (
		// console.log(arr.slice(i, i+k).join(''))
		arr.slice(i, i+k).join('')
	))
	.reduce((longest, current) => current.length > longest.length ? current : longest);
}

// console.log(longestConsecutive(["a", "c", "b", "f", "c"], 3))
console.log(longestConsecutive(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2))

