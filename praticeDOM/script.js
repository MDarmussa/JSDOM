
const div1 = document.getElementById('demo');
let button1 = document.createElement('button')
// let button2 = document.createElement('button')
let header = document.getElementsByClassName('head1')

button1.textContent = 'Click Me'
div1.appendChild(button1)

document.getElementById('demo').innerHTML = randomNums(1, 10)

// let randomNums = (0, 10);
button1.addEventListener('click', function(randomNums(min, max)) {
     
     return Math.floor(Math.random() * (max - min)) + min;
     
     
})
