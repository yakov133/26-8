// // tarrgil 1
// window.setTimeout(() => {
//   document.body.innerHTML += `<p>LOADED 1</p>`;
// }, 1000);

// // tarrgil 2
// setTimeout(() => {
//   document.body.innerHTML += `<p>LOADED 2</p>`;
// }, 2000);

// // tarrgil 3
// setTimeout(() => {
//   document.body.innerHTML += `<p>blablabla</p>`;
// }, 2000);

// // tarrgil 4
// for (let i = 1; i <= 10; i++) {
//   if (i <= 3) {
//     document.body.innerHTML += `<p id="para${i}" >${i}</p>`;
//   } else {
//     document.body.innerHTML += `<p >${i}</p>`;
//   }
// }
// //A
// setTimeout(() => {
//   for (let i = 1; i <= 3; i++) {
//     p = document.getElementById(`para${i}`);
//     p.classList.add("color");
//   }
// }, 1000);
// //B
// window.setTimeout(() => {
//   var x = document.getElementsByTagName("P");
//   var i;
//   for (i = 0; i < x.length; i++) {
//     if (x[i].innerText <= 10) {
//       x[i].classList.add("border");
//     }
//   }
// }, 2000);
// //C
// setTimeout(() => {
//   for (let i = 1; i <= 3; i++) {
//     p = document.getElementById(`para${i}`);
//     p.parentNode.removeChild(p);
//   }
// }, 3000);

// //targil 5
// document.body.innerHTML += `<button id = "btn" onclick="print()">click me</button>`;
// btn = document.getElementById("btn");
// btn.addEventListener("click", print);
// function print() {
//   setTimeout(() => {
//     alert("clicked");
//   }, 1000);
// }

// //targil 6
// document.body.innerHTML += `<br><br>
// <input id = "num" type="number" onblur="printNum(event)" >
// <br>
// <p5 id="numPrint5"></p5>
// <br>
// <p10 id="numPrint10"></p10>`;

// let num = document.getElementById("num");
// function printNum(event){
//     document.getElementById("numPrint5").innerText = `the number multipide by 5 = ${event.target.value * 5}`;
//     document.getElementById("numPrint10").innerText = `the number multipide by 10 = ${event.target.value * 10}`;
// }

// //targil 7
// div7 = document.getElementById("div7");
// btn7 = document.getElementById("btn7");
// btn7.addEventListener("click",()=>{
//     div7.style.width = parseInt(div7.style.width) - 10 + "px";
//     div7.style.height = parseInt(div7.style.height) - 10 + "px";
//     div7.style.marginTop = parseInt(div7.style.marginTop) + 50 + "px"
//     div7.style.marginLeft = parseInt(div7.style.marginLeft) + 50 + "px"
// })

// //targil 8
// div8 = document.getElementById("div8");
// let btn8 = document.getElementById("btn8");
// btn8.addEventListener("click",()=>{
//     clearInterval(stopToMove);
// });
// let stopToMove = setInterval(() => {
//     let Left = Math.floor(Math.random() * (screen.width-200));
//     // let Right = Math.floor(Math.random() * (screen.width-100));
//     let Top = Math.floor(Math.random() * (screen.height-200));
//     // let Bottom = Math.floor(Math.random() * (screen.width-100));
//     div8.style.marginLeft = Left + "px";
//     div8.style.marginTop = Top + "px";
// }, 1000);


let ciil = true;
function startAnimation() { 
    var frames = document.getElementById("animation").children;
    var frameCount = frames.length;
    var i = 0;
    value = 70
    setInterval(function () { 
      frames[i % frameCount].style.display = "none";
      frames[++i % frameCount].style.display = "block";
      if(ciil){
          document.getElementById("animation").style.marginLeft =value + "px";
          value += 70;
          console.log(document.getElementById("animation").style.marginLeft);
          if(parseInt(document.getElementById("animation").style.marginLeft) > window.screen.availWidth){
              ciil = false;
          }
        }else{
            document.getElementById("animation").style.marginLeft =value + "px";
            value -= 70;
            if(parseInt(document.getElementById("animation").style.marginLeft) <= 0){
                ciil = true
            }
        }
  }, 300);
  }


