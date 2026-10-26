// For Loop
// Help you to repeat a block of code.

// ICU
// INIT - let i=0
// CONDITION -  i< 10
// UPDATION

// for( i;c;u){

// }

// for(let i=0;i<10;i++){
//     // code that you want to repeat!
//     console.log(i);
// }

for(let i=0;i<=10;++i){    // i++ or ++i both are same in this case
    console.log(i);
}


// for (let somya = 0; somya < 10; somya++) {
//     console.log(somya);
// }
  

let count = 0;
for (let i = 5; i < 5; i++) {
    count++;
}
console.log(count); // 0, because the loop condition is false at the start, so the loop body never executes.