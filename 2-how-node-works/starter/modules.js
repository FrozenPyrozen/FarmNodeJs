// console.log(arguments);
// console.log(require('module').wrapper);

// module.exports
const Calculator = require('./test-module1');
const calc1 = new Calculator();
console.log(calc1.add(2, 5));

// exports
// const calc2 = require('./test-module2');
const { add } = require('./test-module2');
console.log(add(2, 5));

// caching
require('./test-module3')();
require('./test-module3')();
require('./test-module3')();
