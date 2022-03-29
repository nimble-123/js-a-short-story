'use strict';

const person = {
    firstName: 'Nils',
    lastName: 'Lutz',
    age: 34,
};

console.log(person.firstName.toUpperCase());

console.log(person.middleName.toUpperCase());

// alt mit if

// neu optional chaining
console.log(person.middleName?.toUpperCase());

const person2 = {
    firstName: 'Nils',
    middleName: 'T',
    lastName: 'Lutz',
    age: 34,
};

console.log(person.middleName?.toUpperCase());
