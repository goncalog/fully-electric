// GET home page.
exports.index = (req, res, next) => {
    res.json({ title: 'Fully Electric' });
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
