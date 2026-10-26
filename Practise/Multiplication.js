let prompt = require("prompt-sync")();
let number = prompt("Enter Number : ")

for(let index=1; index<=10; index++) {
    let value = number * index;
    console.log(number, "x", index, "=", value);
}
