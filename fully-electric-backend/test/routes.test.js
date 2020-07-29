const indexRouter = require('../routes/index');
const contentRouter = require('../routes/content');

const request = require('supertest');
const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use('/', indexRouter);
app.use('/content', contentRouter);

describe('Routes testing', () => {
    it('index route redirects to content route', () => {
        return request(app)
            .get('/')
            .expect('Content-type', 'text/plain; charset=utf-8')
            .expect('Location', '/content')
            .expect(302)
    });

    it('content route works', () => {
        return request(app)
            .get('/content')
            .expect('Content-type', /json/)
            .expect({ title: 'Fully Electric' })
            .expect(200)
    });

    it('all evs route works', () => {
        return request(app)
            .get('/content/ev')
            .expect('Content-type', /json/)
            .expect({ title: 'List of all EVs' })
            .expect(200)
    });
    
    it('testing route works', () => {
        return request(app)
            .post('/content/test')
            .type('form')
            .send({ item: 'hello' })
            .then(() => {
                return request(app)
                    .get('/content/test')
                    .expect({ testArray: ['hello'] })
            })
    });
});
