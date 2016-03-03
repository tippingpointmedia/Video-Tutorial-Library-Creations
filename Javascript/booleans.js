// Comparison operators
console.log(5 > 1)

console.log(5 < 1)


>= (greater than or equal to)
<= (less than or equal to)
== (equal to)
!= (not equal to)

// Here the outcome is rather easy to predict
console.log("A" != "a")

console.log("A" == "A")

// False due to Unicode standard - uppercase letters are always "less than" lowercase ones
"z" < "a"

"Z" < "z"

"a" > "A"

//Logical operators
&& logical and
|| logical or
! logical not

console.log(true && true)

console.log(false || false)

// Short-circuit evaluation
// || - evaluates left side for TRUE, otherwise will return value on the right
// &&  - evaluates left side for FALSE, otherwise will return value on the right
console.log(true || "A")

console.log(false && "A")



//Fun - Trick questions

console.log(typeof NaN)

console.log(NaN == NaN)



console.log("b" && "B")
