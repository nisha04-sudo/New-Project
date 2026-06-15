//an new version of js
//let const
let name = "John";
const pi = 3.14;
console.log(name);
console.log(pi);

//template literals
 //backticks for template literals
 //${} for variable interpolation
 //use curly to call functions or expressions inside template literals
let age = 30;
console.log(`My name is ${name} and I am ${age} years old.`);

//objects
// equal,colon,comma in dictionary  
const car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    //}console.log(car.make); --- IGNORE ---
getCarInfo() {
        return `${this.year} ${this.make} ${this.model}`;
    }
};
console.log(car.getCarInfo());


//destructuring 
//splits an object into individual variables
const person = { firstName: "Jane", lastName: "Doe" };
//use same variable name (const)
const { firstName, lastName } = person;
console.log(firstName);
console.log(lastName);


//arrow functions
const add = (a, b) => a + b;
console.log(add(5, 3));

//array
const students = ["Alice", "Bob", "Charlie"];
console.log(students[0]);

//spread operator
//to update an list or array without mutating the original and cpy the original array and add new element to it
//use different variable to store the updated array*
const updatedStudents = [...students, "David"];
console.log(updatedStudents);   

//rest operator
//to collect multiple elements in array into a single variable
//check the maximum marks from a list of marks*
function maximum(...marks) {
let max = Math.max(...marks);
return max;
}
console.log(maximum(85, 92, 78, 90));

    
//classes
class Person {
constructor(name, age) {
this.name = name;
this.age = age;
}
greet() {
console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
}
}
const person1 = new Person("Alice", 25);
person1.greet();    