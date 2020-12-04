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

    let fields = passports[i].split(' ');
    for (let j = 0; j < fields.length && !invalid; j++) {
        let value = fields[j].split(':');
        if (value[0].length > 0) {
            switch (value[0]) {
                case 'byr':
                    if (value[1].length != 4 || 
                        Number(value[1]) < 1920 || 
                        Number(value[1]) > 2002) {
                        invalid = true;
                    }
                    break;
                case 'iyr':
                    if (value[1].length != 4 || 
                        Number(value[1]) < 2010 || 
                        Number(value[1]) > 2020) {
                        invalid = true;
                    } 
                    break;
                case 'eyr':
                    if (value[1].length != 4 || 
                        Number(value[1]) < 2020 || 
                        Number(value[1]) > 2030) {
                        invalid = true;
                    }
                    break;
                case 'hgt':
                    if (value[1].endsWith("cm")) {
                        const numericValue = Number(value[1].substr(0, value[1].length - 2));
                        if (numericValue < 150 || 
                            numericValue > 193) {
                            invalid = true;
                        }
                    } else if (value[1].endsWith("in")) {
                        const numericValue = Number(value[1].substr(0, value[1].length - 2));
                        if (numericValue < 59 || 
                            numericValue > 76) {
                            invalid = true;
                        }
                    } else {
                        invalid = true;
                    }
                    break;
                case 'hcl':
                    if (value[1].match(/^#([a-f0-9]{6})$/i) == null) {
                        invalid = true;
                    }
                    break;
                case 'ecl':
                    if (value[1] != 'amb' &&
                        value[1] != 'blu' &&
                        value[1] != 'brn' &&
                        value[1] != 'gry' &&
                        value[1] != 'grn' &&
                        value[1] != 'hzl' &&
                        value[1] != 'oth') {
                        invalid = true;
                    }
                    break;
                case 'pid':
                    if (value[1].match(/^([0-9]{9})$/i) == null) {
                        invalid = true;
                    }
                    break;
                case 'cid':
                    break;
                default:
                    break;
            } 
        }
    }

    if (!invalid) {
        validCount += 1;
    }
}

console.log(`count of valid passports: ${validCount}`);