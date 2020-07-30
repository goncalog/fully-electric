// GET model
exports.getModel = (req, res, next) => {
    res.json({ title: `Model with id ${req.params.id}` });
}
