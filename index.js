const fs = require('fs');
const pizzaParser = require('./pizzaParser');


const fileName = process.argv[2];

fs.readFile(fileName, 'utf8', (err, contents) =>  {
    if (err) {
        throw new Error(err);
    }

    console.log(pizzaParser.parse(contents));
});