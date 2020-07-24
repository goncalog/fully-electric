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
        assert.instanceOf(ev.make, Make, 'ev\'s make is instance of Make');
    });

    it('EV model has model', () => {
        assert.instanceOf(ev.model, Model, 'ev\'s model is instance of Model');
    });

    it('EV model has year', () => {
        assert.strictEqual(ev.year, 2018, 'ev\'s year is 2018');
    });

    it('EV model has price', () => {
        assert.strictEqual(ev.price, 50000, 'ev\'s price is 50000');
    });

    it('EV model has mileage', () => {
        assert.strictEqual(ev.mileage, 18000, 'ev\'s year is 18000');
    });

    it('EV model has location', () => {
        assert.instanceOf(ev.location, Location, 'ev\'s location is instance of Location');
    });

    it('EV model has image url', () => {
        assert.strictEqual(ev.image_url, 'https://placeholder.com/image111', 
                'ev\'s image url is https://placeholder.com/image111');
    });

    it('EV model has seller', () => {
        assert.instanceOf(ev.seller, Seller, 'ev\'s seller is instance of Seller');
    });

    it('EV model has list date', () => {
        assert.strictEqual(ev.list_date, date, `ev\'s list date is ${date}`);
    });

    it('EV model has equipment and options', () => {
        assert.strictEqual(ev.equipment_and_options, 'placeholder', 'ev\'s equipment and options is placeholder');
    });

    it('EV model has exterior', () => {
        assert.strictEqual(ev.exterior, 'placeholder', 'ev\'s exterior is placeholder');
    });

    it('EV model has interior', () => {
        assert.strictEqual(ev.interior, 'placeholder', 'ev\'s interior is placeholder');
    });

    it('EV model has vehicle identification number', () => {
        assert.strictEqual(ev.vehicle_identification_number, '1M8GDM9AXKP042788', 
                'ev\'s vehicle identification number is 1M8GDM9AXKP042788');
    });

    it('EV model has full vehicle inspection', () => {
        assert.strictEqual(ev.full_vehicle_inspection, true, 'ev\'s full vehicle inspection is true');
    });

    it('EV model has url', () => {
        assert.strictEqual(ev.url, `/content/ev/${ev._id}`, `ev\'s url is /content/ev/${ev._id}`);
    });

    it('EV model doesn\'t have test property', () => {
        assert.notExists(ev.test, 'ev\'s test property is null or undefined');
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
        assert.strictEqual(tesla.name, 'Tesla', 'tesla\'s make is Tesla');
    });

    it('Make model has url', () => {
        assert.strictEqual(tesla.url, `/content/make/${tesla._id}`, 
                `tesla\'s url is /content/make/${tesla._id}`);
    });

    it('Make model doesn\'t have test property', () => {
        assert.notExists(tesla.test, 'tesla\'s test property is null or undefined');
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
        assert.instanceOf(s70.make, Make, 's70\'s make is instance of Make');
    });

    it('Model model has name', () => {
        assert.strictEqual(s70.name, 'S', 's70\'s name is S');
    });

    it('Model model has secondary name', () => {
        assert.strictEqual(s70.secondary_name, '70', 's70\'s secondary name is 70');
    });
    
    it('Model model has performance', () => {
        assert.strictEqual(s70.performance, 'placeholder', 's70\'s performance is placeholder');
    });

    it('Model model has charging', () => {
        assert.strictEqual(s70.charging, 'placeholder', 's70\'s charging is placeholder');
    });

    it('Model model has original msrp', () => {
        assert.strictEqual(s70.original_msrp, 85000, 's70\'s original msrp is 85000');
    });

    it('Model model has rating', () => {
        assert.strictEqual(s70.rating, 4.75, 's70\'s rating is 4.75');
    });

    it('Model model has url', () => {
        assert.strictEqual(s70.url, `/content/model/${s70._id}`, 
                `s70\'s url is /content/model/${s70._id}`);
    });

    it('Model model doesn\'t have test property', () => {
        assert.notExists(s70.test, 's70\'s test property is null or undefined');
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
        assert.strictEqual(london.city, 'London', 'london\'s city is London');
    });

    it('Location model has country', () => {
        assert.strictEqual(london.country, 'UK', 'london\'s country is UK');
    });

    it('Location model doesn\'t have test property', () => {
        assert.notExists(london.test, 'london\'s test property is null or undefined');
    });
});

