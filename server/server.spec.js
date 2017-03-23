import test from 'ava';
import request from 'supertest';
import subject from './server';

test('gets a response', async t => {
    const app = subject();
    const response = await request(app).get('/');

    t.is(response.status, 200); 
});

test('gets `Hello World!` response', async t => {
    const app = subject();
    const response = await request(app).get('/');

    t.is(response.text, "Hello World!"); 
});