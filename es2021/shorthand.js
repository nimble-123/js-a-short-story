'use strict';

const runServer = function (port = 3000) {
    port = port ?? 3000; //null or undefined
    console.log(`Server running on port ${port}.`);
};

runServer(4000);
runServer(undefined);
runServer(0); //falsy

let i = 5;
i = i + 1;
i += 1;
i++;

i = i + 2;
i += 2;

port = port + 3000;
port += 3000;

const runServer = function (port = 3000) {
    port ??= 3000; //null or undefined
    console.log(`Server running on port ${port}.`);
};

runServer(4000);
runServer(undefined);
runServer(0); //falsy