//targil 9
let arrOfStats = [
    {
        name:"United States",
        src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/300px-Flag_of_the_United_States.svg.png",
    },
    {
        name:"Italy",
        src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/300px-Flag_of_Italy.svg.png",
    },
    {
        name:"Brazil",
        src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/300px-Flag_of_Brazil.svg.png",
    },
    {
        name:"Chnia",
        src:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/300px-Flag_of_the_People%27s_Republic_of_China.svg.png",
    },
    {
        name:"Israel",
        src:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_Israel.svg/300px-Flag_of_Israel.svg.png",
    },
    {
        name:"Switzerland",
        src:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Switzerland.svg/200px-Flag_of_Switzerland.svg.png",
    },
    {
        name:"Canada",
        src:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Canada.svg/300px-Flag_of_Canada.svg.png",
    },
]
let COUNTER = 0;

// let targil9 = setInterval(() => {
//     document.write = ""
//     COUNTER  = 0;
//     let stringToBePrint = `
//     <p id="counterPointer"> COUNTER = ${COUNTER}</p>
//     <p id="x&y"></p>`;
//     for(let i = 0; i < arrOfStats.length; i++){
//         [num1,num2] = [Math.floor(Math.random()* 101),Math.floor(Math.random()* 101)]
//         stringToBePrint += `
//         <img onclick="info(event,p${i})" id="p${i}" src=${arrOfStats[i].src} alt=${arrOfStats[i].name} style = margin-left:${num1}vh; margin-top :${num2}vh; width="200px"; height="300px";>
//         `
//     }
//     document.body.innerHTML = stringToBePrint;
// }, 3000);

function info(event,p){
    let poosition = document.getElementById("x&y");
    poosition.style.backgroundColor = "aqua";
    poosition.style.textAlign = "center";
    poosition.style.fontSize = "40px";    
    poosition.innerText = `x: ${event.x}, y: ${event.y}`;
    para = document.getElementById(`${p.id}`);
    console.log(para.style);
    para.parentNode.removeChild(para);
    let tempP = document.getElementById("counterPointer");
    tempP.innerText = `COUNTER = ${++COUNTER}`
    clearInterval(targil9)
}


//targil 10
inputEx10 = document.createElement("input");
inputEx10.setAttribute("id", "targil10");
inputEx10.setAttribute("type", "text");
document.body.appendChild(inputEx10);
let p = document.createElement("p");

btn = document.createElement("button");
btn.setAttribute("id", "btn");
btn.innerText=`Change Color`
document.body.appendChild(btn);
document.body.appendChild(p);

let arr = ["red","blue","yellow"], colorIndex = 0;
btn.addEventListener("click",()=>{
    if(colorIndex < arr.length){
        btn.style.backgroundColor = arr[colorIndex++];
    }
    p.innerText = `${inputEx10.value} random number: ${Math.floor( Math.random() * 101 + 1)}`
})



//form exracies

// form = document.getElementById("form");
// let p1 = document.getElementById("password1");
// let p2 = document.getElementById("password2");

// let div = document.createElement("div")
// div.setAttribute("id", "div1");
// document.body.appendChild(div)
// div1 = document.getElementById("div1");

// form.addEventListener("submit",(e)=>{
//     e.preventDefault();
//     stam()
// })
// function stam(){
//     if(p1.value == p2.value){
//         div1.innerHTML += `<p>the password are Correct</p>`;
//         let obj = {
//             email:document.getElementById("email").value,
//             password:p1.value
//         }
//         console.log(obj);
//         if(p1.value.length < 8){
//             div1.innerHTML += `<p>the length is less then 8</p>`;
//         }else{
//             div1.innerHTML += `<p>the length is bigger then 8</p>`;
//         }
//     }
//     else{
//         div1.innerHTML += `<p>the password are NOT correct</p>`;
//     }
// }




