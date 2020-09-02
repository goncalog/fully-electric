console.log('This script populates some test EVs, makes, models, locations and sellers to the database');

const async = require('async');
require('./mongoConfig');

// Import mongoose models
const EV = require('../models/ev');
const Make = require('../models/make'); 
const Model = require('../models/model');
const Location = require('../models/location');
const Seller = require('../models/seller');

let makes = [];
let models = [];
let locations = [];
let sellers = [];
let evs = [];

function makeCreate(name, cb) {
    makeDetail = { name: name };

    const make = new Make(makeDetail);

    make.save(function (err) {
        if (err) {
            cb(err, null);
            return;
        }

        console.log(`New Make: ${make}`);
        makes.push(make);
        cb(null, make);
    });
}

function modelCreate(make, name, secondaryName, performance, charging, originalMsrp, rating, cb) {
    modelDetail = { 
        make: make,
        name: name,
        performance: performance,
        charging: charging,
        original_msrp: originalMsrp,
        rating: rating,
    };
    if (secondaryName != false) {
        makeDetail.secondary_name = secondaryName;
    }

    const model = new Model(modelDetail);

    model.save(function (err) {
        if (err) {
            cb(err, null);
            return;
        }

        console.log(`New Model: ${model}`);
        models.push(model);
        cb(null, model);
    });
}

function locationCreate(city, country, cb) {
    locationDetail = { 
        city: city, 
        country: country, 
    }

    const location = new Location(locationDetail);

    location.save(function (err) {
        if (err) {
            cb(err, null);
            return;
        }

        console.log(`New Location: ${location}`);
        locations.push(location);
        cb(null, location);
    });
}

function sellerCreate(name, contact, rating, cb) {
    sellerDetail = { 
        name: name, 
        contact: contact,
        rating: rating, 
    }

    const seller = new Seller(sellerDetail);

    seller.save(function (err) {
        if (err) {
            cb(err, null);
            return;
        }

        console.log(`New Seller: ${seller}`);
        sellers.push(seller);
        cb(null, seller);
    });
}

function evCreate(make, model, year, price, mileage, location, imageUrl, seller, listDate, 
            equipmentAndOptions, exterior, interior, vehicleIdentificationNumber, 
            fullVehicleInspection, cb) {
    evDetail = { 
        make: make, 
        model: model,
        year: year,
        price: price,
        mileage: mileage,
        location: location,
        image_url: imageUrl,
        seller: seller,
        list_date: listDate,
        equipment_and_options: equipmentAndOptions,
        exterior: exterior,
        interior: interior,
        vehicle_identification_number: vehicleIdentificationNumber,
        full_vehicle_inspection: fullVehicleInspection, 
    }

    const ev = new EV(evDetail);

    ev.save(function (err) {
        if (err) {
            cb(err, null);
            return;
        }

        console.log(`New EV: ${ev}`);
        evs.push(ev);
        cb(null, ev);
    });
}

function createMakes(cb) {
    async.series([
        function (callback) {
            makeCreate('Tesla', callback);
        },
        function (callback) {
            makeCreate('Nissan', callback);
        },
        function (callback) {
            makeCreate('Renault', callback);
        },
        function (callback) {
            makeCreate('Hyundai', callback);
        },
        function (callback) {
            makeCreate('Kia', callback);
        },
        function (callback) {
            makeCreate('Volkswagen', callback);
        },
        function (callback) {
            makeCreate('BMW', callback);
        },
        function (callback) {
            makeCreate('Audi', callback);
        },
        function (callback) {
            makeCreate('Mercedes-Benz', callback);
        },
        function (callback) {
            makeCreate('Jaguar', callback);
        },
        function (callback) {
            makeCreate('Polestar', callback);
        },
        function (callback) {
            makeCreate('Peugeot', callback);
        },
    ],
    // Optional callback
    cb
    );
}

function createModels(cb) {
    async.series([
        function (callback) {
            modelCreate(makes[0], 'Model S', false, 'High', 'Fast', 80000, 4.7, callback);
        },
        function (callback) {
            modelCreate(makes[0], 'Model 3', false, 'High', 'Fast', 50000, 4.6, callback);
        },
        function (callback) {
            modelCreate(makes[1], 'Leaf', false, 'Medium', 'Fast', 35000, 4.5, callback);
        },
        function (callback) {
            modelCreate(makes[2], 'Zoe', false, 'Medium', 'Fast', 35000, 4.7, callback);
        },
        function (callback) {
            modelCreate(makes[3], 'Kona', false, 'Medium', 'Fast', 45000, 4.5, callback);
        },
        function (callback) {
            modelCreate(makes[4], 'e-Niro', false, 'Medium', 'Fast', 40000, 4.5, callback);
        },
        function (callback) {
            modelCreate(makes[5], 'e-Golf', false, 'Medium', 'Fast', 50000, 4.7, callback);
        },
        function (callback) {
            modelCreate(makes[6], 'i3', false, 'High', 'Fast', 60000, 4.6, callback);
        },
        function (callback) {
            modelCreate(makes[7], 'e-tron', '55', 'High', 'Fast', 50000, 4.5, callback);
        },
        function (callback) {
            modelCreate(makes[8], 'EQC', false, 'High', 'Fast', 70000, 4.6, callback);
        },
        function (callback) {
            modelCreate(makes[9], 'I-Pace', false, 'High', 'Fast', 70000, 4.6, callback);
        },
        function (callback) {
            modelCreate(makes[10], '2', false, 'High', 'Fast', 60000, 4.5, callback);
        },
        function (callback) {
            modelCreate(makes[11], 'e208', false, 'Medium', 'Fast', 35000, 4.5, callback);
        },
    ],
    // Optional callback
    cb
    );
}

