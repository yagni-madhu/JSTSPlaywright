// Multiple conditions using nested ternary operator
let age = 25;
let category = 
    (age < 13) ? "Child" : 
        (age < 20) ? "Teenager" : 
            (age < 60) ? "Adult" : "Senior";

console.log(`Category: ${category}`); // Output: Category: Adult

// Interview Question

let statusCode = 404;
let category1 =
    statusCode < 300 ? "Success" :
        statusCode < 400 ? "Redirect" :
            statusCode < 500 ? "Client Error" : "Server Error";

console.log(`Status ${statusCode}: ${category1}`); // Output: Status 404: Client Error


let temp = 35;
let feel = (temp >= 40) ? "Very Hot" :
    (temp >= 30) ? "Hot" :
        (temp >= 20) ? "Warm" :
            (temp >= 10) ? "Cool" : "Cold";
console.log("7. Temperature:", temp, "| Feel:", feel);
