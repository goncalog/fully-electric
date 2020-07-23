const assert = require('chai').assert;
const EV = require('../models/ev');
const Make = require('../models/make');
const Model = require('../models/model');
const Location = require('../models/location');

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
});

const london = new Location({
    city: 'London',
    country: 'UK',
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
    seller: 'Miss Tesla',
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
        assert.strictEqual(ev.seller, 'Miss Tesla', `ev seller is Miss Tesla`);
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
