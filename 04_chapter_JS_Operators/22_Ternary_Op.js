let Age = 25;
let isAdult = (Age >= 18) ? "Yes, you are an adult." : "No, you are not an adult.";
console.log(isAdult); // Output: Yes, you are an adult.

// Examples : Interview Questions

let actualStatusCode = 200;
let expectedStatusCode = 200;
let statusMessage = (actualStatusCode === expectedStatusCode) ? "True" : "Fail";
console.log(statusMessage); // Output: True

let environment = "staging";
let baseUrl = environment === "prod"
    ? "https://api.example.com"
    : "https://staging-api.example.com";
console.log(baseUrl);

let isCI = true;
let browserMode = isCI ? "headless" : "headed";
console.log("Launching browser in:", browserMode, "mode");

let responseTime = 850;  // ms
let sla = 1000;          // ms
let slaStatus = responseTime <= sla ? "Within SLA ✅" : "SLA breached ❌";
console.log(`Response: ${responseTime}ms — ${slaStatus}`);


// Template Literal
console.log(`What is the SLA time ? - ${sla}`);

let condition = true;
let isSKMale = condition ? true : false;
console.log(isSKMale);
console.log(`Value is , ${isSKMale}`);

