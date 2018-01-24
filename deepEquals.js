// const set1 = new Set([1,2,3])
// const set2 = new Set([2,3,4])

// let difference = new Set([...set1].filter(x => !set2.has(x)));

// console.log(difference)

x = {x: 1, y: 2 , z: {a: 3, b: 4}}
y = {x: 1, y: 2 , z: {a: 1, b: 4}}

// console.log(x.toString());
console.log(JSON.stringify(Object.entries(x)) === JSON.stringify(Object.entries(y)))
// console.log(Object.entries(x))