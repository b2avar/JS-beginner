// //let, const
//
// //let
// let myAge = 30;
// myAge = 31;
// console.log(myAge);
//
// //const
// const score = 20;
// console.log(score);
//
// //String, Numbers, Boolean, null, undefined
//
// const name = 'Burak'; //string
// const age = 31; //number
// const rating = 4.5; //number
// const isCool = true; //boolean
// const x = null; //null - empty , object
// const y = undefined; //undefined
// let z; //undefined
//
// console.log(typeof z);
//
// //Concatenation
// console.log('My name is ' + name + ' and I am ' + age); //old way
//
// //Template String
// console.log(`My name is ${name} and I am ${age}`); //template string
//
// const hello = `My name is ${name} and I am ${age}`; //template string
// //console.log(hello);
//
// //String Properties and Methods
// const s = 'Hello World!';
// console.log(s.length); //length of string
// console.log(s.toUpperCase()); //uppercase
// console.log(s.toLowerCase()); //lowercase
// console.log(s.substring(0, 5)); //substring
// console.log(s.substring(0, 5).toUpperCase()); //substring and uppercase
// console.log(s.split('')); //split by character
//
// const t = 'technology, computers, it, code'; //split by comma
// console.log(t.split(', ')); //split by character
//
//
// //Arrays - variables that hold multiple values
// const numbers = new Array(1,2,3,4,5); //constructor
// console.log(numbers);
//
// //Fruits Array
// const fruits = ['apples', 'oranges', 'pears', 10, true]; //can hold different types
// console.log(fruits);
// console.log(fruits[1]);
//
// fruits[3] = 'grapes'; //add to index
// console.log(fruits);
//
// fruits.push('mangos'); //add to end
// console.log(fruits);
//
// fruits.unshift('strawberries'); //add to front
// console.log(fruits);
//
// fruits.pop(); //remove last
// console.log(fruits);
//
// console.log(Array.isArray(fruits)); //check if array
//
// console.log(fruits.indexOf('oranges')); //check index
//
// //Object Literals
// const person = {
//     firstName: 'Burak',
//     lastName: 'Avar',
//     age: 31,
//     hobbies: ['music', 'movies', 'sports'],
//     address: {
//         street: '50 main st',
//         city: 'Boston',
//         state: 'MA'
//     }
// }
//
// console.log(person);
// //alert(person);
//
// console.log(person.firstName, person.lastName); //access properties
// console.log(person.hobbies[1]); //access array
// console.log(person.address.city); //access object
//
// const { firstName, lastName, address: { city } } = person; //destructuring
// console.log(firstName);
// console.log(city);
//
// person.email = 'burakavar@gmail.com'; //add property
// console.log(person);
// console.log(Object.entries(person)); //object to array
//
// const todos = [{
//     id: 1,
//     text: 'Take out trash',
//     isCompleted: true
// },
// {
//     id: 2,
//     text: 'Meeting with boss',
//     isCompleted: true
// },
// {
//     id: 3,
//     text: 'Dentist appointment',
//     isCompleted: false
// }];
//
// console.log(todos);
// console.log(todos[1].text); //access array
//
// // const todoJSON = JSON.stringify(todos); //convert to JSON
// // console.log(todoJSON);
//
// // For
// for(let i = 0; i < todos.length; i++) {
//     console.log(todos[i].id);
// }
//
// // For Of
// for(let todo of todos) {
//     console.log(todo.text);
// }
//
//
// // While
// let i = 0;
// while (i < 10) {
//     console.log(`While Loop Number: ${i}`);
//     i++;
// }
//
// // forEach, map, filter
// const todoText = todos.map(function (todo) {
//     return todo.text;
// });
// console.log(todoText);
//
// const todoCompleted = todos.filter(function (todo) {
//     return todo.isCompleted === true;
// }).map(function (todo) {
//     return todo.text;
// });
// console.log(todoCompleted);

// const numbers = [1,2,3,4,5];
//
// const squaredNumber = numbers.map(number => number * number);
// console.log(squaredNumber);
//
// const oddNumbers = numbers.filter(function (number) {
//     return number % 2 !== 0;
// });
// console.log(oddNumbers);

// Conditionals
// const value = 4;
// if (value === 10) {
//     console.log('value is 10');
// } else if (value > 10) {
//     console.log('value is greater than 10');
// } else {
//     console.log('value is less than 10');
// }

// Multiple conditions
// const color = 'red';
// switch(color) {
//     case 'red':
//         console.log('color is red');
//         break;
//     case 'blue':
//         console.log('color is blue');
//         break;
//     default:
//         console.log('color is not red or blue');
//         break;
// }

// Ternary operator
// const a = 10;
// const b = 20;
// const c = a > b ? 'a is greater than b' : 'a is less than or equal to b';
// console.log(c);

// Functions
// function addNums(num1, num2) {
//     return (num1 + num2);
// }
// console.log(addNums(5,5));

// Arrow functions
// const addOtherNums = (num1 = 1, num2 = 1) => {
//     return (num1 + num2);
// }
// console.log(addOtherNums(5,5));
//
// const addOtherNums2 = (num1 = 1, num2 = 1) => (num1 + num2);
// console.log(addOtherNums2(6,6));


// Constructor function
// function Person(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
// }
//
// Person.prototype.getBirdYear = function () {
//     return this.dob.getFullYear();
// }
//
// Person.prototype.getFullName = function () {
//     return `${this.firstName} ${this.lastName}`;
// }

// Instantiate object
// const person1 = new Person('Burak', 'Avar', '05-19-1992');
// console.log(person1.getBirdYear());
// console.log(person1.getFullName());
// console.log(person1);

// Class
// class Person2 {
//     constructor(firstName, lastName, dob) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.dob = new Date(dob);
//     }
//
//     getBirdYear() {
//         return this.dob.getFullYear();
//     }
//
//     getFullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// Instantiate object
// const person2 = new Person2('Burak', 'Avar', '05-19-1992');
// console.log(person2.getBirdYear()); //get year
// console.log(person2.getFullName()); //get full name
// console.log(person2); //get object

// DOM

// Single element
// const form = document.getElementById('my-form');
// const container = document.querySelector('.container');
// console.log(form);
// console.log(container);

// Multiple element
// console.log(document.querySelectorAll('.item'));
// console.log(document.getElementsByClassName('li'));
// const items = document.querySelectorAll('.item');
// items.forEach((item) => console.log(item));
//
// const button = document.querySelectorAll('.btn');

// const ul = document.querySelector('.items');
// ul.firstElementChild.textContent = 'Hello';
// ul.children[1].innerText = 'Burak';
// ul.lastElementChild.innerHTML = '<h1>Hello</h1>';
// ul.lastElementChild.remove();
// ul.firstElementChild.style.background = 'black';
//
// const button = document.querySelector('.btn');
// button.style.background = 'green';

// Events
// button.addEventListener('mouseout', (e) => {
//     e.preventDefault();
//     console.log('click');
//     document.querySelector('.btn').style.background = 'red';
//     document.querySelector('#my-form').style.background = '#ccc';
//     document.querySelector('body').classList.add('bg-dark');
//     document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
// });
