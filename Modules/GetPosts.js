const axios = require('axios');

class GetPosts {
  static all() {
    return axios.get('https://jsonplaceholder.typicode.com/posts/')
        .then(resp => resp.data);
  }
}

module.exports = GetPosts;
