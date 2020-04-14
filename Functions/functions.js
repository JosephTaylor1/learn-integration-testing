const axios = require('axios');

const functions = {
    add: (num1, num2) => num1 + num2,
    reverseString: str => {
        const reversedStr = str.split('').reverse().join('');
        return reversedStr;
    },
};

module.exports = functions;
