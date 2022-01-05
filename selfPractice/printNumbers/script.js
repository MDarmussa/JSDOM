
let n1 = document.getElementById('n1');
let n2 = document.getElementById('n2');
let submitButton = document.getElementById('submit');
let result = document.getElementById('result');
// console.log(parseInt(n1.value))
// console.log(n2.value)
//parseInt ---> convert from strings to integers
let holder = [];
function printNumbers (num1, num2) {
     for(i = num1; i <= num2; i++) {
          holder.push(i);
          // console.log(holder, "14");
     }
     return holder;
}

submitButton.addEventListener('click', (e) => {
     e.preventDefault();
     let num1 = parseInt(n1.value);
     let num2 = parseInt(n2.value);
     printNumbers(num1, num2)
     //-------- 
     // console.log(holder)
     // holder.map((num) => {
     //      result.innerHTML += num;
     // });
     //---------
     result.innerHTML = 
     `<ul>
     ${holder.map(num => `<li style="list-style: none">${num}</li>`).join("")}
     </ul>`;
     
})



//-----------------------
// // print a - b

// function printNumber (a, b) {
//      let holder = ""
//      for(i = a; i <= b; i++) {
//           holder += i;
//      }
//      return holder;
// }
// console.log(printNumber(1, 5))

// // const Form = document.getElementById('form');
// // const Button = document.getElementById('button');
// // const num1 = document.getElementById('n1');
// // const num2 = document.getElementById('n2');
// // const demo = document.getElementById('demo')



// // document.addEventListener('Button', function (event) {
// //      event.preventDefault();
// //      const num1 = document.getElementById('n1');
// //      const num2 = document.getElementById('n2');
// //      function createTable () {
// //           let num1 = document.getElementById('#n1').value;
// //           let num2 = document.getElementById('#n2').value;

// //           for(let i = num1; i <= num2; i++) {
// //                countHolder += i;
// //                document.getElementById('demo').innerHTML = countHolder
// //                Button.appendChild(countHolder)
// //           }
// //           return countHolder;

         

// //      }
// // })




// // document.querySelector("#button").addEventListener("click", function(event) {
// //      event.preventDefault();

// //      function createTable (a, b) {
// //      let num1 = document.getElementById('#n1').value;
// //      let num2 = document.getElementById('#n2').value;

// //      let countHolder = [];

// //      for(let i = a; i <= b; i++) {
// //           // let result = document.getElementById('table').insertRow(i);
// //           countHolder += i;

// //      }
// //      return countHolder;
// // }
// // console.log(createTable());
// // });

