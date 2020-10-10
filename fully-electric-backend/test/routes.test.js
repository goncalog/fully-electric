const contentRouter = require('../routes/content');

const mongooseConnection = require('../database/mongoConfigTesting');
const createDatabaseItems = require('../database/createDatabaseItems');
require('dotenv').config({ path: __dirname + '/../.env' });

const session = require('express-session');
const passport = require('../auth/passportConfig');

const cookieParser = require('cookie-parser');
const request = require('supertest');
const express = require('express');

const app = express();

app.use(session({ secret: process.env.SECRET, resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.use(express.urlencoded({ extended: false }));

app.use('/content', contentRouter);

before(function () {
    createDatabaseItems();
});

after(function () {
    mongooseConnection.close();
});

describe('Routes testing', function () {
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
            .expect(hasTitle)
            .expect(hasEvs)
            .expect(isEv)
            .expect(200)
        
        function hasTitle(res) {
            if (!(res.body.title === 'List of all EVs')) {
                throw new Error("Wrong title");  
            } 
        }

        function hasEvs(res) {
            if (!(Object.keys(res.body.evs).length === 12)) {
                throw new Error("Doesn\'t have all the db evs");
            }
        }

        function isEv(res) {
            for (let key in res.body.evs) {
                if (!(Object.keys(res.body.evs[key]).length === 16)) {
                    throw new Error("Not an instance of EV");
                }
            }
        }
    });

    it('unique ev route works', () => {
        return request(app)
            .get(`/content/evs`)
            .expect('Content-type', /json/)
            .expect(200)
            .then((res) => {
                let keys = Object.keys(res.body.evs);
                let id = res.body.evs[keys[0]]._id;

                return request(app)
                .get(`/content/ev/${id}`)
                .expect('Content-type', /json/)
                .expect(hasTitle)
                .expect(isEv)
                .expect(200)
            });

            function hasTitle(res) {
                if (!(res.body.title === `Unique EV with id ${res.body.ev._id}`)) {
                    throw new Error("Wrong title");  
                } 
            }
    
            function isEv(res) {
                if (!(Object.keys(res.body.ev).length === 16)) {
                    throw new Error("Not an instance of EV");
                }
            }
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

    it('route for seller sign up works', () => {
        return request(app)
            .post('/content/seller/signup')
            .type('form')
            .send({ name: 'Miss Zoe', contact: 'zoe@gmail.com', password: '12345678' })
            .expect('Content-type', /json/)
            .expect({ title: 'Miss Zoe signed up' })
            .expect(200)
    });

    it('route for seller log in works', () => {
        return request(app)
            .post('/content/seller/login')
            .type('form')
            .send({ username: 'zoe@gmail.com', password: '12345678' })
            .expect('Content-type', /json/)
            .expect({ title: 'Miss Zoe logged in' })
            .expect(200)
    });

    it('route for seller log out works', () => {
        return request(app)
            .post('/content/seller/logout')
            .expect('Content-type', /json/)
            .expect({ title: 'Seller logged out' })
            .expect(200)
    });

    it('route for seller\'s evs works', () => {
        return request(app)
            .get('/content/seller/evs')
            .expect('Content-type', /json/)
            .expect({ message: 'Unauthorized: User not logged in' })
            .expect(401)
    });

    it('route to check the log in token works', () => {
        return request(app)
            .get('/content/seller/checkToken')
            .expect('Content-type', /json/)
            .expect({ message: 'Unauthorized: User not logged in' })
            .expect(401)
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
