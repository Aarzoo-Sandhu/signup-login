const jwt = require('jsonwebtoken');


async function AuthenticationUser(req, res, next) {
    try {
        const token = req.headers['authorization'];
        const decodeJwt = jwt.verify(token, process.env.JWT_SECRET);
        if(decodeJwt){
            next();
        }
    } catch (error) {
        error.message = 'invalid JWT token'
        res.status(401).json({ message: error.message });
    }

}


module.exports = {AuthenticationUser}