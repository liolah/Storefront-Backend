import supertest from 'supertest';
import app from '../../server';

const request = supertest(app);

describe('API Endpoints:', () => {
  it('GET /', async () => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
  });

  it('GET /users', async () => {
    const response = await request.get('/users');
    expect(response.status).toBe(200);
  });
});