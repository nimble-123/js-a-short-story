'use strict';

// old
try {
    // ...
    throw new Error();
} catch (error) {
    console.log('Es ist ein Fehler aufgetreten!');
}

// old
try {
    // ...
    throw new Error();
} catch {
    console.log('Es ist ein Fehler aufgetreten!');
}
