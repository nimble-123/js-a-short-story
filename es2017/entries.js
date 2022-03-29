'use strict';

const person = {
    firstName: 'Nils',
    lastName: 'Lutz',
    age: 34,
};

console.log(Object.entries(person));

//for (const [key, value] of Object.entries(person)) {
for (const kvp of Object.entries(person)) {
    //const [key, value] = kvp;

    console.log(kvp[0], kvp[1]);
    //console.log({ key, value });
}
