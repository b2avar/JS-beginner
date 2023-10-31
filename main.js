//let, const

//let
let myAge = 30;
myAge = 31;
console.log(myAge);

//const
const score = 20;
console.log(score);

//String, Numbers, Boolean, null, undefined

const name = 'Burak'; //string
const age = 31; //number
const rating = 4.5; //number
const isCool = true; //boolean
const x = null; //null - empty , object
const y = undefined; //undefined
let z; //undefined

console.log(typeof z);

//Concatenation
console.log('My name is ' + name + ' and I am ' + age); //old way

//Template String
console.log(`My name is ${name} and I am ${age}`); //template string

const hello = `My name is ${name} and I am ${age}`; //template string
//console.log(hello);

//String Properties and Methods
const s = 'Hello World!';
console.log(s.length); //length of string
console.log(s.toUpperCase()); //uppercase
console.log(s.toLowerCase()); //lowercase
console.log(s.substring(0, 5)); //substring
console.log(s.substring(0, 5).toUpperCase()); //substring and uppercase
console.log(s.split('')); //split by character

const t = 'technology, computers, it, code'; //split by comma
console.log(t.split(', ')); //split by character


//Arrays - variables that hold multiple values

const numbers = new Array(1,2,3,4,5); //constructor
console.log(numbers);

//Fruits Array
const fruits = ['apples', 'oranges', 'pears', 10, true]; //can hold different types
console.log(fruits);
console.log(fruits[1]);

fruits[3] = 'grapes'; //add to index
console.log(fruits);

fruits.push('mangos'); //add to end
console.log(fruits);

fruits.unshift('strawberries'); //add to front
console.log(fruits);

fruits.pop(); //remove last
console.log(fruits);

console.log(Array.isArray(fruits)); //check if array

console.log(fruits.indexOf('oranges')); //check index

//Object Literals
const person = {
    firstName: 'Burak',
    lastName: 'Avar',
    age: 31,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}

console.log(person);
//alert(person);

console.log(person.firstName, person.lastName); //access properties
console.log(person.hobbies[1]); //access array
console.log(person.address.city); //access object

const { firstName, lastName, address: { city } } = person; //destructuring
console.log(firstName);
console.log(city);

person.email = 'burakavar@gmail.com'; //add property
console.log(person);
console.log(Object.entries(person)); //object to array