function createLocations(cb) {
    async.series([
        function (callback) {
            locationCreate('London', 'UK', callback);
        },
        function (callback) {
            locationCreate('Manchester', 'UK', callback);
        },
        function (callback) {
            locationCreate('Liverpool', 'UK', callback);
        },
        function (callback) {
            locationCreate('Bristol', 'UK', callback);
        },
        function (callback) {
            locationCreate('Brighton', 'UK', callback);
        },
        function (callback) {
            locationCreate('Southampton', 'UK', callback);
        },
        function (callback) {
            locationCreate('Leeds', 'UK', callback);
        },
        function (callback) {
            locationCreate('Hull', 'UK', callback);
        },
        function (callback) {
            locationCreate('Leicester', 'UK', callback);
        },
        function (callback) {
            locationCreate('Portsmouth', 'UK', callback);
        },
        function (callback) {
            locationCreate('York', 'UK', callback);
        },
    ],
    // Optional callback
    cb
    );
}

function createSellers(cb) {
    async.series([
        function (callback) {
            sellerCreate('Emily P.', proc.env.CONTACT_EMAIL, 5, callback);
        },
        function (callback) {
            sellerCreate('John A.', proc.env.CONTACT_EMAIL, 5, callback);
        },
        function (callback) {
            sellerCreate('Mike C.', proc.env.CONTACT_EMAIL, 5, callback);
        },
        function (callback) {
            sellerCreate('Laura S.', proc.env.CONTACT_EMAIL, 5, callback);
        },
        function (callback) {
            sellerCreate('Miles D.', proc.env.CONTACT_EMAIL, 5, callback);
        },
        function (callback) {
            sellerCreate('Zoe Q.', proc.env.CONTACT_EMAIL, 5, callback);
        },
        function (callback) {
            sellerCreate('Clara F.', proc.env.CONTACT_EMAIL, 5, callback);
        },
        function (callback) {
            sellerCreate('Bella T.', proc.env.CONTACT_EMAIL, 5, callback);
        },
        function (callback) {
            sellerCreate('Chris C.', proc.env.CONTACT_EMAIL, 5, callback);
        },
        function (callback) {
            sellerCreate('Alex B.', proc.env.CONTACT_EMAIL, 5, callback);
        },
    ],
    // Optional callback
    cb
    );
}

