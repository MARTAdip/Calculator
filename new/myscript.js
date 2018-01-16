// variable for operators
// input 1 input 2
// upon a click there is a condition, 
// change the background color of the button when clicks on it  display.innerHTML = 
// doMath
// clear HTML empty string

let inputOne = "";
let inputTwo = "";
let operator = "";


let inputLabel = document.getElementById("inputLabel");
let container = document.getElementById("container");

let doAddButton = document.getElementById("doAddButton");
let doSubstrButton = document.getElementById("doSubstrButton");
let doMultiplyButton = document.getElementById("doMultiplyButton");
let doDivisionButton = document.getElementById("doDivisionButton");
let doReset = document.getElementById("doReset");
let submit = document.getElementById("submit");
let num7 = document.getElementById("num7");
let num8 = document.getElementById("num8");
let num9 = document.getElementById("num9");
let num6 = document.getElementById("num6");
let num5 = document.getElementById("num5");
let num4 = document.getElementById("num4");
let num3 = document.getElementById("num3");
let num2 = document.getElementById("num2");
let num1 = document.getElementById("num1");
let num0 = document.getElementById("num0");
let buttonClicked = null;


doAddButton.addEventListener("click", add );
doSubstrButton.addEventListener("click", sub);
doMultiplyButton.addEventListener("click", multiply);
doDivisionButton.addEventListener("click", divide);
submit.addEventListener("click", doMath);
container.addEventListener("click", function(e) {
    console.log(e.target)
});

doReset.addEventListener("click", reset);
num7.addEventListener("click", addSeven);
num8.addEventListener("click", addEight);
num9.addEventListener("click", addNine);
num6.addEventListener("click", addSix);
num5.addEventListener("click", addFive);
num4.addEventListener("click", addFour);
num3.addEventListener("click", addThree);
num2.addEventListener("click", addTwo);
num1.addEventListener("click", addOne);
num0.addEventListener("click", addZero);


  
function add() {
    operator = "+";
    inputLabel.innerHTML += operator; 
}

function sub(){
    operator = "-";
    inputLabel.innerHTML += operator;
    console.log(operator)
    
}

function multiply(){
    operator = "*";
    inputLabel.innerHTML += operator;
    console.log(operator)
    
}

function divide(){
    operator = "/";
    inputLabel.innerHTML += operator;
    
    console.log(operator)
}

function reset(){
    inputLabel.innerHTML = "";
     
}

function doMath(){
    if (operator === "+") {
         inputLabel.innerHTML = parseInt(inputOne) + parseInt(inputTwo);
    } else if (operator === "-") { 
        inputLabel.innerHTML = parseInt(inputOne) - parseInt(inputTwo);
    } else if (operator === "*") {
        inputLabel.innerHTML = parseInt(inputOne) * parseInt(inputTwo);
    } else if (operator === "/") {
        inputLabel.innerHTML = parseInt(inputOne) / parseInt(inputTwo);
    }     
  };
  
  

function addSeven(){
      if (operator === "") {
        inputOne += "7";
        inputLabel.innerHTML += "7";
      } else  {
          inputTwo += "7";  
          inputLabel.innerHTML += "7";
      } 
}


function addEight(){
    if (operator === "") {
      inputOne += "8";
      inputLabel.innerHTML += "8";
    } else  {
        inputTwo += "8";
        inputLabel.innerHTML += "8";
          
    }
    
}

function addNine(){
    if (operator === "") {
      inputOne += "9";
      inputLabel.innerHTML += "9";
    } else  {
        inputTwo += "9";
        inputLabel.innerHTML += "9";
          
    }
    
}

function addSix(){
    if (operator === ""){
        inputOne += "6";
        inputLabel.innerHTML += "6";
    } else {
        inputTwo += "6";
        inputLabel.innerHTML += "6";
    }
    
}

function addFive(){
    if (operator === "") {
        inputOne += "5";
        inputLabel.innerHTML += "5";
    } else {
        inputTwo += "5";
        inputLabel.innerHTML += "5";
    }
}

function addFour(){
    if (operator === "") {
        inputOne += "4";
        inputLabel.innerHTML += "4";
    } else {
        inputTwo += "4";
        inputLabel.innerHTML += "4";
    }
}

function addThree(){
    if (operator === "") {
        inputOne += "3";
        inputLabel.innerHTML += "3";
    } else {
        inputTwo += "3";
        inputLabel.innerHTML += "3";
    }
}

function addTwo(){
    if (operator === "") {
        inputOne += "2";
        inputLabel.innerHTML += "2";
    } else {
        inputTwo += "2";
        inputLabel.innerHTML += "2";
    }
}
function addOne(){
    if (operator === "") {
        inputOne += "1";
        inputLabel.innerHTML += "1";
    } else {
        inputTwo += "1";
        inputLabel.innerHTML += "1";
    }
}
function addZero(){
    if (operator === "") {
        inputOne += "0";
        inputLabel.innerHTML += "0";
    } else {
        inputTwo += "0";
        inputLabel.innerHTML += "0";
    }
}

function highlight(button){
    if (buttonClicked != null){
        buttonClicked.style.background = "yellow";
        buttonClicked.style.color = "black";
    }
    buttonClicked = button;
    buttonClicked.style.background = "green";
    buttonClicked.style.color = "white";
    
} 

