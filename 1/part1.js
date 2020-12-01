const input = require('./input.json');

for (let i = 0; i < input.data.length; i++) {
    for (let j = i + 1; j < input.data.length; j++) {
        if (input.data[i] + input.data[j] === 2020) {
            console.log(input.data[i] + ' * ' + input.data[j] + ' = ' + (input.data[i] * input.data[j]));
        }
    }
}