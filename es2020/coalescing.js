'use strict';

const runServer = function (port) {
    console.log(`Server running on port ${port}.`);
};

runServer(3000);

runServer();
const runServer = function (port = 3000) {
    console.log(`Server running on port ${port}.`);
};

const runServer = function (port = 3000) {
    port = port || 3000; //falsy
    console.log(`Server running on port ${port}.`);
};

runServer(4000);
runServer(undefined);
runServer(0); //falsy

const runServer = function (port = 3000) {
    port = port ?? 3000; //null or undefined
    console.log(`Server running on port ${port}.`);
};

runServer(4000);
runServer(undefined);
runServer(0); //falsy
