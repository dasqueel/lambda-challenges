function mergeObjects(arr) {
  let merged = {}
  arr.forEach(obj => {
  	for (var key in obj) {
  	  // console.log(prop, obj[prop]);
  	  merged[key] = obj[key]
  	}
  });
  return merged;
}

const x = [
{1: '1', 2: '2', 3: '3'},
{3: '4', 4: '4', 5: '6'},
{5: '5', 6: '6', 7: '7'}
];

console.log(mergeObjects(x));