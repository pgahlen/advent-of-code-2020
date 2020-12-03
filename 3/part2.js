const input = require('./input.json');

let slopes = [
    [1, 1, 0],
    [3, 1, 0],
    [5, 1, 0],
    [7, 1, 0],
    [1, 2, 0]
];
let answer = 0;

for (let i = 0; i < slopes.length; i++) {
    let posX = 0;
    let posY = 0;

    while (posY < input.data.length) {
        if (posX >= input.data[posY].length) {
            posX -= input.data[posY].length;
        }
    
        if (input.data[posY][posX] == '#') {
            slopes[i][2] += 1;
        }
    
        posX += slopes[i][0];
        posY += slopes[i][1];
    }

    if (answer == 0) {
        answer = slopes[i][2];
    } else {
        answer *= slopes[i][2];
    }
}

console.log(`${answer} is the answer.`);