// Undefined and null are interchangeable most of the time, though they are not exactly the same values

typeof null
//returns "object"

typeof undefined
//returns "undefined"

console.log(null == undefined)
//returns true

console.log(null === undefined)
//returns false


//Example expressions of automatic type conversion when an operator is applied between two different types (type coercion)

//Here the null type becomes a 0
console.log(4 * null)
// returns 0


//Here the 6 converts from a string type to a number type
console.log("6" - 1)
// returns 5


//Here the addition operator converts 6 from string to number using string concatenation
console.log("6" + 1)
//returns 61


//Here the six string spelled out doesn't map to a number explicitly, so it outputs NaN
console.log("six" * 2)
//returns NaN