describe('Seller model', () => {
    it('Seller model exists', () => {
        assert.instanceOf(missTesla, Seller, 'missTesla is instance of Seller');
    });

    it('Seller model has 6 properties', () => {
        assert.strictEqual(Object.keys(missTesla.schema.tree).length, 6, 'missTesla has 6 properties');
    });

    it('Seller model has name', () => {
        assert.strictEqual(missTesla.name, 'Miss Tesla', 'missTesla\'s name is Miss Tesla');
    });

    it('Seller model has contact', () => {
        assert.strictEqual(missTesla.contact, 'miss.tesla@gmail.com', 
                'missTesla\'s contact is miss.tesla@gmail.com');
    });

    it('Seller model has rating', () => {
        assert.strictEqual(missTesla.rating, 4.2, 'missTesla\'s rating is 4.2');
    });

    it('Seller model doesn\'t have test property', () => {
        assert.notExists(missTesla.test, 'missTesla\'s test property is null or undefined');
    });
});

// Testing model property validators
const ev2 = new EV();
const make2 = new Make();
const model2 = new Model();
const location2 = new Location();
const seller2 = new Seller();

const ev3 = new EV({
    year: 1899,
    price: -1,
    mileage: -1,
    vehicle_identification_number: 'xxxxxxxxxxxxxxxx',
});

const ev4 = new EV({
    year: date.getFullYear() + 1,
    vehicle_identification_number: 'xxxxxxxxxxxxxxxxxx',
});

describe('EV model validators are set', () => {
    it('EV model requires make', () => {
        ev2.validate((err) => {
            assert.exists(err.errors.make, 'ev\'s make is required');
        });
    });

    it('EV model requires model', () => {
        ev2.validate((err) => {
            assert.exists(err.errors.model, 'ev\'s model is required');
        });
    });

    it('EV model requires year', () => {
        ev2.validate((err) => {
            assert.exists(err.errors.year, 'ev\'s year is required');
        });
    });

    it('EV model\'s year isn\'t lower than 1900', () => {
        ev3.validate((err) => {
            assert.exists(err.errors.year, 'ev\'s year isn\'t lower than 1900');
        });
    });

    it('EV model\'s year isn\'t greater than current year', () => {
        ev4.validate((err) => {
            assert.exists(err.errors.year, 'ev\'s year isn\'t greater than current year');
        });
    });

    it('EV model requires price', () => {
        ev2.validate((err) => {
            assert.exists(err.errors.price, 'ev\'s price is required');
        });
    });

    it('EV model\'s price isn\'t lower than 0', () => {
        ev3.validate((err) => {
            assert.exists(err.errors.price, 'ev\'s price isn\'t lower than 0');
        });
    });

    it('EV model requires mileage', () => {
        ev2.validate((err) => {
            assert.exists(err.errors.mileage, 'ev\'s mileage is required');
        });
    });

    it('EV model\'s mileage isn\'t lower than 0', () => {
        ev3.validate((err) => {
            assert.exists(err.errors.mileage, 'ev\'s mileage isn\'t lower than 0');
        });
    });

    it('EV model requires location', () => {
        ev2.validate((err) => {
            assert.exists(err.errors.location, 'ev\'s location is required');
        });
    });

    it('EV model requires image url', () => {
        ev2.validate((err) => {
            assert.exists(err.errors.image_url, 'ev\'s image url is required');
        });
    });

    it('EV model requires seller', () => {
        ev2.validate((err) => {
            assert.exists(err.errors.seller, 'ev\'s seller is required');
        });
    });

    it('EV model requires list date', () => {
        ev2.validate((err) => {
            assert.notExists(err.errors.list_date, 'ev\'s list date has default value, so no error occurs');
        });
    });

    it('EV model requires equipment and options', () => {
        ev2.validate((err) => {
            assert.exists(err.errors.equipment_and_options, 'ev\'s equipment and options is required');
        });
    });

    it('EV model requires exterior', () => {
        ev2.validate((err) => {
            assert.exists(err.errors.exterior, 'ev\'s exterior is required');
        });
    });

    it('EV model requires interior', () => {
        ev2.validate((err) => {
            assert.exists(err.errors.interior, 'ev\'s interior is required');
        });
    });

    it('EV model requires vehicle identification number', () => {
        ev2.validate((err) => {
            assert.exists(err.errors.vehicle_identification_number, 'ev\'s vehicle identification number is required');
        });
    });

    it('EV model\'s vehicle identification number has lenght of 17', () => {
        ev3.validate((err) => {
            assert.exists(err.errors.vehicle_identification_number, 
                    'ev\'s vehicle identification number has lenght of 17');
        });
    });

    it('EV model\'s vehicle identification number has lenght of 17', () => {
        ev4.validate((err) => {
            assert.exists(err.errors.vehicle_identification_number, 
                    'ev\'s vehicle identification number has lenght of 17');
        });
    });

    it('EV model requires full vehicle inspection', () => {
        ev2.validate((err) => {
            assert.exists(err.errors.full_vehicle_inspection, 'ev\'s full vehicle inspection is required');
        });
    });
});

