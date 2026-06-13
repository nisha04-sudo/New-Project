//Arthematic
var a = 10;
var b = 20;
console.log(a+b);//add
console.log(a-b);//sub
console.log(a*b);//multiplication
console.log(a/b);//div
console.log(a%b);//mod
console.log(a**b);//exp

console.log("Assignment operator");
var c = 30;
console.log(c+=10);
console.log(c-=10);
console.log(c*=10);
console.log(c/=10);
console.log(c%=10);
console.log(c**=10);

//comparsion operators
console.log("comparsion operators");
console.log(a==b);
console.log(a!=b);
console.log(a>b);
console.log(a<b);
console.log(a>=b);
console.log(a<=b);

//logical operators
console.log("logical operators");
console.log(a>0 && b>0); 
console.log(a>0 && b<0); 
console.log(a<0||b<0);
console.log(!(a>0));

//unary operators
console.log("unary operators");
console.log(c++);
console.log(c--);
console.log(--c);
console.log(++c);

//ternary operators 
console.log("ternary operators");
var result = (a > b) ? "a is graeter" : "b is greater"
console.log(result); // o/p -b is grater