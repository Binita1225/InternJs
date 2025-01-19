//prototype and objects
// const student = {
//     fullName: "binita sapkota",
//     marks: 45,
//     printMarks: function () {
//         console.log("marks =", this.marks)
//     },

// };

// const employee = {
//     calcTax(){
//         console.log("tax rate is 10%");
//     },
// };

// const Abc = { 
//     salary: 50000,
// };

// const Abc2 = {
//     salary: 50000,
//     calcTax(){
//         console.log("tax rate is 20%");
//     },
// };

// Abc.__proto__ = employee;
// Abc2.__proto__ = employee;

//classes
// class ToyotaCar{
//     constructor (brand, mileage){
//         console.log("creating new object");
//         this.brand = brand;
//         this.mileage = mileage;
//     }
//     start(){
//        console.log("start"); 
//     }

//     stop(){
//         console.log("stop");
//     }

//     setBrand(brand){
//         this.brand = brand;
//     }
// }

// let fortuner = new ToyotaCar("fortuner", 10);  
// // fortuner.setBrand("fortuner");

//inheritance
// class Parent{
//     hello(){
//         console.log("hello");

//     }
// }

// class Child extends Parent{

// }

// let obj = new Child();

// class Person{
//     constructor(){
//         this.species = "homo sapiens";
//     }
//     eat(){
//         console.log("eat");
    
//     }

//     // sleep(){
//     //     console.log("sleep");
//     // }

//     // work(){
//     //     console.log("work");
//     // }
// }

// class Engineer extends Person {
//     constructor(branch){
//         super(); //to invoke  parent class constructor
//         this.branch = branch;
//     }
//     work(){
//         console.log("solve problems");
//     }
// }

// let obj = new Engineer("adssf");

//practice
// let DATA = "secret info";

// class User{
//     constructor(name, email){
//         this.name = name;
//         this.email = email;
//     }

//     viewData(){
//         console.log("data = ", DATA);
//     }
// }

// class Admin extends User{
//     constructor(name, email){
//         super(name, email);
//     }
//     editData(){
//         DATA = "some new value";
//     }
// }

// let stu1 = new User("abc", "abc@gmail.com");
// let stu2 = new User("xyz", "xyz@gmail.com");

// let teacher1 = new User("abc", "abc@gmail.com");

// let admin1 = new Admin("admin", "abc@gmail.com");


//error handling
let a = 5;
let b = 10;

console.log("a+b = ", a + b);
try{
console.log("a+b = ", a + c);
}catch  (err){
    console.log(err);
}