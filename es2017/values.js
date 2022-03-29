'use strict';

const person = {
    firstName: 'Nils',
    lastName: 'Lutz',
    age: 34,
};

// old
console.log(Object.keys(person));

// new
console.log(Object.values(person));
