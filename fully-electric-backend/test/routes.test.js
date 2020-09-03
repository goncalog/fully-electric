const indexRouter = require('../routes/index');
const contentRouter = require('../routes/content');

const mongooseConnection = require('../database/mongoConfigTesting');
const createDatabaseItems = require('../database/createDatabaseItems');
require('dotenv').config({ path: __dirname + '/../.env' });

const request = require('supertest');
const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use('/', indexRouter);
app.use('/content', contentRouter);

describe('Routes testing', () => {
    // Since the tests are starting with a fresh database, it's useful 
    // to use a beforeAll function to add a few items to the database before running tests.
    before(() => {
        let evs = createDatabaseItems(mongooseConnection);
    });

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
            .get('/content/evs')
            .expect('Content-type', /json/)
            .expect({ title: 'List of all EVs' })
            .expect(200)
    });

    it('unique ev route works (1)', () => {
        return request(app)
            .get('/content/ev/12345')
            .expect('Content-type', /json/)
            .expect({ title: 'Unique EV with id 12345' })
            .expect(200)
    });

    it('unique ev route works (2)', () => {
        return request(app)
            .get('/content/ev/678910')
            .expect('Content-type', /json/)
            .expect({ title: 'Unique EV with id 678910' })
            .expect(200)
    });

    it('route to get data to create new ev works', () => {
        return request(app)
            .get('/content/ev/create')
            .expect('Content-type', /json/)
            .expect({ title: 'Data to create new EV' })
            .expect(200)
    });

    it('route to create new ev works', () => {
        return request(app)
            .post('/content/ev/create')
            .expect('Content-type', /json/)
            .expect({ title: 'Create new EV' })
            .expect(200)
    });

    it('route to get data to update ev works (1)', () => {
        return request(app)
            .get('/content/ev/12345/update')
            .expect('Content-type', /json/)
            .expect({ title: 'Data to update EV with id 12345' })
            .expect(200)
    });

    it('route to get data to update ev works (2)', () => {
        return request(app)
            .get('/content/ev/678910/update')
            .expect('Content-type', /json/)
            .expect({ title: 'Data to update EV with id 678910' })
            .expect(200)
    });
    
    it('route to update ev works (1)', () => {
        return request(app)
            .put('/content/ev/12345/update')
            .expect('Content-type', /json/)
            .expect({ title: 'Update EV with id 12345' })
            .expect(200)
    });

    it('route to update ev works (2)', () => {
        return request(app)
            .put('/content/ev/678910/update')
            .expect('Content-type', /json/)
            .expect({ title: 'Update EV with id 678910' })
            .expect(200)
    });

    it('route to delete ev works (1)', () => {
        return request(app)
            .delete('/content/ev/12345/delete')
            .expect('Content-type', /json/)
            .expect({ title: 'Delete EV with id 12345' })
            .expect(200)
    });

    it('route to delete ev works (2)', () => {
        return request(app)
            .delete('/content/ev/678910/delete')
            .expect('Content-type', /json/)
            .expect({ title: 'Delete EV with id 678910' })
            .expect(200)
    });

    it('make route works (1)', () => {
        return request(app)
            .get('/content/make/12345')
            .expect('Content-type', /json/)
            .expect({ title: 'Make with id 12345' })
            .expect(200)
    });

    it('make route works (2)', () => {
        return request(app)
            .get('/content/make/678910')
            .expect('Content-type', /json/)
            .expect({ title: 'Make with id 678910' })
            .expect(200)
    });

    it('model route works (1)', () => {
        return request(app)
            .get('/content/model/12345')
            .expect('Content-type', /json/)
            .expect({ title: 'Model with id 12345' })
            .expect(200)
    });

    it('model route works (2)', () => {
        return request(app)
            .get('/content/model/678910')
            .expect('Content-type', /json/)
            .expect({ title: 'Model with id 678910' })
            .expect(200)
    });

    it('route for getting seller contact form works (1)', () => {
        return request(app)
            .get('/content/seller/12345')
            .expect('Content-type', /json/)
            .expect({ title: 'Contact form from seller with id 12345' })
            .expect(200)
    });

    it('route for getting seller contact form works (2)', () => {
        return request(app)
            .get('/content/seller/678910')
            .expect('Content-type', /json/)
            .expect({ title: 'Contact form from seller with id 678910' })
            .expect(200)
    });

    it('route for sending message to seller works (1)', () => {
        return request(app)
            .post('/content/seller/12345')
            .expect('Content-type', /json/)
            .expect({ title: 'Contact seller with id 12345' })
            .expect(200)
    });

    it('route for sending message to seller works (2)', () => {
        return request(app)
            .post('/content/seller/678910')
            .expect('Content-type', /json/)
            .expect({ title: 'Contact seller with id 678910' })
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
