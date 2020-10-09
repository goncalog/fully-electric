const jwt = require('jsonwebtoken');

function withAuth(req, res, next) {
    const token = req.cookies.token;

    if (!token) {
        res.status(401);
        return res.json({ message: 'Unauthorized: No token provided' });
    }

    jwt.verify(token, process.env.SECRET, function (err, decoded) {
        if (err) {
            res.status(401);
            return res.json({ message: 'Unauthorized: Invalid token' });
        }

        req.name = decoded.name;
        next();        
    });
}

module.exports = withAuth;
