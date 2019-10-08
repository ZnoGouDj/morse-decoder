const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let exprArr = expr.match(/.{10}/g);
    let newExpr = exprArr.map(elem => elem
        .replace(/11/g, '-')
        .replace(/10/g, '.')
        .replace(/\*{10}/g, 'space')
        .replace(/00/g, ''));
    for (let i = 0; i < newExpr.length; i++) {
        for (key in MORSE_TABLE) {
            if (key == newExpr[i]) {
                newExpr[i] = MORSE_TABLE[key];
            }
        }
        if (newExpr[i] == "space") {
            newExpr[i] = " "
        }
    }
    return newExpr.join('');
}

module.exports = {
    decode
}