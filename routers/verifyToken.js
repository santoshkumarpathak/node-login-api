const jwt = require('jsonwebtoken');

 //function auth(req, res, next) {
module.exports = function (req, res, next) {
    const token = req.header('auth-token');
    if (token) return res.status(401).send('access denied')
    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        //req.user = verified;
        res.send(verified)
        //auth verify
        next();
    } catch (err) {
        res.status(400).send('Invalid Token');

    }
}