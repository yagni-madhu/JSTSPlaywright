// rule of thumb: always use === and !== instead of == and !=
// == compares values for equality after converting both values to a common type
// === compares values for equality without converting their types

// ----------- 1. Empty string vs 0 vs "0"
console.log("" == 0); // true (empty string is converted to 0)
console.log("" === 0); // false (empty string is not the same type as 0)
console.log("0" == 0); // true (string "0" is converted to number 0)
console.log("0" === 0); // false (string "0" is not the same type as number 0)
console.log("0" == ""); // false (string "0" is not equal to empty string)
console.log("0" === ""); // false (string "0" is not the same type as empty string)
 // ******IMPORTANT: "0" is a string, "" is an empty string, they are not equal
 // called Transivity broken --> coerced

// ----------- 2. null vs undefined
console.log(null == undefined); // true (null and undefined are considered equal in non-strict comparison)
console.log(null === undefined); // false (null and undefined are not the same type)

// Always use === in Automation
console.log("" === 0); // false (empty string is not the same type as number 0)
console.log("0" === 0); // false (string "0" is not the same type as number 0)
console.log("0" === ""); // false (string "0" is not the same type as empty string)
console.log(null === undefined); // false (null and undefined are not the same type)


