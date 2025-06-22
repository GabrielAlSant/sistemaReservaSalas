const request = require('supertest');
const app = require('../app');

describe('Testes na API /users', () => {
     it('GET /users deve retornar lista de usuários', async () => {
    const res = await request(app).get('/reservas');
    expect(res.statusCode).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
    expect(res.body.length).toBeGreaterThan(0);
  });

})