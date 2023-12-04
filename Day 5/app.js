// When to use classes, destructing , spread rest operator wrt e-commerce ? && closure, scope , 
// hoisting  how will I use those concepts in the project? && Callbacks and its usage 
// wrt e-com && any common issues you can think of for the above?? 

// CART // REVIEW LIKES // WISHLIST 

// CLASSESS ==> Classification 

// Property, functions

class Product {
    title;
    style;
    price;
    like;
    id;
    colors = []

    getProduct() {
        return this;
    }
}

var classisJHacket = new Product();
jacket.title = 'Classis Burent Congnac'

var classisJHacket1 = new Product();
jacket.title = 'Classis Burent Congna1c'



class Message {
    constructor(user, text, timestamp) {
      this.user = user;
      this.text = text;
      this.timestamp = timestamp || new Date();
    }
  
    display() {
      console.log(`${this.timestamp.toLocaleString()} - ${this.user}: ${this.text}`);
    }
}

class ChatRoom {
    constructor() {
        this.messages = [];
    }

    addMessage(user, text) {
        const message = new Message(user, text);
        this.messages.push(message);
    }

    broadcast(message) {
        message.display();
    }

    displayChatHistory() {
        this.messages.forEach(message => message.display())
    }
}

const chatRoom = new ChatRoom();

chatRoom.addMessage('User1', 'Hello, everone')
chatRoom.addMessage('User2', 'Hi, there')
chatRoom.addMessage('User1', 'How are you doing?')

chatRoom.displayChatHistory();

//Destructuring

const num = [1, 2, 3, 4];
// const first = num[0];
// const second = num[1];
// const fourth = num[3];

const [first, second, ,fourth] = num;

let a = 1;
let b = 2;

// let temp = a;
// a = b;
// b = temp;

[a, b] = [b, a];

const person = { name: 'John', age: 30, city: 'New York' };

//const { name, age } = person;

const { name: personName, age: personAge, country = 'INDIA' } = person;

function getUser({name, age}) {
  console.log( name, age)
}

getUser(person)

const colors = ['red', 'green', 'blue', 'yellow'];

function getColor(...colors) {

}

const [first1, second2, ...restColors]  = colors;

const person1 = {
    name: 'John',
    age: 30,
    address: {
      city: 'New York',
      zip: '10001'
    },
    hobbies: ['reading', 'traveling']
};


const {name, address: {city, zip}, ...rest} = person1;

const data = [1, [2, 3], 4, [5, 6]];

const [first, , , [a, b]]= data;
