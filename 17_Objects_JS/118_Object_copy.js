let a = { status: "Pass"};
let b = a;

b.status= "fail";
console.log(a.status);
