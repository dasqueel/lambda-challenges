// arr.forEach((el, i) => {
// 	// console.log(i, el)
// 	if (i === 0) {
// 		console.log(0)
// 		// el.split(',').forEach(headerEl => {
// 		// 	markdownStr += `|${headerEl}`
// 		// })
// 		// markdownStr = markdownStr.concat('| \n')
// 	}
// 	if (i === 1) {
// 		console.log(1)
// 		// arr[0].split(',').forEach(headerEl => {
// 		// 	let hyphens = '-'.repeat(headerEl.length)
// 		// 	markdownStr += `|${hyphens}`
// 		// })
// 		// markdownStr = markdownStr.concat('| \n')
// 	}
// 	else {
// 		console.log(el)
// 		// el.split(',').forEach(valEl => {
// 		// 	markdownStr += `|${valEl}`
// 		// })
// 		// markdownStr = markdownStr.concat('| \n')
// 	}
// })

function markdownTables(arr) {

	let markdownStr = '';
	// arr[0].split(',').forEach(headerEl => {
	// 	markdownStr += `|${headerEl}`
	// })
	// markdownStr = markdownStr.concat('| \n')

	// arr[0].split(',').forEach(headerEl => {
	// 	let hyphens = '-'.repeat(headerEl.length)
	// 	markdownStr += `|${hyphens}`
	// })
	// markdownStr = markdownStr.concat('| \n')

	// for (let i = 1; i < arr.length; i++) {
	// 	arr[i].split(',').forEach(valEl => {
	// 		markdownStr += `|${valEl}`
	// 	})
	// 	markdownStr = markdownStr.concat('| \n')
	// }

	arr.forEach((el, i) => {
		if (i === 0) {
			el.split(',').forEach(headerEl => {
				markdownStr += `|${headerEl}`
			})
			markdownStr = markdownStr.concat('| \n')

			arr[0].split(',').forEach(headerEl => {
				let hyphens = '-'.repeat(headerEl.length)
				markdownStr += `|${hyphens}`
			})
			markdownStr = markdownStr.concat('| \n')
		}
		else {
			el.split(',').forEach(valEl => {
				markdownStr += `|${valEl}`
			})
			markdownStr = markdownStr.concat('| \n')
		}
	})
	return markdownStr.trim()
}

const arr = ['name,email', 'emily,emily@email.com', 'mary,maryberry@gbbs.co.uk']

// markdownTables(arr)
console.log(markdownTables(arr))



