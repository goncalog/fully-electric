const indexRouter = require('../routes/index');

const request = require('supertest');
const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use('/', indexRouter);

describe('Routes testing', () => {
    it('index route works', () => {
        return request(app)
            .get('/')
            .expect('Content-type', /json/)
            .expect({ title: 'Fully Electric' })
            .expect(200)
    });
    
    it('testing route works', () => {
        return request(app)
            .post('/test')
            .type('form')
            .send({ item: 'hello' })
            .then(() => {
                return request(app)
                    .get('/test')
                    .expect({ testArray: ['hello'] })
            })
    });
});
