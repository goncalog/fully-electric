// GET home page.
exports.index = (req, res, next) => {
    res.json({ title: 'Fully Electric' });
}

// GET list of all evs
exports.getEvs = (req, res, next) => {
    res.json({ title: 'List of all EVs' })
}

// GET unique ev
exports.getUniqueEv = (req, res, next) => {
    res.json({ title: `Unique EV with id ${req.params.ev_id}` })
}
  
// Placeholder code for testing POST routes.
const testArray = [];

exports.getTest = (req, res, next) => {
    res.json({ testArray });
}

exports.postTest = (req, res, next) => {
    testArray.push(req.body.item);
    res.send('Success!');
}
