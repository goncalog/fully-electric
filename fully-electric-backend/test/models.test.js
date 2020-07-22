const assert = require('chai').assert;
const EV = require('../models/ev');

const ev = new EV({
    make: "Tesla",
    model: "S 70",
    year: 2018,
    price: 50000,
    mileage: 18000,
    location: "London, UK",
    image_url: "https://placeholder.com/image111",
    seller: "Miss Tesla",
    list_date: "22/07/2020",
    equipment_and_options: "placeholder",
    exterior: "placeholder",
    interior: "placeholder",
    vehicle_identification_number: "1M8GDM9AXKP042788",
    full_vehicle_inspection: true,
});

describe('EV model', () => {
    it('EV model exists', () => {
        assert.instanceOf(ev, EV, 'ev is instance of EV');
    });
});
