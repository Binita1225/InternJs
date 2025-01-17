//Arithmetic operator
// let a = 5;
// let b = 2;

// console.log("a+b = ", a+b);
// console.log("a-b = ", a-b);
// console.log("a*b = ", a*b);
// console.log("a/b = ", a/b);
// console.log("a % b = ", a % b); //modulus
// console.log("a ** b = ", a ** b); //exponential 5^2

//Unary operator

// let a = 5;
// let b = 2;

// // a = a + 1;
// // a++;
// a--;
// console.log("a = ",a);

//Assignment operator
// let a = 5;
// let b = 2;

// a += 4; //a = a + 4
// console.log("a = ", a);

//Comparison operator

// let a = 5;
// let b = 2;

// console.log("5 == 2", a == b); 
// console.log("5 > 2", a > b); 

//Logical Operators
// let a = 6;
// let b = 5;

// let cond1 = a > b; //true
// let cond2 = a === 6;
// console.log("cond1 && cond2", cond1 && cond2);


//conditional statements

//if statement
// let age = 16;
// let mode = "dark";
// let color;

// if (mode === "dark"){
//     color = "black";
// }

// if (mode === "light"){
//     color = "white";
// }
// console.log(color);


// if(age >= 18){
//     console.log("can vote");
// }

// if(age < 18){
//     console.log("cannot vote");
// }

//if else

// let age = 16;
// if(age >= 18){
//         console.log("can vote");
//     } else{
//         console.log("cannot vote");
//     }

//else if
// let age = 16;
// if(age < 18){
//         console.log("junior");
//     } else if (age > 60){
//         console.log("senior");
//     } else{
//         console.log("middle");
//     }

//ternary operator
// let age = 16;

// let result = age >= 18 ? "adult" : "not adult";

// console.log(result);

// let name = prompt("hello");
// console.log(name);

//get user to input a number using prompt("Enter number"). Check if number is a multiple of 5 or not.
//  let num = prompt("Enter number");

//  if (num % 5 === 0) {
//     console.log(num, "is multiple of 5");
//  } else{
//     console.log(num , "is not multiple");
//  } 

//grade to students
 //let score = 76;
 
//  let score = prompt("Enter score");
//  let grade;

//  if (score >= 90 && score <= 100){
//     grade = "A";
    
//  } else if (score >= 70 && score <= 89){
//     grade = "B";
//  } else{
//     grade = "c";
//  }

//  console.log("Grade: ",grade);


// Loops
//for loop
// for( let count = 1; count <= 5; count++){
//     console.log("abc");
// }

//calculate sum of 1 to 5
// let sum = 0;
// for (let i = 1; i <= 5; i++){
//     sum = sum + i;
// }
// console.log("sum = s",sum);
// console.log("loop has ended");

//while loop
// let i = 1;
// while(i<5){
//     console.log("abc");
//     i++;
// }

//do-while loop
// let i = 1;
// do{
//     console.log("i=",i);
//     i++;
// } while(i <=5);

//for-of loop
// let str = "abc";
// let size = 0;
// for(let i of str){
//     //iterator -> characters
//     console.log("i= ",i);
//     size++;
// }
// console.log("size = ",size);

//for-in loop

// let student = {
//     name: "Binita",
//     age: 23,
//     isPass: true
// };

// for (let key in student){
// console.log("Key=",key, " value=", student[key]);
// }

//strings
// let str = "abc";

// console.log(str[1]);


// let obj = {
//     item: "pen",
//     price: 10,
// };

// let output =`the cost of ${obj.item} is ${obj.price} rupees`;
// console.log(output);

// console.log("the cost of", obj.item, " is", obj.price, "rupees");

//template literals
// let specialString = `this is template literals`;
// console.log(typeof specialString);

//   console.log("abc \n cde");

// let str = "0123456";
// let newStr = str.toUpperCase();
// console.log(newStr);
// console.log(str.trim());
// console.log(str.slice(1,4));

// let str1 = "aaa";
// let str2 = "bbb";
// let res = str2.concat(str1);
// console.log(res);

// let str = "hello"; 
// // console.log(str.replace("h","y"));
// str = str.replace("l","a");
// // console.log(str.charAt(3));
// console.log(str);

// prompt for full name 
// let fullName = prompt("Enter name");
// let output = "@" + fullName+ fullName.length;
// console.log("@",fullName,fullName.length);
// console.log(`@${fullName}${fullName.length}`);
// console.log(output);


//Arrays

//   let marks = [45, 67, 45,98];
//   console.log(marks);

//  let heros = ["ironman", "abc", "cde", "erf", "ffgf"];
// //  //for loop
// //  for (let i = 0; i < heros.length; i++){
// //     console.log(heros[i]);
// //  }

//  //for of
//  for(let hero of heros){
//     console.log(hero.toUpperCase());
//  }

 //array average marks
//  let marks = [85, 97, 44, 37, 76, 60];
//  let sum = 0;
//  for(let val of marks)
// {
//     sum += val;
// }
// let avg = sum / marks.length;
// console.log(`avg marks = ${avg}`);

//price with discount
// let items = [250, 645, 300, 900, 50];
// let i = 0;
// for(let val of items){
//     console.log(`val at index ${i} = ${val}`);
//     let offer = val / 10;
//     items[i] = items[i] - offer;
//     console.log(`value after offer = ${items[i]}`);
//     i++;
// }
 
// for (let i = 0; i < items.length; i++ ){
//     let offer = items[i] / 10;
//     items[i] -= offer;
// }
// console.log(items);

// let foods = ["apple", "orange"];
// foods.push("bbb", "ccc");
// let deletedItems = foods.pop();

// console.log(foods);
// console.log("deleted", deletedItems);

// console.log(foods.toString());

// let marvel_heros = ["thor", "sp", "aa", "nmm"];
// let dcHeros = ["sm", "bm"];
//  let hero = marvel_heros.concat(dcHeros);
//  console.log(hero);

// marvel_heros.unshift("am");
// let val = marvel_heros.shift();
// console.log("deleted", val);
// console.log(marvel_heros);
// console.log(marvel_heros.slice(1,3));

// let arr = [1, 2, 3, 4, 5, 6];
// arr.splice(2, 2 , 101, 102);

 
// //practice
// let companies = ["Bloomberg", "Microsoft", "ibm", "uber", "google"];
// // companies.splice(2,1, "ola");
// companies.push("amazon");


//fuinctions
// function myFunction(){
//      console.log("welcome");
//      console.log("js");
// }
// myFunction();

// function myFunction(msg, n){
//    //parameter -> input
//     console.log(msg * n);
// }
// myFunction("js", 100);

//functions -> 2 numbers, sum

// function sum(x, y){
//     s = x + y;
//     return s;
// }

// let val = sum(3,4);
// console.log(val);

//sum function
