// undefined and null are two distinct types in JavaScript that represent the absence of a value,
//  but they are used in different contexts and have different meanings.

// undefined: This type represents a variable that has been declared but has not been assigned a value.
//  It is the default value of uninitialized variables and function parameters that are not provided. 
// When you try to access a variable that has not been assigned a value, it will return undefined.

var x; // undefined, because x has not been assigned a value
console.log(x); // undefined
console.log(typeof x); // "undefined"

// null: This type represents the intentional absence of any object value.
//  It is often used to indicate that a variable should have no value or that an object reference is empty.
//  null is an assignment value, meaning you can assign null to a variable to indicate that it has no value.

var y = null; // null, because y has been explicitly assigned the value null
console.log(y); // null
console.log(typeof y); // "object" (this is a known quirk in JavaScript)

let no_tesla_madhu_has_car = null; // null literal
let a; // undefined, because a has not been assigned a value


