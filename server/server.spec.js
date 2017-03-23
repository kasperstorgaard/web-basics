import test from 'ava';
import request from 'supertest';
import subject from './server';

test('gets a response', async t => {
    t.plan(1);

    const app = subject();
    const server = app.listen(3000);
    const response = await request(app).get('/');

    t.is(response.status, 200); 
    server.close();
});

test('gets `Hello World!` response', async t => {
    t.plan(1);

    const app = subject();
    const server = app.listen(3001);
    const response = await request(app).get('/');

    t.is(response.text, "Hello World!"); 
    server.close();
});