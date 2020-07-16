const indexRouter = require('../routes/index');

const request = require('supertest');
const express = require('express');
const { urlencoded } = require('express');
const { get } = require('../routes/index');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use('/', indexRouter);

test('index route works', done => {
    request(app)
        .get('/')
        .expect('Content-type', /json/)
        .expect({ title: 'Fully Electric' })
        .expect(200, done)
});

test('testing route works', done => {
    request(app)
        .post('/test')
        .type('form')
        .send({ item: 'hello' })
        .then(() => {
            request(app)
                .get('/test')
                .expect({ array: ['hey'] })
        });
});
