import path from 'path';
import fs from 'fs';
import test from 'ava';
import request from 'supertest';
import subject from './server';

const basePath = path.join(__dirname, '../dist');

test('gets a response', async t => {
    const app = subject();
    const response = await request(app).get('/');

    t.is(response.status, 200); 
});

test('gets html response', async t => {
    const app = subject();
    const response = await request(app).get('/');

    t.true(/<html/.test(response.text)); 
});

test('serves static files', async t => {
    fs.writeFileSync(path.join(basePath, 'test.js'), 'const foo = \'bar\';');

    const app = subject();

    const response = await request(app).get('/test.js');

    t.is(response.text, 'const foo = \'bar\';'); 
});