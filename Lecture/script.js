console.log('Hello DOM!')

// console.log(document);

let elementH1 = document.getElementById("heading");

let elementsLI = document.getElementsByClassName("item");

let elementH2 = document.createElement("h2");

elementH2.textContent = "This is an h2 tag we made";

console.log(elementH2);

let containerDIV = document.getElementById("container");

containerDIV.appendChild(elementH2);

// elementH1.style.color = "#0000FF" // or blue

// console.log(elementH2);

let myButtom = document.getElementById("clickme");

myButtom.addEventListener("click", () => {
     alert("The Buttom was clicked");
     elementH1.style.color = "#FF0000"
     elementH2.style.color = "#0000FF"
})
