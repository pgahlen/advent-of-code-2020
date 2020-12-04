const input = require('./input.json');

const passports = [""];
for (let i = 0; i < input.data.length; i++) {
    if (input.data[i].length > 0) {
        passports[passports.length - 1] += " " + input.data[i];
    } else {
        passports.push("");
    }
}

const mandatoryFields = [
    "byr",
    "iyr",
    "eyr",
    "hgt",
    "hcl",
    "ecl",
    "pid"
]
let validCount = 0;
for (let i = 0; i < passports.length; i++) {
    let invalid = false;
    for (let j = 0; j < mandatoryFields.length && !invalid; j++) {
        if (passports[i].indexOf(`${mandatoryFields[j]}:`) == -1) {
            invalid = true;
        }
    }

    if (!invalid) {
        validCount += 1;
    }
}

console.log(`count of valid passports: ${validCount}`);