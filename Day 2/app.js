const txtUserName = document.getElementById('txtUserName');
const txtPassword = document.getElementById('txtPassword');
const info = document.getElementById('info');
const button = document.querySelector('button');

// submit button click event
button.addEventListener('click', () => {
    // checking input box empty 
   if(!txtUserName.value.trim() || !txtPassword.value.trim()) {
    info.innerText = 'Pleae enter Username and password.'
    info.style.color = 'red';
    // button.disabled = true;
   } else {
    // scuccess case
    info.style.color = 'green';
    info.innerText = 'You Successfully logged in.'
   }
});


var myVar;
myVar = 5;
var myNum;
myNum = myVar;

var a;
var b;
var c;

a = a + 1;
b = b + 5;
c = c + " String!";




let a = 3;
let b = 17;
let c = 12;


a = a + 12;
b = 9 + b;
c = c + 7;