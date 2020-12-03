const input = require('./input.json');

let posX = 0;
let posY = 0;
let treeCount = 0;

while (posY < input.data.length) {
    if (posX >= input.data[posY].length) {
        posX -= input.data[posY].length;
    }

    if (input.data[posY][posX] == '#') {
        treeCount += 1;
    }

    posX += 3;
    posY += 1;
}

console.log(`${treeCount} trees hit.`);