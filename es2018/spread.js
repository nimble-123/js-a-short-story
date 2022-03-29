'use strict';

const person = {
    firstName: 'Nils',
    lastName: 'Lutz',
    age: 34,
};

// copy
// old
const personInOneYear = {
    firstName: person.firstName,
    lastName: person.lastName,
    age: person.age + 1,
};

// new spread
const personInOneYear = {
    ...person,
    age: person.age + 1,
};

console.log(personInOneYear);
