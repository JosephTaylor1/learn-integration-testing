const axios = require('axios');

const apiCalls = {
    fetchUser: () => axios.get('https://jsonplaceholder.typicode.com/users/1')
        .then(response => response.data),
    fetchApiData: (endpoint) => axios.get('https://jsonplaceholder.typicode.com/' + endpoint)
        .then(res => res.data),
};

module.exports = apiCalls;
