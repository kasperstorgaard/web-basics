import path from 'path';
import fs from 'fs';
import test from 'ava';
import request from 'supertest';
import subject from './app';

const basePath = path.join(__dirname, '../public');

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
    // create a dummy file to serve
    const testPath = path.join(basePath, 'test.js');
    fs.writeFileSync(testPath, 'const foo = \'bar\';');

    const app = subject();

    const response = await request(app).get('/public/test.js');

    t.is(response.text, 'const foo = \'bar\';'); 

    // delete the dummy file
    fs.unlinkSync(testPath);
});