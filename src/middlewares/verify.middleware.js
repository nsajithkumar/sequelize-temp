const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    let bearerHeader = req.headers["authorization"];
    if(typeof(bearerHeader) !== "undefined") {
        let flag = 1;
        let bearerToken = bearerHeader.split(" ")[1];
        jwt.verify(bearerToken, process.env.JWT_SECRET_KEY, (err, data) => {
            if(err) {
                flag = 0;
            }
        });
        if(flag) {
            next();
        } else {
            res.sendStatus(403);
            return;
        }
    } else {
        res.sendStatus(403);
    }
}