describe('Make model require validators are set', () => {
    it('Make model requires name', () => {
        make2.validate((err) => {
            assert.exists(err.errors.name, 'make model requires name');
        });
    });
});

describe('Model model require validators are set', () => {
    it('Model model requires make', () => {
        model2.validate((err) => {
            assert.exists(err.errors.make, 'model model requires make');
        });
    });

    it('Model model requires name', () => {
        model2.validate((err) => {
            assert.exists(err.errors.name, 'model model requires name');
        });
    });

    it('Model model doesn\'t require secondary name', () => {
        model2.validate((err) => {
            assert.notExists(err.errors.secondary_name, 'model model doesn\'t require secondary name');
        });
    });

    it('Model model requires performance', () => {
        model2.validate((err) => {
            assert.exists(err.errors.performance, 'model model requires performance');
        });
    });

    it('Model model requires charging', () => {
        model2.validate((err) => {
            assert.exists(err.errors.charging, 'model model requires charging');
        });
    });

    it('Model model requires original msrp', () => {
        model2.validate((err) => {
            assert.exists(err.errors.original_msrp, 'model model requires original msrp');
        });
    });

    it('Model model requires rating', () => {
        model2.validate((err) => {
            assert.exists(err.errors.rating, 'model model requires rating');
        });
    });
});

describe('Location model require validators are set', () => {
    it('Location model requires city', () => {
        location2.validate((err) => {
            assert.exists(err.errors.city, 'location model requires city');
        });
    });

    it('Location model requires country', () => {
        location2.validate((err) => {
            assert.exists(err.errors.country, 'location model requires country');
        });
    });
});

describe('Seller model require validators are set', () => {
    it('Seller model requires name', () => {
        seller2.validate((err) => {
            assert.exists(err.errors.name, 'seller model requires name');
        });
    });

    it('Seller model requires contact', () => {
        seller2.validate((err) => {
            assert.exists(err.errors.contact, 'seller model requires contact');
        });
    });

    it('Seller model requires rating', () => {
        seller2.validate((err) => {
            assert.exists(err.errors.rating, 'seller model requires rating');
        });
    });
});
