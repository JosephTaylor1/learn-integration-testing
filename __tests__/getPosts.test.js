const axios = require('axios');
const GetPosts = require('../Modules/GetPosts.js');

jest.mock('axios');

test('should fetch posts', () => {
  const posts = [{name: 'Creates a mock post'}];
  const resp = {data: posts};
  axios.get.mockResolvedValue(resp);

  return GetPosts.all().then(data => expect(data).toEqual(posts));
});
