'use strict';

const person = {
    firstName: 'Nils',
    lastName: 'Lutz',
    age: 34,
};

// copy
// old
const { age } = person;

console.log(age);

const { age, ...names } = person;

console.log({ names });
