let a1 = {
    name : "Madhu"
};

let a = { status: "Pass"};
console.log(a.status);
console.log(a["status"]);

//Keys are case sensitive
let A = {status : "Pass", Status : "Fail"};
console.log( A ["status"]);
console.log(A["Status"])