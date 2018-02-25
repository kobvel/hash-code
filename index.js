const fs = require('fs');
const pizzaParser = require('./pizzaParser');
const pizzaSlicer = require('./pizzaSlicer');


const fileName = process.argv[2];

const content = fs.readFileSync(fileName, 'utf8');
const inputData = pizzaParser.parse(content);

console.log(inputData);
