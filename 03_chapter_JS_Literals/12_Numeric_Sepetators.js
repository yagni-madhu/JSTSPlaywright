let millions = 1_000_000; // numeric separator for better readability
let binarySeparator = 0b1010_1010; // binary literal with numeric separator
let octalSeparator = 0o52_34; // octal literal with numeric separator
let hexSeparator = 0x2A_3F; // hexadecimal literal with numeric separator


// BigInt literals can also use numeric separators for better readability.
let big = 1_234_567n; // BigInt literal with numeric separator
let big2 = BigInt("12345678901234567890123456789");
let bigFromNum = BigInt(42);

console.log("BigInt literal :", big); // Output: 1234567
console.log("BigInt from string:", big2); // Output: 12345678901234567890123456789
console.log("BigInt from number:", bigFromNum); // Output: 42



