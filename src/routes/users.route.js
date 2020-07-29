const users = require("../controllers/users.controller");

// JWT Token Testing

const jwt = require("jsonwebtoken");
const verifyToken = require("../middlewares/verify.middleware");

module.exports = (app) => {

    app.use((req, res, next) => {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });
  
    app.get("/users/readAll", users.readAll);

    app.post("/users/read", users.read);

    app.put("/users/create", users.create);

    app.patch("/users/update", users.update);

    app.delete("/users/delete", users.delete);

    // JWT Token Testing

    app.get("/login", (req, res) => {
        let user = {
            user_id: "akjf"
        }

        let token = jwt.sign({user}, process.env.JWT_SECRET_KEY, { expiresIn: 120 });
        res.send({"token": token, "expiryInSec": 120});
    });

    app.post("/home", verifyToken, (req, res) => {
        res.send("With in home");
    });

};