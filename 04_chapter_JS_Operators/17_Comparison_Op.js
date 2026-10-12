// Comparison Operators

// = Assignment operator is used to assign a value to a variable. It is not a comparison operator.
// == Equality operator checks if two values are equal, but it does not check the data type.
// === Strict equality operator checks if two values are equal and also checks the data type.
// != Inequality operator checks if two values are not equal, but it does not check the data type.
// !== Strict inequality operator checks if two values are not equal and also checks the data type.

console.log(10 == "10"); // Output: true (values are equal, but data types are different)
console.log(10 === "10"); // Output: false (values are equal, but data types are different)
console.log(10 != "10"); // Output: false (values are equal, but data types are different)
console.log(10 !== "10"); // Output: true (values are equal, but data types are different)


// Example of comparison operators
let a = 10;
let b = "10";
console.log(a == b); // Output: true (values are equal, but data types are different)
console.log(a === b); // Output: false (values are equal, but data types are different)

// <, >, <=, >= are used to compare two values and return a boolean value (true or false).
a = 5; b = 10;
console.log(a < b); // Output: true (5 is less than 10)
console.log(a > b); // Output: false (5 is not greater than 10)
console.log(a <= b); // Output: true (5 is less than or equal to 10)
console.log(a >= b); // Output: false (5 is not greater than or equal to 10)

 