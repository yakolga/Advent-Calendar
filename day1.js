function getName(code) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split("");
    const numOfLetters = {};
    const result = [];
    alphabet.forEach((letter, i) => {
        if (letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u") {
            numOfLetters[(i + 7) * 5] = letter;
        } else {
            numOfLetters[i] = letter;
        }
    });

    const splitedCode = code.split(',').map(elem => Number(elem));
    splitedCode.forEach(elem => {
        let value = numOfLetters[elem];
        result.push(value);
    })

    return result.join("");
}

getName('6, 75, 19, 75, 6, 13, 105, 17, 55');

function encryptName(code) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split("");
    const encryptedMass = code.split("");
    const numOfLetters = {};
    const result = [];

    alphabet.forEach((letter, i) => {
        if (letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u") {
            numOfLetters[letter] = (i + 7) * 5;
        } else {
            numOfLetters[letter] = i;
        }
    });

    encryptedMass.forEach(letter => {
        let value = numOfLetters[letter];
        result.push(value);
    });

    return result.join(",");
}

console.log(encryptName('gitignore'));