function createEvs(cb) {
    async.parallel([
        function (callback) {
            evCreate(
                makes[0], 
                models[0], 
                2018, 
                43000,
                24550,
                locations[0],
                'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.7-d1rVTq_5plECVY8Pm47gHaE8%26pid%3DApi&f=1',
                sellers[0],
                Date.now,
                'Premium',
                'Premium',
                'Premium',
                'XXXXXXXXXXXXXXXXX',
                true,
                callback
            );
        },
        function (callback) {
            evCreate(
                makes[1], 
                models[2], 
                2017, 
                24000,
                34550,
                locations[1],
                'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages.hgmsites.net%2Fhug%2F2016-nissan-leaf_100527043_h.jpg&f=1&nofb=1',
                sellers[1],
                Date.now,
                'Standard',
                'Standard',
                'Standard',
                'XXXXXXXXXXXXXXXXX',
                true,
                callback
            );
        },
        function (callback) {
            evCreate(
                makes[2], 
                models[3], 
                2016, 
                17250,
                54500,
                locations[2],
                'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.cdn.autocar.co.uk%2Fsites%2Fautocar.co.uk%2Ffiles%2Fstyles%2Fgallery_slide%2Fpublic%2Frenault-zoe.jpg%3Fitok%3DpnEKK1ba&f=1&nofb=1',
                sellers[2],
                Date.now,
                'Standard',
                'Standard',
                'Standard',
                'XXXXXXXXXXXXXXXXX',
                true,
                callback
            );
        },
        function (callback) {
            evCreate(
                makes[3], 
                models[4], 
                2019, 
                37500,
                34500,
                locations[3],
                'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Ff%2Ff9%2F2018_Hyundai_Kona_SE_1.0.jpg%2F1200px-2018_Hyundai_Kona_SE_1.0.jpg&f=1&nofb=1',
                sellers[3],
                Date.now,
                'Premium',
                'Standard',
                'Standard',
                'XXXXXXXXXXXXXXXXX',
                true,
                callback
            );
        },
        function (callback) {
            evCreate(
                makes[4], 
                models[5], 
                2019, 
                23500,
                14500,
                locations[4],
                'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.drivingelectric.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Farticle_image_desktop%2Fpublic%2F2018-11%2F2kiae-niro.jpg%3Fh%3Dc3635fa2%26itok%3DhuFgMWcL&f=1&nofb=1',
                sellers[4],
                Date.now,
                'Premium',
                'Premium',
                'Standard',
                'XXXXXXXXXXXXXXXXX',
                false,
                callback
            );
        },
        function (callback) {
            evCreate(
                makes[5], 
                models[6], 
                2018, 
                13500,
                34500,
                locations[5],
                'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.telegraph.co.uk%2Fcars%2Fimages%2F2017%2F06%2F20%2FTELEMMGLPICT000130092501-xlarge_trans_NvBQzQNjv4BqJQuPXpcEMOatKkwW02PS65oSssFO5HHodOf-e6p-uYU.jpeg&f=1&nofb=1',
                sellers[5],
                Date.now,
                'Premium',
                'Standard',
                'Premium',
                'XXXXXXXXXXXXXXXXX',
                true,
                callback
            );
        },
        function (callback) {
            evCreate(
                makes[6], 
                models[7], 
                2015, 
                30500,
                66000,
                locations[6],
                'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages.cdn.autocar.co.uk%2Fsites%2Fautocar.co.uk%2Ffiles%2Fstyles%2Fgallery_slide%2Fpublic%2FBMWi3-Stan_30125.jpg%3Fitok%3DqRtk_UkH&f=1&nofb=1',
                sellers[6],
                Date.now,
                'Premium',
                'Premium',
                'Premium',
                'XXXXXXXXXXXXXXXXX',
                false,
                callback
            );
        },
        function (callback) {
            evCreate(
                makes[7], 
                models[8], 
                2018, 
                38500,
                12400,
                locations[7],
                'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.hdcarwallpapers.com%2Fwalls%2Faudi_e_tron_55_quattro_2019_4k_5-HD.jpg&f=1&nofb=1',
                sellers[7],
                Date.now,
                'Premium',
                'Premium',
                'Premium',
                'XXXXXXXXXXXXXXXXX',
                false,
                callback
            );
        },
        function (callback) {
            evCreate(
                makes[8], 
                models[9], 
                2020, 
                58000,
                22700,
                locations[8],
                'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.autoexpress.co.uk%2Fimage%2Fprivate%2Fs--Wzb4sPbF--%2Fv1565018660%2Fautoexpress%2F2019%2F08%2F01_2.jpg&f=1&nofb=1',
                sellers[8],
                Date.now,
                'Premium',
                'Premium',
                'Premium',
                'XXXXXXXXXXXXXXXXX',
                false,
                callback
            );
        },
        function (callback) {
            evCreate(
                makes[9], 
                models[10], 
                2019, 
                55000,
                32700,
                locations[9],
                'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F3%2F37%2F2018_Jaguar_I-Pace_EV400_AWD_Front.jpg%2F1200px-2018_Jaguar_I-Pace_EV400_AWD_Front.jpg&f=1&nofb=1',
                sellers[9],
                Date.now,
                'Premium',
                'Premium',
                'Premium',
                'XXXXXXXXXXXXXXXXX',
                false,
                callback
            );
        },
        function (callback) {
            evCreate(
                makes[10], 
                models[11], 
                2020, 
                52000,
                8700,
                locations[10],
                'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F9to5google.com%2Fwp-content%2Fuploads%2Fsites%2F4%2F2019%2F02%2Fpolestar_2_1.jpg%3Fquality%3D82%26strip%3Dall&f=1&nofb=1',
                sellers[10],
                Date.now,
                'Premium',
                'Premium',
                'Premium',
                'XXXXXXXXXXXXXXXXX',
                false,
                callback
            );
        },
        function (callback) {
            evCreate(
                makes[11], 
                models[12], 
                2019, 
                28800,
                48705,
                locations[11],
                'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.iJnLtTabyraAS5eG4XgT2AHaFj%26pid%3DApi&f=1',
                sellers[11],
                Date.now,
                'Standard',
                'Standard',
                'Premium',
                'XXXXXXXXXXXXXXXXX',
                true,
                callback
            );
        },
    ],
    // Optional callback
    cb
    );
}

async.series([
    createMakes,
    createModels,
    createLocations,
    createSellers,
    createEvs
],
// Optional callback
function(err, results) {
    if (err) {
        console.log(`FINAL ERR: ${err}`);
    } else {
        console.log(`EVs: ${evs}`); 
    }
    // All done, disconnect from database
    mongoose.connection.close();
});