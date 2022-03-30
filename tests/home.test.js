const request = require('supertest');
const app = require('../app');

describe('GET /hello', () => {
  it('should say hello', async () => {
    const response = await request(app).get('/hello');

    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toEqual(expect.stringContaining('json'));
    expect(response.body.message).toBe('Hello world!');
  });
});
