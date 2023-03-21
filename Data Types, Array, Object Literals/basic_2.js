// Data Types -> It means the rtpe of data we can store in a variable or a constant.
//Data Type in Javascript are :-
//String, Number, Boolean, Null, Indefined.
const myName = "Ah med";
const myInteger = 78;
const myDecimal = 98.98;
const myBool = true;
const myNull = null;
const myUndefinedConst = undefined;

console.log(myName);
console.log(myInteger);
console.log(myDecimal);
console.log(myBool);
console.log(myNull);
console.log(myUndefinedConst);


/*****************************/


var firstName = "Ah";
var lastName = "Med";
var fullName = "Ah Med";
var fullName1 = firstName + " " + lastName;

console.log(firstName);
console.log(fullName1);

var fullName2 = '${firsName} ${lastName} is my full name.' ;
console.log(fullName2);

console.log(fullName1.toUpperCase());
console.log(fullName1.toLowerCase());

console.log(fullName1.length);

var message = 'IT\' ok';
console.log(message);


/*****************************/



//Arrays -> Relate to arrays as the list of values/data. Arrays are the variables that can store multiple values

const friends = ["Sam", "John", "Ron"];
console.log(friends);


const fruits =['Apple,' 'Mango', 'Banana'];
console.log(fruits);

let firstPerson = ['Samy', 18, false];

friends.push('Harry');
console.log(friends);
friends.unshift('Chris');
console.log(friends);
friends.shift();
console.log(friends);

console.log(friends.length);

console.log(friends[0]);

console.log(Array.isArray(8));



/*****************************/



//Object Literals -> There are the variables that can store many values in key-value pairs.

let person = {
    firstName: "Ah",
    lastName: "Med",
    age: 18,
    hobbies: ['Chess', 'Coding', 'Video Making'], 
    address: {
        city: 'Rhein',
        state: 'Ludwigshafen'
    },
};

console.log(person);

console.log(person.lastName)

console.log(person.firstName)

console.log(person.hobbies)

person.email = 'hiahmed@gmail.com';
console.log(person);

console.log(person['firstName']);


/*****************************/


let persons = [
    {
        name: "Ah Med1",
        isCoder: true,
        age: 18
    },
    {
        name: "Ah Med2",
        isCoder: true,
        age: 22
    },
    {
        name: "Ah Med3",
        isCoder: false,
        age: 45
    },
];
console.log(personz);

console.log(persons[1].name);






















