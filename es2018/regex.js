'use strict';

const ratio = '3/7';

const result = /^(\d+)\/(\d+)$/u.exec(ratio);

console.log(result);

// const { numerator, denominator } = /^(?<numerator>\d+)\/(?<denominator>\d+)$/u.exec(ratio);

// console.log({ numerator, denominator });
