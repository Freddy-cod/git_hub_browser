// server.test.js - Backend unit tests
const request = require('supertest');
const app = require('../src/server');

describe('Backend API Tests', () => {
  it('should search users', async () => {
    const res = await request(app)
      .post('/api/users/search')
      .send({ query: 'react' })
      .expect(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});