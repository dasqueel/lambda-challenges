let greetCurried = (greetStr) => {
  return (nameStr) => {
    // console.log(greetString + ", " + nameStr);
    return (questionStr) => {
    	console.log(`${greetStr} ${nameStr}, ${questionStr}`);
    }
  };
};

					//var taken in main func
// greetCurried("Hi there")("Howard")("whats poppin?");
													// var taken within func

var curryIt = function(uncurried) {
  var parameters = Array.prototype.slice.call(arguments, 1);
  return function() {
    return uncurried.apply(this, parameters.concat(
      Array.prototype.slice.call(arguments, 0)
    ));
  };
};

var greeter = function(greeting, separator, emphasis, name) {
  console.log(greeting + separator + name + emphasis);
};
var greetHello = curryIt(greeter, "Sup", ", ", "?");
// greetHello("Heidi"); //"Hello, Heidi."
// greetHello("Eddie"); //"Hello, Eddie."

const add = (a) => {
	return (b) => {
		return a + b;
	}
}

const multiply = (a) => {
	return (b) => {
		return a * b;
	}
}

console.log(multiply(3)(add(5)(2)))