function withAuth(req, res, next) {
    console.log(`withAuth MIDDLEWARE: ${req.user}`);
    if (!req.user) {
        res.status(401);
        return res.json({ message: 'Unauthorized: User not logged in' });
    }

    next();
}

module.exports = withAuth;
