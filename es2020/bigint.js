'use strict';

// 64bit float
const number = 42;

console.log(number, typeof number);

const hugeNumber = BigInt(1313131231541452345235234324234234234324234234242342342324242424242424);
const alternative = 1313131231541452345235234324234234234324234234242342342324242424242424n;

const result = hugeNumber + alternative;

console.log(result, typeof result);

const result2 = hugeNumber + 42;
console.log(result2, typeof result2);

const result2 = hugeNumber + BigInt(42);
const result2 = hugeNumber + 42n;
console.log(result2, typeof result2);

// arithmetik alles außer division, dafür modulo
