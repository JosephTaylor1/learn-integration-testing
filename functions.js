const axios = require('axios');

const functions = {
    add: (num1, num2) => num1 + num2,
    fetchUser: () => axios.get('https://jsonplaceholder.typicode.com/users/1')
        .then(response => response.data),
    reverseString: str => {
        const reversedStr = str.split('').reverse().join('');
        return reversedStr;
    },
}

module.exports = functions;
