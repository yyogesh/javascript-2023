// When to use classes, destructing , spread rest operator wrt e-commerce ? && closure, scope , 
// hoisting  how will I use those concepts in the project? && Callbacks and its usage 
// wrt e-com && any common issues you can think of for the above?? 

// Event Handling - types , deep dive , wrt e-commerce , Common mistakes dev’s make ? // bubbling // prevent 

// jQuery, Selectors and Manipulation, Ajax and Asynchronous Operations ||
//  Tips and tricks in DATA handling if any ( from API) ? any common issues you can think of for the above?

// HUMNA // ANGULAR // 14 // NGRX // .NET 

// 3 JOB 

// CHASE // employer // left 

// DELTA // 

// UPRR // working visa 

// OOPS 

function outerFunction() {
    // Outer function scope
    let outerVariable = 'I am from the outer function';

    function innerFunction() {
        // Inner function scope
        console.log(outerVariable); // Accessing outerVariable from the outer scope
    }

    return innerFunction;
}

const closureFunction = outerFunction();

closureFunction();

(() => {
    let count1 = 1;
    document.querySelector('button').addEventListener('click', () => {
        alert(++count1);
    })
})()


console.log(x); // Output: undefined
var x = 5;
console.log(x); // Output: 5

sayHello(); // Output: Hello, there!
function sayHello() {
  console.log('Hello, there!');
}

function a(callback) {
    setTimeout(() => {
        console.log('a');
        callback();
    }, 2000)
}

function b() {
    console.log('b')
}

function getUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 1000);
    })
} // delegate // Lamda 

const callbackSuccess = (response) => {

}

const callbackError = (error) => {
}

getUser().then(callbackSuccess, callbackError);

function sum(num1) {
  return (num2) => {
    return num1 + num2;
  }
}

const sum = (num1) => (num2) => num1 + num2;
