//Functions : are a group of code that performs a specific task.
// Our Task :- Get the first name and the last name of a perosn and print the full name in the console.

function fullName() {
    const firstName = 'Ah';
    const lastName = 'Med';
    console.log('Full Name - ${firstName} ${lastName} ');
}


fullName();


// if we need to call our function that whould be odd so we can do :

function fullName1(firstName, lastName) {
    // 1er solution : console.log('Full Name - ${firstName} ${lastName} '); but the best way is :
    return firstName + ' ' + lastName;
}

const fullname1 = fullName1('Ah', 'Med');

console.log(fullname1);


// Arrow Functions


function addTwoNums(num1, num2) {
    return num1 + num2;
}

console.log(addTwoNums(4, 6);


//introduction in ES6.
//These functions allow us to write shorter function syntax:


const sum = (num1, num2) => {
    return num1 + num2;
}

console.log(sum(3,2));
// if its a one line function

const sum = (num1, num2) => { num1 + num2};

console.log(sum(3,2));


const newFun = (name) => console.log(name);






















