const input = require('./input.json');

let passwordCount = 0;
for (let i = 0; i < input.data.length; i++) {
    let lastPosition = 0;
    let position = input.data[i].indexOf('-', lastPosition);
    const minCount = Number(input.data[i].substr(lastPosition, position));

    lastPosition = position + 1;
    position = input.data[i].indexOf(' ', lastPosition);
    const maxCount = Number(input.data[i].substr(lastPosition, position - lastPosition));

    lastPosition = position + 1;
    position = input.data[i].indexOf(': ', lastPosition);
    const character = input.data[i].substr(lastPosition, position - lastPosition);
    
    const password = input.data[i].substr(position + 2);

    const characterCount = password.split(character).length - 1;
    console.log(characterCount);

    if (characterCount >= minCount && characterCount <= maxCount) {
        passwordCount += 1;
    }
}

console.log('Count of correct passwords: ' + passwordCount);