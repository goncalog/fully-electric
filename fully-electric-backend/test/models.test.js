const assert = require('chai').assert;
const EV = require('../models/ev');
const Make = require('../models/make');
const Model = require('../models/model');
const Location = require('../models/location');
const Seller = require('../models/seller');

const tesla = new Make({
    name: "Tesla",
    test: 2,
});

const s70 = new Model({
    make: tesla,
    name: 'S',
    secondary_name: '70',
    performance: 'placeholder',
    charging: 'placeholder',
    original_msrp: 85000,
    rating: 4.75,
    test: 2,
});

const london = new Location({
    city: 'London',
    country: 'UK',
    test: 2,
});

const missTesla = new Seller({
    name: 'Miss Tesla',
    contact: 'miss.tesla@gmail.com',
    rating: 4.2,
    test: 2,
});

const date = new Date;

const ev = new EV({
    make: tesla,
    model: s70,
    year: 2018,
    price: 50000,
    mileage: 18000,
    location: london,
    image_url: 'https://placeholder.com/image111',
    seller: missTesla,
    list_date: date,
    equipment_and_options: 'placeholder',
    exterior: 'placeholder',
    interior: 'placeholder',
    vehicle_identification_number: '1M8GDM9AXKP042788',
    full_vehicle_inspection: true,
    test: 2,
});

describe('EV model', () => {
    it('EV model exists', () => {
        assert.instanceOf(ev, EV, 'ev is instance of EV');
    });

    it('EV model has 17 properties', () => {
        assert.strictEqual(Object.keys(ev.schema.tree).length, 18, 'ev has 18 properties');
    });

    it('EV model has make', () => {
        assert.strictEqual(ev.make.name, 'Tesla', 'ev make is Tesla');
    });

    it('EV model has model', () => {
        assert.strictEqual(`${ev.model.name} ${ev.model.secondary_name}`, 'S 70', 'ev model is S 70');
    });

    it('EV model has year', () => {
        assert.strictEqual(ev.year, 2018, 'ev year is 2018');
    });

    it('EV model has price', () => {
        assert.strictEqual(ev.price, 50000, 'ev price is 50000');
    });

    it('EV model has mileage', () => {
        assert.strictEqual(ev.mileage, 18000, 'ev year is 18000');
    });

    it('EV model has location', () => {
        assert.strictEqual(`${ev.location.city}, ${ev.location.country}`, 'London, UK', 'ev location is London, UK');
    });

    it('EV model has image url', () => {
        assert.strictEqual(ev.image_url, 'https://placeholder.com/image111', 
                'ev image url is https://placeholder.com/image111');
    });

    it('EV model has seller', () => {
        assert.strictEqual(ev.seller.name, 'Miss Tesla', `ev seller is Miss Tesla`);
    });

    it('EV model has list date', () => {
        assert.strictEqual(ev.list_date, date, `ev list date is ${date}`);
    });

    it('EV model has equipment and options', () => {
        assert.strictEqual(ev.equipment_and_options, 'placeholder', 'ev equipment and options is placeholder');
    });

    it('EV model has exterior', () => {
        assert.strictEqual(ev.exterior, 'placeholder', 'ev exterior is placeholder');
    });

    it('EV model has interior', () => {
        assert.strictEqual(ev.interior, 'placeholder', 'ev interior is placeholder');
    });

    it('EV model has vehicle identification number', () => {
        assert.strictEqual(ev.vehicle_identification_number, '1M8GDM9AXKP042788', 
                'ev vehicle identification number is 1M8GDM9AXKP042788');
    });

    it('EV model has full vehicle inspection', () => {
        assert.strictEqual(ev.full_vehicle_inspection, true, 'ev full vehicle inspection is true');
    });

    it('EV model has url', () => {
        assert.strictEqual(ev.url, `/content/ev/${ev._id}`, `ev url is /content/ev/${ev._id}`);
    });

    it('EV model doesn\'t have test property', () => {
        assert.notExists(ev.test, 'ev test property is null or undefined');
    });
});

describe('Make model', () => {
    it('Make model exists', () => {
        assert.instanceOf(tesla, Make, 'tesla is instance of Make');
    });

    it('Make model has 5 properties', () => {
        assert.strictEqual(Object.keys(tesla.schema.tree).length, 5, 'tesla has 5 properties');
    });

    it('Make model has name', () => {
        assert.strictEqual(tesla.name, 'Tesla', 'ev make is Tesla');
    });

    it('Make model has url', () => {
        assert.strictEqual(tesla.url, `/content/make/${tesla._id}`, 
                `tesla url is /content/make/${tesla._id}`);
    });

    it('Make model doesn\'t have test property', () => {
        assert.notExists(tesla.test, 'tesla test property is null or undefined');
    });
});

describe('Model model', () => {
    it('Model model exists', () => {
        assert.instanceOf(s70, Model, 's70 is instance of Model');
    });

    it('Model model has 11 properties', () => {
        assert.strictEqual(Object.keys(s70.schema.tree).length, 11, 's70 has 11 properties');
    });

    it('Model model has make', () => {
        assert.instanceOf(s70.make, Make, 's70 make is instance of Make');
    });

    it('Model model has name', () => {
        assert.strictEqual(s70.name, 'S', 's70 name is S');
    });

    it('Model model has secondary name', () => {
        assert.strictEqual(s70.secondary_name, '70', 's70 secondary name is 70');
    });
    
    it('Model model has performance', () => {
        assert.strictEqual(s70.performance, 'placeholder', 's70 performance is placeholder');
    });

    it('Model model has charging', () => {
        assert.strictEqual(s70.charging, 'placeholder', 's70 charging is placeholder');
    });

    it('Model model has original msrp', () => {
        assert.strictEqual(s70.original_msrp, 85000, 's70 original msrp is 85000');
    });

    it('Model model has rating', () => {
        assert.strictEqual(s70.rating, 4.75, 's70 rating is 4.75');
    });

    it('Model model has url', () => {
        assert.strictEqual(s70.url, `/content/model/${s70._id}`, 
                `s70 url is /content/model/${s70._id}`);
    });

    it('Model model doesn\'t have test property', () => {
        assert.notExists(s70.test, 's70 test property is null or undefined');
    });
});

describe('Location model', () => {
    it('Location model exists', () => {
        assert.instanceOf(london, Location, 'london is instance of Location');
    });

    it('Location model has 5 properties', () => {
        assert.strictEqual(Object.keys(london.schema.tree).length, 5, 'london has 5 properties');
    });

    it('Location model has city', () => {
        assert.strictEqual(london.city, 'London', 'london city is London');
    });

    it('Location model has country', () => {
        assert.strictEqual(london.country, 'UK', 'london country is UK');
    });

    it('Location model doesn\'t have test property', () => {
        assert.notExists(london.test, 'london test property is null or undefined');
    });
});
