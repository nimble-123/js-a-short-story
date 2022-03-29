'use strict';

const person = {
    firstName: 'Nils',
    lastName: 'Lutz',
    age: 34,
};

const temp = Object.entries(person);
console.log(temp);

const temp2 = temp.map(([key, value]) => {
    return [key.toUpperCase(), value];
});
console.log(temp2);

const person2 = Object.fromEntries(temp2);
// const person2 = Object.fromEntries(
//     Object.entries(person).map((key, value) => {
//         return [key.toUpperCase(), value];
//     })
// );

const person2 = Object.fromEntries(Object.entries(person).map((key, value) => [key.toUpperCase(), value]));
console.log(person2);
