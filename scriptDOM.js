// let heading = document.getElementById("heading1");
// console.dir(heading);

// let headings = document.getElementsByClassName("heading2");
// console.dir(headings);
// console.log(headings);

// let parahs = document.getElementsByTagName("p");
// console.dir(parahs);

// let elements = document.querySelector("p");
// console.dir(elements);

// let elementAll = document.querySelectorAll(".heading2");
// console.dir(elementAll);

// let div = document.querySelector("div");

// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);

// h2.innerText = h2.innerText + " asdfghj";

// let divs = document.querySelectorAll(".box");
// let idx = 1;
// for ( div of divs){
//     div.innerText = `value ${idx}`;
//     idx++;
// }

// divs[0].innerText = "value 1";
// divs[1].innerText = "value 2";
// divs[2].innerText = "value 3";


// let div = document.querySelector("div");
// console.log(div);

// let id = div.getAttribute("id");
// console.log(id);

// let name = div.getAttribute("name");
// console.log(name);

// div.style.fontSize = "28px";

// let newBtn = document.createElement("button");
// newBtn.innerText = "click me";
// console.log(newBtn);

// let div = document.querySelector("div");
// div.append(newBtn);

// let para = document.querySelector("p");
// para.remove(); 

//[practice]

// let newBtn = document.createElement("button");
// newBtn.innerText = "click";

// newBtn.style.color = "white";
// newBtn.style.backgroundColor = "red";

// document.querySelector("body").prepend(newBtn);

// let p = document.querySelector("p");


//Events

let btn1 = document.querySelector("#btn1");

// btn1.onclick = () =>{
//     console.log("btn1 clicked");
//     let a = 25;
//     a++;
//     console.log(a);
// };

// let div = document.querySelector("div");
// div.onmouseover= () =>{
//     console.log("inside div");
// };

// let btn2 = document.querySelector("#btn2");
// btn2.addEventListener("click", () =>{
// console.log("btn clicked");

// });

// const handler1 = () =>{
//     console.log("btn clicked - handler1");
// };

// btn2.addEventListener("click", handler1);

// btn2.removeEventListener("click", handler1);

//practice light dartk toggle
let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode = "light";

modeBtn.addEventListener("click", () =>{
    if(currMode === "light"){
        currMode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }else{
        currMode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }

    console.log(currMode);
});
