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
// let a = 5;
// let b = 10;

// console.log("a+b = ", a + b);
// try{
// console.log("a+b = ", a + c);
// }catch  (err){
//     console.log(err);
// }


//async
//setTimeout concept
// console.log("one");
// console.log("two");

// setTimeout(() => {
//     console.log("hello");
// }, 2000);

// console.log("3");
// console.log("4");

//callback
// function sum(a, b){
//     console.log(a + b);
// }

// function calculator(a, b, sumCallback){
//     sumCallback(a, b);
// }

// calculator(1, 2, sum);

//callback hell
// function getData(dataId, getNextData){
//     setTimeout(() => {
//         console.log("data", dataId);
//         getNextData();
//     }, 2000);
// }

// getData(1, () =>{
//     console.log("getting data 1");
//     getData(2, () => {
//         console.log("getting data 2");
//         getData(3);
//     });
// });


//promises
// const getPromise = () =>{
//     new Promise((resolve, reject) => {
//         console.log("promise");
//         // resolve("success");
//         reject("error");
//     });
// };

// let promise = getPromise();
// promise.then((res) => {
//     console.log("promise fulfilled", res);
// });

// promise.catch((err) => {
//     console.log("rejected", err);
// });


// function asyncFunc(){
//     return new Promise((resolve, reject) =>{
//         setTimeout(() =>{
//             console.log("some data1");
//             resolve("success");
//         }, 2000);
//     });
// }

// function asyncFunc2(){
//     return new Promise((resolve, reject) =>{
//         setTimeout(() =>{
//             console.log("some data1");
//             resolve("success");
//         }, 2000);
//     });
// }

// console.log("fetching data1");
// let p1 = asyncFunc();
// p1.then((res) => {
//     console.log("fetching data2");
//     let p2 = asyncFunc2();
//     p2.then((res) => {});
//     // console.log(res);
// });

//promise chaining
// console.log("fetching data1");
// asyncFunc().then((res) => {
//     console.log("fetching data2");
//     asyncFunc2().then((res) => {});
//     // console.log(res);
// });

// function getData(dataId, getNextData){
//     return new Promise((resolve, reject) =>{
//         setTimeout(() => {
//              console.log("data", dataId);
//              resolve("success");
//          }, 2000);
//     });
// }

// //promise chain
// getData(1)
// .then((res) =>{
//     return getData(2);
// })
// .then((res) =>{
//     return getData(3);
// })
// .then((res) =>{
//     console.log(res);
// });

//async await 
// function api(){
//     return new Promise((resolve, reject) =>{
//         setTimeout(() => {
//         console.log("weather data");
//         resolve(200);
//     }, 2000);
//     });
// }

// async function getWeatherData() {
//     await api();
//     await api();
// }

function getData(dataId, getNextData){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
             console.log("data", dataId);
             resolve("success");
         }, 2000);
    });
}

async function getAllData() {
    console.log("getting data1");
    await getData(1);
    console.log("getting data2");
    await getData(2);
    console.log("getting data3");
    await getData(3);
    console.log("getting data4");
    await getData(4);
}