const input = require('./input.json');

for (let i = 0; i < input.data.length; i++) {
    for (let j = i + 1; j < input.data.length; j++) {
        for (let k = j + 1; k < input.data.length; k++) {
            if (input.data[i] + input.data[j] + input.data[k] === 2020) {
                console.log(input.data[i] + ' * ' + input.data[j] + ' * ' + input.data[k] + ' = ' + (input.data[i] * input.data[j] * input.data[k]));
            }
        }
    }
}