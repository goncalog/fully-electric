// GET make
exports.getMake = (req, res, next) => {
    res.json({ title: `Make with id ${req.params.id}` });
}
