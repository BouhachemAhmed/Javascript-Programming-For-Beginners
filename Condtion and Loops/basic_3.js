//if-Else Statement

let age = 10;
let x = 13;

if (age === 10 || age === 11 ) {
    console.log('Value is 10/11');
} else if(age ===12 && x ===13)
    console.log('Value is 12 and x is 13');
} else if(age ===14){
    console.log('Value is 14');
} else {
    console.log('Value is not 10 or 12 or 14');
}

// < > <= >= != === ==
// || &&


/************************************/


let age = 20;

switch(age) {
    case 10:
        console.log('Value is 10');
    case 20:
        console.log('Value is 20');
    case 30:
        console.log('Value is 10');
        break;
    default:
        console.log('Value is something else');
}


/************************************/


//  For loop
//  i++ = i + 1
for (let i = 0; i < 10; i++) {
    console.log(i);
}


for (let i = 0; i < persons.length; i++) {
    console.log(persons[1]);
}

// While loop

let a = 0;
while(a < persons.length) {
    console.log(persons[a].name);
    a++;
}

// 
for ( person of persons) {
    console.log(person.name);
}



























